# The other components

```
function Content({ username, setLoggedIn }) {
  return ( <div>
    Hello {username}
    <button onClick={() => 
      setIsLoggedIn(false)}>Logout</button>
  </div>);
}
```
```
function Login({ username, setUsername, setIsLoggedIn }) { 
  return ( <form> 
    <label>
      <span>Username: </span>
      <input value={username} 
        onInput={(e) => setUsername(e.target.value)}/>
    </label>
    <button type="button" 
      onClick={() => setIsLoggedIn(true)}>Login</button>
  </form>);
}
```

