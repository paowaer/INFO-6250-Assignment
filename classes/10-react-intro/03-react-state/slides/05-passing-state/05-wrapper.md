# You may define and pass a "wrapper" function

```jsx
function App() { 
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count +1)}>
        {count}
      </button>
      <Doubler onDouble={() => setCount(count * 2)}/>
    </>
  );
}
// Doubler.jsx
function Doubler({ onDouble }) { 
  return (
    <button onClick={onDouble}>
      Double!
    </button>
  );
}
```

