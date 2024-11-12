# Only HTML elements can get events

**Events don't happen to Components**
```jsx
function Meow() { 
    return ( <button>Meow</button> );
}

<Meow onClick={ () => console.log('does not happen') />
```
- No built in behavior, just a name
- No `<Meow>` element in HTML
    - What would be clicked?
    - May not return just one element

