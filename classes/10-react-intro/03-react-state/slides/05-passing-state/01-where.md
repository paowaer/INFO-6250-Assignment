# Each Component can have separate state

```jsx
function App() { 
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count +1)}>
        {count}
      </button>
      <Counter/>
    </>
  );
}
// Counter.jsx
function Counter() { 
  const [count, setCount] = useState(0); // Entirely separate
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```
