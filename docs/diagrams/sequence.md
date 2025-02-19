# Sequence Diagram

Sequence diagrams show how processes operate with one another and in what order. They're excellent for documenting system interactions.

## Syntax

### Basic Elements
- Participants: `participant A` or `actor A`
- Messages: 
  - Solid line: `->` 
  - Dotted line: `-->`
  - Solid line with arrowhead: `->>` 
  - Dotted line with arrowhead: `-->>`
- Activations: `activate` and `deactivate`
- Notes: `Note left of`, `Note right of`, `Note over`
- Loops: `loop [text]`
- Alternative paths: `alt [text]` and `else [text]`
- Optional paths: `opt [text]`
- Parallel paths: `par [text]`

## Basic Example

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    
    Browser->>Server: GET /api/data
    activate Server
    Server-->>Browser: Response with data
    deactivate Server
```

## Advanced Example

Here's a more complex sequence diagram showing various features:

```mermaid
sequenceDiagram
    actor User
    participant Client
    participant Server
    participant Database

    User->>Client: Start Application
    activate Client
    
    Client->>Server: Request Authentication
    activate Server
    
    Server->>Database: Query User
    activate Database
    Database-->>Server: Return User Data
    deactivate Database
    
    alt Valid User
        Server-->>Client: Authentication Success
        Client-->>User: Show Dashboard
    else Invalid User
        Server-->>Client: Authentication Failed
        Client-->>User: Show Error
    end
    
    deactivate Server
    deactivate Client
```

## Additional Features

### Notes
```mermaid
sequenceDiagram
    participant A
    participant B
    Note left of A: Note on left
    Note right of B: Note on right
    Note over A,B: Note over both
```

### Loops
```mermaid
sequenceDiagram
    participant A
    participant B
    loop Every minute
        A->>B: Heartbeat
        B-->>A: Response
    end
```

## Styling

You can customize the appearance using these directives:
- `autonumber` - Automatically number the messages
- `participant A as "Display Name"` - Use aliases for participants
- Colors and other styles can be applied using CSS

## Tips
- Keep the diagram focused on the key interactions
- Use clear and concise message descriptions
- Group related interactions using loops or alt/opt blocks
- Add notes to explain complex interactions
- Consider using aliases for long participant names
