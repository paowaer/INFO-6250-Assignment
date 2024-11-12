# SO MUCH - onInput

```
<input 
  value={name} 
  onInput={ (e) => setName(e.target.value) }
/>
```

- `name` will always be latest value
- `onInput()` runs whenever there is typing
  - `input` event
  - Including backspace/delete
- `e.target` is the input field here
- Notice the self-closing input tag!
  - JSX requires a close


