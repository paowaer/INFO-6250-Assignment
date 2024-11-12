# 0/NaN WILL render!

**Conditional Rendering** is great
- But remember **some falsy values WILL render**
- Notably `0` and `NaN`
- Option: Use conditional operator
- Option: Convert to boolean

```
// Bad!
{ messages.length && <p>You've got mail!</p> }
// Good!
{ messages.length !== 0 && <p>You've got mail!</p>}
{ !!messages.length && <p>You've got mail!</p>}
{ messages.length ? <p>You've got mail!</p> : null }
```

