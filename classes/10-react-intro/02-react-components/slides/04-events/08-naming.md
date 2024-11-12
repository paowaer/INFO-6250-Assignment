# Passed event handlers can have any name

- `onEVENT` props only matter on native elements
- Otherwise they are just props
- We can pass such props with ANY name
- Effectively named callbacks

```jsx
function Meow({ onPet }) { 
  return (
    <button onClick={onPet}>Meow</button>
  );
}

export default Meow;
```
```jsx
<Meow onPet={ () => console.log('meow') }/>
```
