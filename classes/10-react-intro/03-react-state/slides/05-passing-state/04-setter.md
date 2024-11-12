# Component cannot "change" outside state
...unless passed a function to do so

```jsx
function App() { 
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count +1)}>
        {count}
      </button>
      <Tenify setCount={setCount}/>
    </>
  );
}
// Tenify.jsx
function Tenify({ setCount }) { 
  return (
    <button onClick={() => setCount(10)}>
      Tenify!
    </button>
  );
}
```

