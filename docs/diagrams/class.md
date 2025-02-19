# Class Diagram

Class diagrams are the backbone of object-oriented modeling. They show the classes of a system, their attributes, operations, and the relationships between classes.

## Syntax

### Class Definition
```
class ClassName {
    +publicField
    -privateField
    #protectedField
    +publicMethod()
    -privateMethod()
    #protectedMethod()
}
```

### Relationships
- Inheritance: `<|--`
- Composition: `*--`
- Aggregation: `o--`
- Association: `-->`
- Dependency: `..>`
- Implementation: `<|..`

## Basic Example

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

## Advanced Example

Here's a more complex class diagram showing various relationships and features:

```mermaid
classDiagram
    Customer "1" --> "*" Order
    Order "*" --> "1" DeliveryStatus
    Order "*" --> "*" Product
    Order "1" --> "1" Payment
    
    class Customer {
        +String name
        +String email
        +String address
        +addOrder()
        +updateProfile()
    }
    
    class Order {
        -int orderId
        -Date orderDate
        -float totalAmount
        +calculateTotal()
        +updateStatus()
    }
    
    class Product {
        +String name
        +float price
        +int stock
        -updateStock()
    }
    
    class Payment {
        +String method
        +float amount
        +Date paymentDate
        +processPayment()
    }
    
    class DeliveryStatus {
        +String status
        +Date lastUpdate
        +updateStatus()
    }
```

## Additional Features

### Generic Types
```mermaid
classDiagram
    class List~T~{
        +int size
        +add(T element)
        +get(int index) T
    }
```

### Interfaces
```mermaid
classDiagram
    class Animal{
        <<interface>>
        +makeSound()
    }
```

### Abstract Classes
```mermaid
classDiagram
    class Shape{
        <<abstract>>
        +area() float
    }
```

## Styling

You can use various notations for visibility:
- `+` Public
- `-` Private
- `#` Protected
- `~` Package/Internal

## Tips
- Keep classes focused and follow single responsibility principle
- Use meaningful names for classes and methods
- Show only relevant attributes and methods
- Use appropriate relationships between classes
- Consider using interfaces and abstract classes where appropriate
