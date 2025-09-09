# Git Standards and Workflow

## Branching Strategy

- **main**: Production-ready code. Only merge from `release` or `hotfix` branches.
- **develop**: The main development branch. All feature branches start from here.
- **feature/<feature-name>**: For new features. Example: `feature/user-authentication`.
- **hotfix/<fix-name>**: For urgent fixes in production.
- **release/vX.X.X**: For preparing a new production release.

## Commit Message Convention

Format: `<type>(<scope>): <description>`

**Types:**
- **feat**: New feature.
- **fix**: Bug fix.
- **docs**: Documentation changes.
- **style**: Code style changes (no functionality change).
- **refactor**: Code refactoring.
- **test**: Adding or refactoring tests.
- **chore**: Build process or auxiliary tool changes.

**Examples:**
- `feat(auth): add user login functionality`
- `fix(frontend): resolve login form validation issue`

## Code Review Process

1. Create feature branch from `develop`.
2. Make changes and commit with proper messages.
3. Push branch and create Pull Request to `develop`.
4. Request review from team members.
5. Address feedback and re-request review.
6. Merge after approval.
