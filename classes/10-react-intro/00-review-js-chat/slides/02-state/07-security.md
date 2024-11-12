# Security

- We didn't filter the message text
  - Vulnerable to injection attack!
  - Hard to allowlist open text
    - Not limited like username/phone
  - HTML Entities are a mess 
    - `<`, `>`, and `&` in particular
