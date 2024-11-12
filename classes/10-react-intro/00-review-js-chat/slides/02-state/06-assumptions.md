# Data Model Assumptions

A service sends named, known fields
- Will it add fields in future?
- Services want to avoid version bump
  - Often add new object fields
    - New feature = _Minor_ version
    - Which means all clients get immediately
      - Write your clients safely!
