# Sophisticated Output

React does not render `false`, `null`, or `undefined`

```
function App() {
  return (
    <>
        Testing output
        { <p>Test</p> }
        { false }
        { null }
        { undefined }
        { NaN }
        { 0 }
    </>
  );
}
```

`<p>Test</p>`, `NaN`, and `0` will render
- `false`, `null`, `undefined` do NOT



