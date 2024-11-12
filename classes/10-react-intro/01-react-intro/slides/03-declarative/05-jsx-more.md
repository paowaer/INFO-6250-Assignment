# More JSX Example

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
- `className` instead of `class`
- Values not only strings
- `{}` to replace with value of expression
  - No `${}` unless you have template literals

