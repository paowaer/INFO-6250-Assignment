# Important: React owns the DOM

Big change: Do not access the DOM!
- No `document.querySelector`
- No `document.getElementX`
- No `classList.toggle()`, etc
- React is managing our DOM
- If we change it, we can confuse React

Why did we learn those parts then?!
- Know what React is doing
- Good without React
