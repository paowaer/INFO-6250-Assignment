# Importing JSX

Write a `Test.jsx` in `src/`
```jsx
function Test() { 
  return (
    <p>Hello World</p>
  );
}
export default Test;
```
Top of `App.jsx`:
```js
import Test from './Test';
```

Near end of `App.jsx`, before `</>`:

```jsx
  </p>
  <Test/>
</>
```
