## 2025-05-15 - [Form Submission Security]
**Vulnerability:** Newsletter subscription form was missing basic input validation and submission handling.
**Learning:** Default form behavior can leak user input into URLs via query parameters on submission, and lack of length limits can lead to DoS or buffer issues if connected to a backend.
**Prevention:** Always use `e.preventDefault()` in React form handlers and specify `required` and `maxLength` on inputs.
