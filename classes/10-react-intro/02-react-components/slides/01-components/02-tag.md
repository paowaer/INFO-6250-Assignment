# Components are Elements

A React Component can be used as an Element in JSX
- Open/close or self-closing
  - NO: `<Greeting>` (Needs a close somewhere)
  - YES: `<Greeting/>`
  - YES: `<Greeting></Greeting>`
- Element name matches function name
  - MixedCase, not camelCase
  - YES: `<Greeting/>` or `<CatVideos/>`
  - NO: `<greeting/>` or `<catVideos/>`

