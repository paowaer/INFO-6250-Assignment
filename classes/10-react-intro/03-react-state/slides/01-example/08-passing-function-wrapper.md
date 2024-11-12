# Notice the difference here

```html
<button onClick={() => setCount(count + 1)} > /* FINE*/
    count is {count}
</button>
```
- `onClick` is passed a function callback to call
- `setCount()` called **when** that callback is called

```html
<button onClick={setCount(count + 1)} > /* BAD */
    count is {count} 
</button>
```
- `onClick()` passed result of calling `setCount()`
- `setCount()` called **immediately** (during render)
- `setCount()` triggers rerender, calls `setCount()`
- Web app crashes (infinite loop)
