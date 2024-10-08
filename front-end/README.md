# L'arène - Frontend

Welcome to the frontend repository of **L'arène** for Mistral AI.

## Project Overview

**L'arène** is a website designed to assist app developers who use Large Language Models (LLMs) in preventing prompt injection attacks. This tool allows app owners to specify system prompts and additional parameters to simulate and visualize potential attack scenarios.

## Features

- **System Prompt Specification**: Define the instructions context given to your customized bot.
- **Parameter Addition**: Add extra parameters such as user request examples, war parameters, and attack parameters.
- **Attack Simulation**: Generate a visual tree of attack prompts by clicking on 'Launch Attack'.
- **Attack Visualization**: For each node in the tree, view subsequent attacks that are potentially more effective than their predecessors.
- **Security Scoring**: Each attack is evaluated with a security score based on whether the bot's response has been compromised.

## Getting Started

To get started with **L'arène**, follow these steps:

1. Clone the repository:

  ```bash
  git clone git@github.com:lukeleeai/mistral-ai-hackathon-larene.git
  ```

2. Navigate to the project directory:

  ```bash
  cd front-end
  ```

3. Install the dependencies:

  ```bash
  npm install
  ```

4. Start the development server:

  ```bash
  npm start
  ```

Thank you for using **L'arène**!
