# Entity Relationship Diagram

Entity Relationship (ER) diagrams are used to model the relationships between entities in a database system. They show the logical structure of databases.

## Syntax

### Basic Elements
- Entities: `entity EntityName`
- Attributes: Listed within entities
- Relationships: Various types of connections between entities
- Cardinality: `|o--o|`, `}o--o{`, etc.

### Relationship Types
- One-to-One: `||--||`
- One-to-Many: `||--o{`
- Many-to-One: `}o--||`
- Many-to-Many: `}o--o{`

## Basic Example

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT ||--o{ LINE-ITEM : "ordered in"
```

## Advanced Example

Here's a more complex ER diagram showing a blog system:

```mermaid
erDiagram
    USER ||--o{ POST : writes
    USER ||--o{ COMMENT : makes
    USER {
        int id
        string username
        string email
        string password
        date created_at
    }
    POST ||--o{ COMMENT : has
    POST ||--o{ CATEGORY : belongs_to
    POST {
        int id
        string title
        text content
        date published_at
        bool is_published
    }
    COMMENT {
        int id
        text content
        date created_at
    }
    CATEGORY {
        int id
        string name
        string slug
    }
```

## Attributes and Types

You can specify attributes with their types:

```mermaid
erDiagram
    CUSTOMER {
        int id PK
        string name
        string email UK
        date registered_at
    }
    ORDER {
        int id PK
        int customer_id FK
        decimal total_amount
        date order_date
    }
```

## Relationship Labels

You can add labels to describe relationships:

```mermaid
erDiagram
    DOCTOR ||--o{ APPOINTMENT : "schedules"
    PATIENT ||--o{ APPOINTMENT : "books"
    APPOINTMENT ||--|| PRESCRIPTION : "results in"
```

## Additional Features

### Key Types
- PK: Primary Key
- FK: Foreign Key
- UK: Unique Key

```mermaid
erDiagram
    PRODUCT {
        int id PK
        string name UK
        decimal price
        int category_id FK
    }
```

## Styling

The appearance can be customized with:
- Different relationship types
- Attribute types
- Relationship labels
- Entity names and descriptions

## Tips
- Use clear and descriptive entity names
- Include important attributes only
- Show relationships with proper cardinality
- Add meaningful relationship descriptions
- Consider normalization rules
- Group related entities together
- Use standard naming conventions
