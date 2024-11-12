# Where should you `useState()`?

- Usually "nearest common ancestor" Component
- Pass state/setters/wrappers through children 

```plaintext
ComponentA
- ComponentB 
  - ComponentD (uses stateB)
  - ComponentE (uses stateB, stateC)
  - ComponentF (uses stateC)
- ComponentC (uses stateA)
  - ComponentD (uses stateB)
  - ComponentD (uses stateB)
```
- `ComponentC` is **stateA** "nearest common ancestor"
- `ComponentA` is **stateB** "nearest common ancestor"
- `ComponentB` is **stateC** "nearest common ancestor"


