# Using Logical Operators

Remember how we said `&&` and `||` work?
- Return "deciding" left-side or right-side value

Cannot use `if (condition)` inside JSX `{}`

React does not render `false`, `null`, or `undefined`
- Combine with `&&` or `||` inside `{}`!

Alternatively, use **conditional operator** ( `? :` )
- `{ condition ? <p>Was Truthy</p> : <p>Was Falsy</p> }`

