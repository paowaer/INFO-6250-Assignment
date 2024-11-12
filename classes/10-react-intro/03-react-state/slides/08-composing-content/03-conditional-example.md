# A Conditional Example
```
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [username, setUsername] = useState('');
return ( <>
  { isLoggedIn
    ? <div>
        Hello {username}
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    : <form className="missing-here-for-clarity">  
        <label> <span>Username: </span>
          <input 
            value={username} 
            onInput={(e) => setUsername(e.target.value)}
          />
        </label>
        <button 
          type="button" 
          onClick={() => setIsLoggedIn(true)}
        >Login</button>
      </form>
   }
</>);
```
