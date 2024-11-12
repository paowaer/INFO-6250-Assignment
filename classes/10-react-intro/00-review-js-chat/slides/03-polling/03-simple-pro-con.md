# Basic Pro vs Cons

Pro:
- Very simple to implement
  - Like a refresh button, but automatic
- Already have "get all messages/users" service(s)

Cons:
- Rerender even without change
  - Rendering issues covered separately
- Lots of network overhead (all messages)
  - What if big data?
  - What if pagination?
