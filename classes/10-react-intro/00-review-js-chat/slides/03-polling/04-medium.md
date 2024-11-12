# Medium Complexity Option

- Poll a "are there new messages" service
  - Use results (one of, your choice:)
    - Display an indicator to refresh
    - OR, Request message list and rerender
- Requires a "new messages check" service
  - Requires a way to identify new messages!
    - Messages get ids?
    - Timestamp?
