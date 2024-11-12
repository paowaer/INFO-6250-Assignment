# Input Example

```jsx
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <p>Last name seen was {name}</p>
      <label>
        <span>Name: </span>
        <input 
          value={name} 
          onInput={ (e) => setName(e.target.value) }
        />
      </label>
    </>
  );
}
export default App;
```
