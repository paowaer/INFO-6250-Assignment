# Importing Images

Importing images LOOKS like importing Components:
```jsx
import someImage from './cat-pic.jpg';
```

There are important differences:
- You pick a variable name to import as
- The filename needs to be complete
  - Including file extension
  - And with explicit path
- Variable holds the path to the image as a string:
  - `<img src={someImage} alt="White cat looking smug"/>`
