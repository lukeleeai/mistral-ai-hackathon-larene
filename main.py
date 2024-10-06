from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Dict, List, Tuple, Optional
from fastapi.responses import JSONResponse

from attack_tap import run_security_test as atk_run_security_test
from defense_tap import run_complete_defense_test as def_run_security_test

app = FastAPI()

class SecurityAttackTestInput(BaseModel):
    system_prompt: str
    branching_factor: int = 3
    max_width: int = 3
    max_depth: int = 3
    top_k: int = 5

class SecurityDefenseTestInput(BaseModel):
    system_prompt: str
    attack_scenarios: List[str]
    attack_prompts: Dict[str, List[str]]
    branching_factor: int = 3
    max_width: int = 3
    max_depth: int = 3
    top_k: int = 5

# Global cache for storing test results and intermediate data
test_results_cache: Dict[str, Dict[str, any]] = {}

@app.post("/initiate_attack_test/")
async def initiate_attack_test(input_data: SecurityAttackTestInput, background_tasks: BackgroundTasks):
    # Generate initial attack scenarios quickly and cache
    scenarios = atk_run_security_test.generate_initial_scenarios(input_data.system_prompt)
    test_results_cache[input_data.system_prompt] = {"scenarios": scenarios, "attacks": None, "defenses": None}

    # Background task to generate detailed attacks
    background_tasks.add_task(run_detailed_attacks, input_data)
    return JSONResponse(content={"scenarios": scenarios})

async def run_detailed_attacks(input_data: SecurityAttackTestInput):
    results = atk_run_security_test(
        input_data.system_prompt,
        input_data.branching_factor,
        input_data.max_width,
        input_data.max_depth,
        input_data.top_k,
    )
    # Save detailed attack results in cache
    test_results_cache[input_data.system_prompt]["attacks"] = results

@app.get("/get_attack_results/")
async def get_attack_results(system_prompt: str):
    results = test_results_cache.get(system_prompt, {}).get("attacks")
    if results is None:
        return JSONResponse(status_code=202, content={"status": "Still processing"})
    return JSONResponse(content={"results": results})

@app.post("/initiate_defense_test/")
async def initiate_defense_test(input_data: SecurityDefenseTestInput, background_tasks: BackgroundTasks):
    # Assuming defense test requires completed attack results
    if "attacks" not in test_results_cache[input_data.system_prompt]:
        raise HTTPException(status_code=400, detail="Attack results must be generated first.")

    # Background task to run defense simulations
    background_tasks.add_task(run_defense_simulations, input_data)
    return JSONResponse(status_code=202, content={"status": "Defense simulation initiated"})

async def run_defense_simulations(input_data: SecurityDefenseTestInput):
    results, stats = def_run_security_test(
        input_data.system_prompt,
        input_data.attack_scenarios,
        input_data.attack_prompts,
        input_data.branching_factor,
        input_data.max_width,
        input_data.max_depth,
        input_data.top_k,
    )
    # Save defense results in cache
    test_results_cache[input_data.system_prompt]["defenses"] = {"results": results, "stats": stats}

@app.get("/get_defense_results/")
async def get_defense_results(system_prompt: str):
    results = test_results_cache.get(system_prompt, {}).get("defenses")
    if results is None:
        return JSONResponse(status_code=202, content={"status": "Still processing"})
    return JSONResponse(content=results)
