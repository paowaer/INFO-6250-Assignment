# Results of passing function to setter

```jsx
<button onClick={ () => { 
    setCount( count => count + 1);
    setCount( current => current + 1);
}} >
  count is {count}
</button>
```

- Now increases by 2
- Functions were passed ACTUAL value of state
    - Not the possibly stale copy that is `count`
- param name in passed function just a name
    - In its own scope
    - That's why `current` still changed `count` state
    - Using same (`count`) common, but confusing
