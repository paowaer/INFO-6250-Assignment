# Wait, What?

- Components can be passed props like `onClick`
  - But it is just a name
  - No Behavior
- Component CAN use/pass the passed prop
- Native Elements DO have behavior for `onClick`

```jsx
function Meow({ onClick }) { 
  return (
    <button onClick={onClick}>Meow</button>
  );
}

export default Meow;
```
```jsx
<Meow onClick={ () => console.log('meow') }/>
```

