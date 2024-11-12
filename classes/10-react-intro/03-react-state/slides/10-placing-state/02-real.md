# Often a LOT of state ends up at "top"
- Most state lives in App.jsx
  - Most state matters to most Components
  - Pass abstracted wrappers
    - Other options soon
- Temp state like "as you are typing" username
  - Kept out of top level state (App.jsx)
  - Declared in their specialized components
    - Passed to ancestors as needed
    - Example: the `onLogin` prop
