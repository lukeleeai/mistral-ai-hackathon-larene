from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, Optional
from fastapi.responses import JSONResponse
from attack_tap import run_security_test as atk_run_security_test
from defense_tap import run_complete_defense_test as def_run_security_test

app = FastAPI()

# Define a data model for the input request
class SecurityTestInput(BaseModel):
    system_prompt: str
    branching_factor: int
    max_width: int
    max_depth: int


# A global cache to store the results of the tests
test_results_cache: Dict[str, Dict[str, Optional[int]]] = {}


# Endpoint to run the attack security test
@app.post("/atk_run_security_test/")
async def atk_run_security_test(input_data: SecurityTestInput):
    """
    Runs the security test based on the given parameters.
    Returns the scenarios and scores (without showing attack prompts or responses).
    """
    # Call the `run_security_test` function from your original code
    results = atk_run_security_test(
        input_data.system_prompt,
        input_data.branching_factor,
        input_data.max_width,
        input_data.max_depth,
    )

    # Filter results to only include scenarios and scores
    filtered_results = {
        scenario: {"score": 10 if result else None}
        for scenario, result in results.items()
    }

    # Store results in cache with system prompt as key
    test_results_cache[input_data.system_prompt] = filtered_results

    return JSONResponse(content=filtered_results)


# Endpoint to run the defense security test
@app.post("/def_run_security_test/")
async def def_run_security_test(input_data: SecurityTestInput):
    """
    Runs the security test based on the given parameters.
    Returns the scenarios and scores (without showing attack prompts or responses).
    """
    # Call the `run_security_test` function from your original code
    results = def_run_security_test(
        input_data.system_prompt,
        input_data.branching_factor,
        input_data.max_width,
        input_data.max_depth,
    )

    # Filter results to only include scenarios and scores
    filtered_results = {
        scenario: {"score": 10 if result else None}
        for scenario, result in results.items()
    }

    # Store results in cache with system prompt as key
    test_results_cache[input_data.system_prompt] = filtered_results

    return JSONResponse(content=filtered_results)


# Endpoint to retrieve the results of a previous test
@app.get("/get_test_results/")
async def get_test_results(system_prompt: str):
    """
    Retrieves the security test results for a given system prompt.
    """
    results = test_results_cache.get(system_prompt, None)
    if results is None:
        return JSONResponse(
            status_code=404, content={"error": "No results found for this system prompt"}
        )
    return JSONResponse(content=results)
