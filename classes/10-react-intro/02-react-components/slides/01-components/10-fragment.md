# You need to use fragments

"Just put all our of component output in a `<div>`?"
- No
- Use parent container when **useful**:
  - Has **semantic** meaning, or
  - is **listening for events**, or
  - is **styled**, or
  - is **impacting styling** (by being an element)
- Otherwise, use a **fragment** instead
- Ex: A `<Card>` element will be a div with styling

