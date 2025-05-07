# EShopper Monorepo Documentation

Welcome to the **EShopper Monorepo**, a repository designed to follow modern best practices for monorepo development. This repository enables efficient code sharing and collaboration while maintaining a clear separation of concerns between frontend and backend components. It uses **Nx** for workspace management, along with Angular and NestJS to deliver a scalable and maintainable e-commerce platform.

---

## Table of Contents
- [Monorepo Organization](#monorepo-organization)
- [Frontend: Angular 19 Application](#frontend-angular-19-application)
- [Backend: NestJS Application](#backend-nestjs-application)
- [Shared Code and Libraries](#shared-code-and-libraries)
- [Configuration](#configuration)
- [How to Set Up Angular 19 and NestJS CLI](#how-to-set-up-angular-19-and-nestjs-cli)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Conclusion](#conclusion)

---

## Monorepo Organization

This monorepo is structured to separate the frontend and backend applications and leverage shared libraries for reusable code.

```
apps/
  web/       # Angular 19 frontend application
  api/       # NestJS backend application
libs/
  shared-interfaces/  # Shared TypeScript interfaces
  shared-utils/       # Shared utility functions
nx.json               # Nx workspace configuration
tsconfig.base.json    # Base TypeScript configuration
```

### Key Features
- **Separation of Concerns:** Frontend and backend are isolated under the `apps/` directory.
- **Shared Libraries:** Common code resides in the `libs/` directory for maximum reusability.
- **Centralized Configuration:** Nx workspace and TypeScript configurations ensure consistency across the project.

---

## Frontend: Angular 19 Application

The frontend application is built using **Angular 19** and follows a component-based architecture to ensure maintainability and scalability.

### Key Features
- **Component-Based Architecture:** Organized components for better manageability.
- **Feature Modules:** Pages are grouped into feature modules for modularity.
- **Services for Business Logic:** Services handle API communication and business logic.
- **Strict TypeScript Typing:** Ensures type safety and early detection of errors.

### Directory Structure
```
apps/web/
  src/
    app/
      features/
        auth/         # Authentication pages
        products/     # Product listing and details pages
        cart/         # Shopping cart pages
      core/
        services/     # Core business logic services
        guards/       # Route guards for authentication
      shared/
        components/   # Shared UI components
        directives/   # Shared directives
        pipes/        # Shared pipes
```

---

## Backend: NestJS Application

The backend application is powered by **NestJS** and follows a modular architecture inspired by domain-driven design.

### Key Features
- **Modular Architecture:** Organized by domains like `auth`, `products`, `users`, and `cart`.
- **Prisma ORM Integration:** Simplifies database management with type-safe queries.
- **DTOs for Validation:** Ensures data integrity with comprehensive Data Transfer Object (DTO) validation.

### Directory Structure
```
apps/api/
  src/
    modules/
      auth/          # Authentication module
      products/      # Products module
      users/         # Users module
      cart/          # Shopping cart module
    shared/
      exceptions/    # Shared exception classes
      utils/         # Shared utility functions
```

---

## Shared Code and Libraries

The `libs/` directory contains reusable libraries that can be shared between the frontend and backend applications.

### Key Libraries
1. **`shared-interfaces`:**
   - Contains common TypeScript interfaces used across the project.
   - Example: `User`, `Product`, and `CartItem` interfaces.

2. **`shared-utils`:**
   - Provides utility functions for cross-project use.
   - Example: String manipulators, date formatters, and reusable helpers.

---

## Configuration

The monorepo uses **Nx** for workspace management and includes shared configurations for TypeScript, linting, and environment variables.

### Key Configuration Files
1. **`nx.json`:** Defines the Nx workspace and manages project dependencies.
2. **`tsconfig.base.json`:** Root-level TypeScript configuration shared across all applications and libraries.
3. **Environment-Specific Configurations:**
   - Separate environment files for development, staging, and production.

---

## How to Set Up Angular 19 and NestJS CLI

Follow these steps to set up Angular 19 and NestJS CLI for your local development environment:

### Step 1: Install Node.js
Ensure that you have Node.js (version 16 or later) installed on your system.

Download it from [Node.js official website](https://nodejs.org/).

---

### Step 2: Install Angular CLI
Install the Angular CLI globally using npm:
```bash
npm install -g @angular/cli@19
```

Verify the installation:
```bash
ng version
```

---

### Step 3: Install NestJS CLI
Install the NestJS CLI globally using npm:
```bash
npm install -g @nestjs/cli
```

Verify the installation:
```bash
nest --version
```

---

### Step 4: Create Applications
You can create Angular and NestJS applications within the Nx workspace:
```bash
nx g @nrwl/angular:app web
nx g @nrwl/nest:app api
```

This will automatically set up the `apps/web` (frontend) and `apps/api` (backend) directories.

---

## Getting Started

Follow these steps to set up the EShopper Monorepo on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sisovin/eshopper-monorepo-.git
   cd eshopper-monorepo-
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Applications:**
   - Start the frontend:
     ```bash
     nx serve web
     ```
   - Start the backend:
     ```bash
     nx serve api
     ```

4. **Build All Projects:**
   ```bash
   nx build
   ```

---

## Development Guidelines

### Best Practices
- **Feature Isolation:** Keep features isolated in their respective modules or directories.
- **Code Reuse:** Use shared libraries in `libs/` to avoid duplication.
- **Strict Typing:** Enable TypeScript strict mode to catch potential issues early.
- **Consistent Formatting:** Follow shared ESLint and Prettier rules.

### Nx Commands
- **Run a specific project:**
  ```bash
  nx serve <project-name>
  ```
- **Build a specific project:**
  ```bash
  nx build <project-name>
  ```
- **Lint all projects:**
  ```bash
  nx lint
  ```
- **Test all projects:**
  ```bash
  nx test
  ```

---

## Conclusion

The **EShopper Monorepo** provides a robust and scalable structure for building a modern e-commerce platform. By leveraging shared libraries, centralized configurations, and modern tools like Nx, Angular, and NestJS, this monorepo ensures efficient development and maintainable code.
