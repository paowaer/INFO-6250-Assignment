# What DO I use as a key prop?

Use a value uniquely connected to the data in element
- Accurate: "is this the same list item as last time"
- Complex records normally have an identifier
  - Ex: NEUID
- Simple records build one from data
  - Might be combination of fields
  - Or just one field:

```jsx
  const list = cats.map( cat => { 
    return (
      <li key={cat}>{cat}</li>
    );
  });
```

