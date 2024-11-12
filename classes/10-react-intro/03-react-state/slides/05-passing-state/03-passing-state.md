# Component cannot "see" state of parent

But can be PASSED state of parent

```jsx
function App() { 
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count +1)}>
        {count}
      </button>
      <Matcher toMatch={count}/>
    </>
  );
}
// Matcher.jsx
function Matcher({ toMatch }) { 
  const [count, setCount] = useState(0); 
  return (
    <button onClick={() => setCount(count + 1)}>
      {count} { count === toMatch ? 'matches!': '' }
    </button>
  );
}
```

