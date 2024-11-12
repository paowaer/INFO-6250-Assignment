# Example without single parent container

This will give you an error:

```jsx
function CatFacts() { 
  return (
    <h1>Cat Facts</h1>
    <div className="subtitle">Number 3 will shock you</div>
    <ul>
      <li>Cats can rotate their ears 180 degrees</li>
      <li>Felines can purr or roar, but not both<li>
      <li>Humans domesticated dogs, 
        but cats domesticated humans</li>
    </ul>
  );
}

export default CatFacts;
```

