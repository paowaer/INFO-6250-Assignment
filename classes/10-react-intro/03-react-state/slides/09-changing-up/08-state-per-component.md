# Each component can have state

See the `useState()` here!
- Distinct from the username of `App`
- Allows for internal behavior
    - Here, name-as-you-type

```
function Login({ onLogin }) { 
  const [loginName, setLoginName] = useState('');
  return ( <form> 
    <label>
      <span>Username: </span>
      <input value={loginName} 
        onInput={(e) => setLoginName(e.target.value)}/>
    </label>
    <button type="button" 
      onClick={() => onLogin(loginName)}>Login</button>
  </form>);
```


