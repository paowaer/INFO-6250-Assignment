# Our React Code still has an issue

- **Enter** on Login clears but fails to Login
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
}
```
- This is HTML/JS issue, not React!
- 'Enter' on field submits form
  - Reloading page in browser
  - We are only reacting to button click

