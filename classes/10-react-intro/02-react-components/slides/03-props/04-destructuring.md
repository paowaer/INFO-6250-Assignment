# Destructuring props

Common to **destructure** props object to get variables

```js
function CatList( { cats } ) { 
  const list = cats.map( cat => { 
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

