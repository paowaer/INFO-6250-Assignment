# The decoupled parts
```
function Content({ username, onLogout }) {
  return ( <div>
    Hello {username}
    <button onClick={onLogout}>Logout</button>
  </div>);
}
```
```
function Login({ onLogin }) { 
  const [loginName, setLoginName] = useState(''); // State!
  return ( <form> 
    <label>
      <span>Username: </span>
      <input value={loginName} 
        onInput={(e) => setLoginName(e.target.value)}/>
    </label>
    <button type="button" 
      onClick={() => onLogin(loginName)}>Login</button>
  </form>);
}
```

