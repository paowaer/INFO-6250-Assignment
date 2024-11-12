# JSX will trim leading/trailing space

```html
<div>
  <span>Name:</span>
  <span>Jorts</span>
</div>
```
Effective browser rendering of HTML:
```
<div> <span>Name:</span> <span>Jorts</span> </div>
```
After JSX conversion, before browser rendering
```
<div><span>Name:</span><span>Jorts</span></div>
```

- 99% of the time this is Great!
- 1% of the time...
