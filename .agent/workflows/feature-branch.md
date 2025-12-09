---
description: Feature Branch Workflow Protocol
---

# Feature Branch Workflow

This workflow outlines the standard procedure for making larger changes to the codebase.

1.  **Start from Develop**: Always start by checking out the `develop` branch and pulling the latest changes.
    ```bash
    git checkout develop
    git pull origin develop
    ```

2.  **Create Feature Branch**: Create a new branch for your specific feature or fix.
    ```bash
    git checkout -b feature/name-of-feature
    ```

3.  **Implement Changes**: Make your code changes and commit them.
    ```bash
    git add .
    git commit -m "Description of changes"
    ```

4.  **Merge to Develop**: Switch back to `develop` and merge your feature branch.
    ```bash
    git checkout develop
    git merge feature/name-of-feature
    ```

// turbo-all
