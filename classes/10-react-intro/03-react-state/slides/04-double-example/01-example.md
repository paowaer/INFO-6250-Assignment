# More Example
```
function App() {
  const [inProgress, setInProgress] = useState('');
  const [saved, setSaved] = useState('');
  return (
    <>
      <p>Name in progress is {inProgress}</p>
      <p>Last Saved name was {saved}</p>
      <label>
        <span>Name: </span>
        <input 
          value={inProgress} 
          onInput={ (e) => setInProgress(e.target.value) }
        />
        <button 
          type="button" 
          onClick={ () => setSaved(inProgress) }
        >Save</button>
      </label>
    </>
  );
}
```
