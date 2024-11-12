# How to use a Fragment

```jsx
function Demo() { 
  return (
    <>
      <p>
        These p tags will have no containing 
        element from this component
      </p>
      <p>And React will not complain</p> 
    </>
  );
}
```

- `<>` and `</>`
- React treats like a containing element
- But no element in output HTML
