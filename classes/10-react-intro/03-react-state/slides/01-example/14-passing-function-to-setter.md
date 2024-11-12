# Passing a function to a setter?

What does this mean?
- `setCount((count) => count + 1)`

Consider:
```
<button onClick={() => { 
    setCount(count + 1);
    setCount(count + 1);
}} >
  count is {count}
</button>
```

- Page shows count only going + 1
- Because `count` is a stale copy of state


