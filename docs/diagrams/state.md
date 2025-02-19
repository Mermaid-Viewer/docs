# State Diagram

State diagrams describe the different states of a system and the transitions between those states. They are particularly useful for modeling the behavior of reactive systems.

## Syntax

### Basic Elements
- States: `state StateName`
- Transitions: `-->` 
- Start state: `[*]`
- End state: `[*]`
- Composite states: Can contain nested states
- Choice points: `<<choice>>`
- Notes: `note left/right of`

## Basic Example

```mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

## Advanced Example

Here's a more complex state diagram showing various features:

```mermaid
stateDiagram-v2
    [*] --> Idle
    
    state Idle {
        [*] --> Ready
        Ready --> Processing: Start
        Processing --> Ready: Complete
    }
    
    Idle --> Active: Activate
    
    state Active {
        [*] --> Running
        Running --> Paused: Pause
        Paused --> Running: Resume
        Running --> Error: Fail
        Error --> Running: Retry
    }
    
    Active --> Idle: Deactivate
    Active --> [*]: Shutdown
    
    note right of Active: System is fully operational
    note left of Idle: System is on standby
```

## Composite States

```mermaid
stateDiagram-v2
    [*] --> First
    First --> Second
    
    state First {
        [*] --> fir
        fir --> [*]
    }
    
    state Second {
        [*] --> sec
        sec --> [*]
    }
```

## Choice Points

```mermaid
stateDiagram-v2
    state fork_state <<choice>>
    [*] --> fork_state
    fork_state --> State1: Condition 1
    fork_state --> State2: Condition 2
```

## Concurrent States

```mermaid
stateDiagram-v2
    [*] --> Active
    
    state Active {
        state "CPU Running" as CPU
        state "Disk I/O" as IO
        --
        state "Memory Access" as Memory
    }
```

## Styling

You can customize the appearance using:
- Different arrow types
- State descriptions
- Notes
- Direction (LR or TB)

## Tips
- Start with the main states of your system
- Use clear and concise state names
- Include all possible transitions
- Add conditions to transitions when necessary
- Use composite states to manage complexity
- Document important state behaviors with notes
