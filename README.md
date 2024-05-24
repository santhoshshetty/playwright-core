# Playwright Based Test Automation Framework

This project is designed to help implement Playwright-based test automation with a focus on best practices and seamless script development. It comes with essential features, demo tests, and standards to get you started quickly. Below are the detailed aspects of the project.

## Tech Stack

- **TypeScript with Playwright**: The primary technology used for scripting and automation.
- **.env**: Used for managing environment details and secrets securely.
- **Custom Fixture**: Reduces the overhead of creating objects in script files, enhancing test readability.
- **CI/CD with Sharding**: Enables parallel test execution across multiple containers.
- **Demo Tests**: Includes common web automation scenarios such as alerts, frames, multi-window, pop-up listeners, visual QA, and accessibility tests.
- **Static Code and Style Checks**: Ensures code quality with tools like ESLint, Prettier, and Husky.
- **Wrapper for page, actions and assertions management**: POC is completed. In the process of evaluating its benefits.

## Setup Instructions

1. **Clone the Project**

   ```sh
   git clone <repository-url>
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run All Tests**

   ```sh
   npm playwright test
   ```

4. **Run a Specific Test**
   To run a specific test in headful mode on the Chromium browser:
   ```sh
   npm playwright test -g "Test Name" --headed --projects=chromium
   ```

## Development and Collaboration

This framework is a work in progress. Feel free to explore its features, and if you're interested, let's connect collaborate and improve it together. Let's "Play" it wright! 😊

---
