# Those are too tightly coupled

```
  const onLogin = (loginName) => { 
    setUsername(loginName);
    setIsLoggedIn(true);
  };
  const onLogout = () => setIsLoggedIn(false);
 
  return (
    <div className="app">
      { isLoggedIn
        ? <Content 
            username={username} 
            onLogout={onLogout}
          />
        : <Login 
            onLogin={onLogin}
          />
      }
    </div>
  );
}
```

