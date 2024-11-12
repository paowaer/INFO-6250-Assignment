# State isn't actually IN component

- Component function called after state changes
- Component **gets a copy of state** from `useState()`
- Setter updates state **outside of component**
    - Queues up new call to component function
        - To render HTML
    - Doesn't happen until current code finishes
    - Copies of state values are STALE until then
- https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value
