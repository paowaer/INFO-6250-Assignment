# SO MUCH - array destructure

`const [count, setCount] = useState(0);`

`useState()` returns an array

Above code is the same as:

```js
const returnedArray = useState(0);
const count = returnedArray[0]; // value from state
const setCount = returnedArray[1]; // setter function
```

`useState()` _always_ returns array of two values
- We **destructure** to declare and assign 2 variables


