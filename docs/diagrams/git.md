# Git Graph

Git graphs visualize Git repository history, showing commits, branches, and merges in a clear and understandable way.

## Syntax

### Basic Elements
- Commits: `commit id: "message"`
- Branches: `branch [name]`
- Checkouts: `checkout [branch]`
- Merges: `merge [branch]`
- Cherry-picks: `cherry-pick [id]`

## Basic Example

```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
```

## Advanced Example

Here's a more complex git graph showing feature development workflow:

```mermaid
gitGraph
    commit id: "Initial commit"
    commit id: "Add README"
    branch develop
    checkout develop
    commit id: "Set up project structure"
    branch feature/login
    checkout feature/login
    commit id: "Add login form"
    commit id: "Add authentication"
    checkout develop
    merge feature/login
    branch feature/dashboard
    checkout feature/dashboard
    commit id: "Create dashboard layout"
    commit id: "Add widgets"
    checkout develop
    merge feature/dashboard
    checkout main
    merge develop tag: "v1.0.0"
```

## Branch Management

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
```

## Release Management

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch release/1.0
    checkout release/1.0
    commit id: "Version bump"
    checkout main
    merge release/1.0 tag: "v1.0.0"
    checkout develop
    merge main
```

## Additional Features

### Tags and Releases

```mermaid
gitGraph
    commit
    commit tag: "v0.1.0"
    branch develop
    commit
    commit
    checkout main
    merge develop tag: "v0.2.0"
```

### Cherry-picking

```mermaid
gitGraph
    commit id: "feat-A"
    branch feature
    checkout feature
    commit id: "feat-B"
    checkout main
    cherry-pick id: "feat-B"
```

## Styling

The git graph automatically:
- Shows commit history
- Displays branch names
- Indicates merge points
- Shows tags and releases
- Uses different colors for branches

## Tips
- Keep commit messages clear and concise
- Use meaningful branch names
- Show important tags and releases
- Include significant merges
- Demonstrate branch strategy
- Keep the graph simple and readable
- Use consistent branch naming conventions
- Include relevant commit IDs when needed
