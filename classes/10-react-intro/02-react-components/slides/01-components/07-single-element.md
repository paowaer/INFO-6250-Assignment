# Components return a single element/fragment 

- May not return multiple elements
```jsx
function Greeting() {  // Not Allowed
    return (<p>Hello</p><p>Cat</p>); // two sibling containers
}
```
- Single container may contain nested elements
```jsx
function Greeting() {  // Allowed, but question useless div
    return (<div><p>Hello</p><p>Cat</p></div>); 
}
```
- May be wrapped in a **fragment**, a non-element
```jsx
function Greeting() { // Allowed
    return (<><p>Hello</p><p>Cat</p></>); // a fragment container
}
```


