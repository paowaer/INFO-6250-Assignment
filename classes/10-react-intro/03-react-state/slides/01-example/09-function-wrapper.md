# Passing Function Wrapper

- **Event handlers are passed a function to run**
    - Just like `.addEventListener`
- NOT result of calling a function immediately

```
/* Correct Version: */
<button onClick={() => setCount(count + 1)} >
    count is {count}
</button>

/* Bad Version: */
<button onClick={setCount(count + 1)} >
    count is {count}
</button>
```

