# Gantt Chart

Gantt charts are used for project planning and scheduling. They show tasks, their durations, and dependencies over time.

## Syntax

### Basic Elements
- Title: `title [Chart Title]`
- Date format: `dateFormat YYYY-MM-DD`
- Section: `section [Section Name]`
- Tasks: `[Task Name] : [Task ID], [Start Date], [Duration]`
- Dependencies: `after [Task ID]`

### Time Units
- Minute: `1m`
- Hour: `1h`
- Day: `1d`
- Week: `1w`
- Month: `1M`

## Basic Example

```mermaid
gantt
    title Simple Project Schedule
    dateFormat  YYYY-MM-DD
    section Planning
    Project initiation    :a1, 2024-01-01, 1w
    Requirements gathering:a2, after a1, 2w
    section Development
    Implementation        :a3, after a2, 4w
    Testing              :a4, after a3, 2w
```

## Advanced Example

Here's a more complex Gantt chart showing a software development project:

```mermaid
gantt
    title Software Development Project
    dateFormat  YYYY-MM-DD
    
    section Planning
    Project kickoff       :done, a1, 2024-01-01, 2d
    Requirements analysis :active, a2, after a1, 1w
    System design        :a3, after a2, 2w
    
    section Development
    Backend development  :crit, a4, after a3, 4w
    Frontend development :a5, after a3, 4w
    API Integration      :a6, after a4, 1w
    
    section Testing
    Unit testing        :a7, after a5, 1w
    Integration testing  :a8, after a6, 2w
    User acceptance     :a9, after a8, 1w
    
    section Deployment
    Documentation       :a10, after a8, 1w
    Training           :a11, after a9, 4d
    Go Live            :milestone, a12, after a11, 0d
```

## Task States

You can mark tasks with different states:
- `done` - Completed tasks
- `active` - Currently active tasks
- `crit` - Critical tasks

```mermaid
gantt
    title Task States Example
    dateFormat YYYY-MM-DD
    
    section Progress
    Completed task    :done, t1, 2024-01-01, 1w
    Active task       :active, t2, after t1, 1w
    Critical task     :crit, t3, after t2, 1w
    Regular task      :t4, after t3, 1w
```

## Additional Features

### Milestones

Milestones are tasks with zero duration:

```mermaid
gantt
    title Project Milestones
    dateFormat YYYY-MM-DD
    
    section Phases
    Phase 1           :a1, 2024-01-01, 1w
    Milestone 1       :milestone, m1, after a1, 0d
    Phase 2           :a2, after m1, 2w
    Milestone 2       :milestone, m2, after a2, 0d
```

### Parallel Tasks

Tasks can run in parallel if they don't have dependencies:

```mermaid
gantt
    title Parallel Tasks
    dateFormat YYYY-MM-DD
    
    section Development
    Backend  :a1, 2024-01-01, 2w
    Frontend :a2, 2024-01-01, 2w
    Testing  :a3, after a1 a2, 1w
```

## Styling

The appearance can be customized with:
- Different task states (done, active, crit)
- Milestones
- Sections for grouping
- Dependencies between tasks

## Tips
- Keep task names concise but descriptive
- Use meaningful section names
- Show critical dependencies
- Include milestones for important dates
- Group related tasks in sections
- Consider using different states to show progress
- Be realistic with time estimates
