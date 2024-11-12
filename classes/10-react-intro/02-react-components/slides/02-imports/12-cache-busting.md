# Cache-Busting Filesnames

- Browsers normally **cache** files (images/css/js)
- Will use cached version if available
    - Usually convenient for user
    - Causes problems if file has changed
- Cache-busting give files unique name
    - Changes when file contents change
    - Browser will treat as a NEW file
        - Always download fresh from server
- We turned off Cache when DevTools is open
    - Users won't do either
