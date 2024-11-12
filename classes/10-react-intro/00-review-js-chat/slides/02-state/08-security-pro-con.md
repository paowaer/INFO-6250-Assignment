# Security Options for Plain Text
- Option 1: Ban entities
  - Works great for security
  - Users may wish to use `<`,`>`, or `&` in text
- Option 2: Translate Entities when stored
  - Convert to `&lt;`, `&gt;`, `&amp;`
  - Data is stored safely
  - Requires conversion to use outside of HTML
  - Causes problems if reconverted (`&amp;amp;`)
- Option 3: Translate Entities on display
  - Data is stored unsafely!
  - Everyone. Must. Remember. When. Using.

