# Where is the CSS?

- `src/index.css` is general, page-wide CSS
- `src/App.jsx` imports `./App.css`(`src/App.css`)
    - Styles the elements returned by `App.jsx`
- Future `.jsx` files should import their own `.css`
    - To style the elements they return

This is the convention for CSS files we will follow
- One of many possible conventions

Bundler builds all CSS files into one/fewer during build
- Watch out for conflicting styling across files
