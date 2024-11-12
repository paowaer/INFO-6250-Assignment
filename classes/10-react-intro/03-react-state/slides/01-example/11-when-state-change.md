# When does state variable change?

```
function App() { 
    const [count, setState] = useState(0);
    
    console.log("on render", count);

    return (
        <button onClick={ () => {
            console.log("before setter", count);
            setCount(count + 1);
            console.log("after setter", count);
        }} >
            count is {count}
        </button>
    );
}
```

```
on render 0
before setter 0
after setter 0
on render 1
```
