# Pie Chart

Pie charts are circular statistical graphics that display numerical proportions by dividing a circle into proportional slices.

## Syntax

### Basic Elements
- Title: `pie title [Chart Title]`
- Data entries: `"[Label]" : [Value]`
- Optional: `showData` - shows the values

## Basic Example

```mermaid
pie title Simple Pie Chart
    "Slice A" : 30
    "Slice B" : 50
    "Slice C" : 20
```

## Advanced Example

Here's a more detailed pie chart showing website traffic sources:

```mermaid
pie showData title Website Traffic Sources
    "Organic Search" : 35.7
    "Direct" : 24.3
    "Social Media" : 20.5
    "Referral" : 12.8
    "Email" : 6.7
```

## Data Visualization

### Market Share Example

```mermaid
pie title Market Share Q1 2024
    "Company A" : 45.2
    "Company B" : 28.7
    "Company C" : 15.3
    "Others" : 10.8
```

### Time Distribution

```mermaid
pie showData title Daily Activities
    "Work" : 8
    "Sleep" : 7
    "Leisure" : 4
    "Exercise" : 1
    "Other" : 4
```

## Features

### Show Data Values

You can show the actual values using `showData`:

```mermaid
pie showData title Budget Allocation
    "Development" : 40
    "Marketing" : 20
    "Operations" : 30
    "Admin" : 10
```

## Styling

The pie chart automatically:
- Assigns different colors to slices
- Calculates proportions
- Displays labels
- Shows percentage and/or values (with showData)

## Tips
- Keep the number of slices manageable (ideally less than 7)
- Use clear and concise labels
- Consider ordering slices by size
- Use meaningful titles
- Add `showData` when actual values are important
- Ensure values sum up to a meaningful total
- Use consistent decimal places for values
