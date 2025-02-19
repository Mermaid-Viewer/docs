# Flowchart

Flowcharts are diagrams that represent workflows or processes. Mermaid can render flowcharts from text descriptions.

## Syntax

### Nodes
- `id[text]` - Rectangle node
- `id(text)` - Rounded rectangle node
- `id([text])` - Stadium-shaped node
- `id[[text]]` - Subroutine node
- `id>text]` - Asymmetric node
- `id{text}` - Rhombus node
- `id{{text}}` - Hexagon node
- `id[/text/]` - Parallelogram node
- `id[\text\]` - Parallelogram alt node

### Links
- `-->` - Arrow
- `---` - Open link
- `-.->` - Dotted link
- `==>` - Thick link
- `--text-->` - Arrow with text
- `--text---` - Open link with text
- `==text==>` - Thick link with text

## Example

```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
```

## Advanced Example

Here's a more complex flowchart showing various node types and connections:

```mermaid
flowchart LR
    A[/Input/] --> B(Process)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]
    D --> F([Output])
    E --> F
    F --> G{{Display}}
    G -.-> H>Exit]
```

## Direction

You can specify the direction of the flowchart:
- `TB` - Top to bottom
- `TD` - Top-down (same as TB)
- `BT` - Bottom to top
- `RL` - Right to left
- `LR` - Left to right

## Styling

You can add styles to nodes and links:

```mermaid
flowchart LR
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
```

## Tips
- Keep the flowchart simple and clear
- Use consistent node types for similar elements
- Add meaningful labels to connections
- Consider the direction that best presents your flow
