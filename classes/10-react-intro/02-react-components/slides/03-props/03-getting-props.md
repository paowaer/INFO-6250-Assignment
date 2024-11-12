# Reading passed props

A Component function is passed an object of all props
```
<CatList cats={['Jorts', 'Jean', 'Nyancat']}/>
```

```js
function CatList( props ) { 
  const list = props.cats.map( cat => { 
    return (
      <li>{cat}</li>
    );
  });

  return (
    <ul className="cats">
      {list}
    </ul>
  );
}
export default CatList;
```
