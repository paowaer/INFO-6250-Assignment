# Notice the Decoupling!

```
<Doubler onDouble={() => setCount(count * 2)}/>

/* vs */

<button onClick={onDouble}>Double!</button>
```

- App doesn't know when `onDouble` is called
    - That's up to `<Doubler>`
- Doubler doesn't know what `onDouble` does
    - It just calls it
- Double doesn't actually know/use App state
    - But does effect it
- `onDouble` isn't an Event Handler
    - But similar logic: When this callback called
