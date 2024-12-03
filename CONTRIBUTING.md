# Contributing to Meeting Notes Simplifier

We love your input! We want to make contributing to Meeting Notes Simplifier as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use proper TypeScript types and interfaces

## Project Structure Guidelines

- Keep components small and focused
- Place shared utilities in the `utils` directory
- Place business logic in the `services` directory
- Use proper file naming conventions:
  - Components: PascalCase
  - Utilities: camelCase
  - Types/Interfaces: PascalCase

## Testing

- Write meaningful tests for new features
- Update existing tests when modifying features
- Ensure all tests pass before submitting PR

## Documentation

- Update README.md with details of changes to the interface
- Update API documentation for any modified endpoints
- Add comments to explain complex code sections
- Include relevant examples in documentation

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the package.json version numbers appropriately
3. The PR will be merged once you have the sign-off of two other developers