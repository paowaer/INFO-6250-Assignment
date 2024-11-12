# Summary - State

- `import { useState } from 'react';`
- `useState()` is a React **hook**
- Pass `useState()` initial value for a state variable
- Returns array of two parts
  - We **destucture** array into two variables
  - State value ( a COPY )
  - Setter function
- State value will be:
  - Last value passed to setter function
  - useState() argument if setter never called
