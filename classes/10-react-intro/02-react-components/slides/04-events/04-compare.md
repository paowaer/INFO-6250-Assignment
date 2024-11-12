# Comparing

Bad:
```html
<button onclick="function() { console.log('meow') }">
    Meow
</button> 
```
  - Editing JS in HTML
    - All in a string of attribute value
    - Hard to interact with other JS (scope?)

Good:
```html
<button onClick={ () => console.log('meow') }>Meow</button>
```
  - Editing JS in JSX (which is just JS)
  - No weird scope or variable changes

