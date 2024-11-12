# Can I use the index as the key?

- No
  - Well, Yes, but you shouldn't
- It will silence the warning
- But is actually WORSE
  - If an element is removed
    - Index will not LIE
    - Index does not uniquely identify 
      - Index can refer to different elements

**Do not use index for a `key` prop of a list**
