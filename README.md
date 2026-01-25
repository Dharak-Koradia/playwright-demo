# Playwright UI Automation Framework

This repository contains a **Playwright-based end-to-end UI test automation framework** built using **TypeScript**.
The project demonstrates a **production-style test architecture** with Page Object Model, data-driven testing, CI integration, and flaky test handling.

---

## 🧰 Tech Stack

- **Playwright** (UI Automation)
- **TypeScript**
- **Playwright Test Runner**
- **GitHub Actions (CI)**
- **Node.js**
- **dotenv** for environment configuration

---

## 🏗️ Framework Architecture

The framework follows a clean separation of concerns to improve scalability and maintainability:

- **pages/** – Page Object Model (POM) implementations for UI interactions
- **tests/** – End-to-end test scenarios
- **fixtures/** – Shared test setup and teardown
- **utils/** – Reusable utilities (e.g., test data helpers)
- **test-data/** – Externalized test data for data-driven testing
- **playwright.config.ts** – Global test configuration (timeouts, retries, reporters, environment setup)

---

## ✅ Key Features

- End-to-end UI test automation using **Playwright with TypeScript**
- **Page Object Model (POM)** to decouple test logic from UI locators
- **Data-driven testing** using external test data utilities
- Built-in **retry mechanism** to handle flaky test scenarios
- Automatic capture of **screenshots, videos, and traces** on failures
- **HTML test reports** generated after execution
- **CI integration using GitHub Actions** for automated test execution
- Support for **headless execution** in CI environments

---

## 🚀 Running Tests Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Run all tests (headless by default)

```bash
npx playwright test
```

### 3. Run tests in headed mode (for debugging)

```bash
npx playwright test --headed
```

### 4. Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

---

## 📊 Viewing Test Results & Reports

### HTML Report

After test execution, Playwright generates an HTML report containing:

- Test pass/fail status
- Screenshots, videos, and traces for failed tests

To open the report locally:

```bash
npx playwright show-report
```

### Traces

For failed or retried tests, Playwright traces are captured automatically. Traces can be opened from the HTML report to inspect:

- Step-by-step actions
- Network activity
- DOM snapshots

---

## 🤖 CI/CD (GitHub Actions)

This project is integrated with **GitHub Actions**, enabling automated execution of Playwright tests on every push.

> ⚠️ **Note:** One test in this repository is intentionally designed to be flaky and one test is intentionally designed to be failing to demonstrate:
>
> - Retry behavior
> - Failure diagnostics
> - Trace and report generation in CI

As a result, CI runs _may_ appear as **failed**, which is expected and intentional for learning and demonstration purposes.

Test artifacts and reports are published in CI to aid failure analysis.

### To open a report downloaded from CI:

- extract the zip file, and verify that "**playwright-report**" folder exists
- use project root folder to run this command
- then run the following command:

```bash
npx playwright show-report <full_path_to_playwright-report_folder>
```

- the report should be opened in browser

### Test Selection Strategy

Tests are tagged based on purpose:

- `@smoke` – critical flows executed in CI for fast feedback
- `@e2e` – full end-to-end user journeys
- `@negative` – flaky or intentionally failing tests for learning and diagnostics

In CI, only `@smoke` tests are executed to ensure stability and quick validation of core functionality.
