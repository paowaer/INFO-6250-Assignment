# Different State Updates

```
<input 
  value={inProgress} 
  onInput={ (e) => setInProgress(e.target.value) }
/>

<button 
  type="button" 
  onClick={ () => setSaved(inProgress) }
>Save</button>
```

- One "as you type"
- One "after you click"
