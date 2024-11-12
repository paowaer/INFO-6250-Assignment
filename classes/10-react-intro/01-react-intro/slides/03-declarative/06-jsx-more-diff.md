# More JSX differences

```jsx
function TodoItem({ task, done }) { 
  const doneClass = done ? 'todo--done' : ''};
  return (
    <li>
      <span className={`todo ${doneClass}`} >{task}</span>
    </li>
  );
}
//...elsewhere
<TodoItem task="Pounce" done={false} />
```

A few differences!
- `{false}` instead of "false"
  - Actual boolean, not a string!
- Attribute-like values passed to function
  - **props**, more on these soon
