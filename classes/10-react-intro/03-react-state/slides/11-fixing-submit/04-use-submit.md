# Making Login work on Submit

```
function Login({ onLogin }) { 
  const [loginName, setLoginName] = useState('');

  return ( 
    <form onSubmit={ (e) => { 
        e.preventDefault();
        onLogin(loginName);
    }}>
      <label>
        <span>Username: </span>
        <input 
          value={loginName} 
          onInput={(e) => setLoginName(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
     </form>
  );
}
```

