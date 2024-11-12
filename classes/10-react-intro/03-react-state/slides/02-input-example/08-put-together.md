# Putting the Parts together

- When App() is called (when `<App/>` renders
  - `name` is set to `''`
  - HTML renders to the screen
  - `<input>` has value `''`
- User types 'J'
  - `onInput` callback fires
    - calls `setName` with 'J'
- Change in state triggers rerender (App() is called)
  - `name` is set to 'J'
  - HTML renders `<input>` with value = 'J'

