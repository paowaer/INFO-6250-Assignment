# A Better Conditional Example

```
import Content from './Content';
import Login from './Login';

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div className="app">
      { isLoggedIn
        ? <Content 
            username={username} 
            setLoggedIn={setLoggedIn} 
          />
        : <Login 
            username={username} 
            setUsername={setUsername}
            setLoggedIn={setLoggedIn}
          />
      }
    </div>
  );
}
```

