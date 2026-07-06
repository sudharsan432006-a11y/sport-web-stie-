## 2025-05-15 - Form Data Leakage in Scrollytelling Overlay
**Vulnerability:** User input (email) was leaked into the URL query string upon form submission.
**Learning:** In React applications using scrollytelling patterns (like `@react-three/drei` ScrollControls), HTML forms in the Overlay may default to GET submissions if `onSubmit` is not handled with `e.preventDefault()`. This causes a page reload and appends sensitive user data to the URL.
**Prevention:** Always implement `e.preventDefault()` on all interactive forms and use explicit state management or API calls for data handling.
