# Preventing Default

```
function Login({ onLogin }) { 
  const [loginName, setLoginName] = useState('');

  return ( 
    <form onSubmit={ (e) => { 
        e.preventDefault();
    }}>
      <label>
        <span>Username: </span>
        <input 
          value={loginName} 
          onInput={(e) => setLoginName(e.target.value)}
        />
      </label>
      <button type="button" 
        onClick={() => onLogin(loginName)}>Login</button>
     </form>
  );
}
```
