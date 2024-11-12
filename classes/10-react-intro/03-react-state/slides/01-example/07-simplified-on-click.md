# Simplified onClick

```
<button onClick={() => setCount(count + 1)} >
    count is {count}
</button>
```
- `count is {count}` will show "current" `count`
- `onClick()` is passed a callback handler function
    - Just like a `click` event listener
- Handler function calls `setCount()` 
- `setCount()` changes stored state value
- Triggers (queues) re-render
    - "render" calls this component function again



