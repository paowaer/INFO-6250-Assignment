# Conditional Rendering

**Conditional Rendering** = Deciding what to show

```
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      { count === 8 && <p className="wild">8!!!</p>}
      { count ? <p>Count is truthy</p> : null}
      { count && <p>Dang that 0!</p> } 
    </>
  );
}
```
