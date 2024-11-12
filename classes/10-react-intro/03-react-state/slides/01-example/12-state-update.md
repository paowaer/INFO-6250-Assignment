# Important State Update Confusion!

`setCount()` does NOT change `count`

```jsx
<button 
  onClick={() => {
      setCount(count + 1);
      console.log(count);
  }}
>
  count is {count}
</button>
```
- `console.log()` shows that `count` didn't change!
- But page shows that `count` DID change?!


