# User Journey

User Journey diagrams help visualize and analyze the user's experience through a process or service. They're excellent for mapping customer interactions and identifying pain points.

## Syntax

### Basic Elements
- Sections: Represented as columns
- Tasks: Activities within sections
- Scores: Numerical ratings for each task (1-5)

### Basic Structure
```
journey
    title [Journey Title]
    section [Section Name]
        [Task]: [Score]: [Actor]
```

## Basic Example

```mermaid
journey
    title My Working Day
    section Go to work
        Make tea: 5: Me
        Go upstairs: 3: Me
        Do work: 1: Me
    section Go home
        Go downstairs: 5: Me
        Sit down: 5: Me
```

## Advanced Example

Here's a more complex user journey showing an e-commerce experience:

```mermaid
journey
    title Online Shopping Experience
    section Browse
        Visit homepage: 5: Customer
        Search product: 4: Customer
        View categories: 4: Customer
    section Product
        View details: 5: Customer
        Read reviews: 3: Customer
        Check stock: 3: Customer
    section Purchase
        Add to cart: 5: Customer
        Enter address: 2: Customer
        Payment: 3: Customer
    section Post-Purchase
        Order confirmation: 5: Customer
        Tracking info: 4: Customer
        Delivery: 3: Customer
```

## Scoring System

The scoring system uses numbers 1-5:
1. Very Negative 😫
2. Negative 😟
3. Neutral 😐
4. Positive 😊
5. Very Positive 😄

## Additional Features

### Multiple Actors

```mermaid
journey
    title Restaurant Order Process
    section Order
        Browse menu: 5: Customer
        Take order: 4: Waiter
        Process order: 3: Kitchen
    section Preparation
        Cook food: 4: Kitchen
        Quality check: 5: Manager
    section Service
        Serve food: 5: Waiter
        Eat meal: 5: Customer
```

## Styling

The diagram automatically:
- Colors sections differently
- Shows emoji for scores
- Aligns tasks in chronological order
- Groups related tasks in sections

## Tips
- Keep section names clear and concise
- Use meaningful task descriptions
- Be honest with scoring
- Include all key touchpoints
- Consider multiple user personas if relevant
- Focus on the user's perspective
- Use sections to group related activities
