# Why pass a function to a state setter

You can pass a value to a state setter
- `setState(count + 1)`
- Value will be new value for state

You can also pass a function to a state setter
- `setState( (count) => count + 1 )`
- Passed function is itself passed current state value
    - ACTUAL current value of state, not copy
- Passed function should return new value for state

