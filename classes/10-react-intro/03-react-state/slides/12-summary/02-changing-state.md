# Summary - Changing State

- Component returns HTML based on state
  - **conditional rendering**
- Can have multiple `useState()` calls
  - Each a different state variable
- When state changes, component **rerenders**
- set `onEVENT` (onClick, onSubmit, etc) props 
  - If set on "native" HTML element
    - Callback called when event on element
  - Callback can call setter to change state
