# L'arène Backend

Welcome to the backend repository of the L'arène project. This repository contains the code for the backend services of the project, which are built using Python, FastAPI, and Uvicorn.

## Overview

L'arène is a project focused on protecting system prompts from prompt injection attacks and jailbreaking attacks. The backend services are responsible for generating attack prompts and devising defensive strategies to safeguard the system prompt against these attacks.

## Technologies Used

- **Python**: The primary programming language used for the backend services.
- **FastAPI**: A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
- **Uvicorn**: A lightning-fast ASGI server implementation, using `uvloop` and `httptools`.
- **langchain_mistralai**: A library used to integrate and utilize the Mistral AI API.

## Features

- **API Endpoints**: Developed using FastAPI to handle various requests and responses.
- **Attack Prompt Generation**: Mechanisms to generate attack prompts to test the system's robustness.
- **Defensive Strategies**: Methods to create defensive responses to protect the system prompt from attacks.

## Getting Started

To get started with the backend services, follow these steps:

1. **Clone the repository**:
  ```bash
  git clone https://github.com/Nabil-cheikh/l-arene-backend.git
  cd l-arene-backend
  ```

2. **Install dependencies**:
  ```bash
  pip install -r requirements.txt
  ```

3. **Run the application**:
  ```bash
  uvicorn main:app --reload
  ```

## Contributing

We welcome contributions to improve the project. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact us at [email@example.com](mailto:email@example.com).
