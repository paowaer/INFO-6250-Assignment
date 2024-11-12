# Components can pass handler props

- `onClick`, `onInput`, etc. just names to Components
- Component **can** apply to returned HTML element
  - Which DOES have built-in behavior

```jsx
function Meow({ onClick }) { 
  return (
    <button onClick={onClick}>Meow</button>
  );
}

<Meow onClick={ () => console.log('works!') />
```

