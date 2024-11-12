# Prop values

Unlike HTML, props can hold more than strings
- non-strings must be in `{}`

Unlike HTML, props should ALWAYS have a value
- not there/not there like `disabled` or `checked`

```
<CatList cats={['Jorts', 'Jean', 'Nyancat']}/>
```

```html
<ul class="cats">
  <li>Jorts</li>
  <li>Jean</li>
  <li>Nyancat</li>
</ul>
```
