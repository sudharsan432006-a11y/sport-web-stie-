# Sentinel Security Journal

## 2025-05-22 - Preventing Data Leakage in URLs and Input Sanitization
**Vulnerability:** User input in forms without `e.preventDefault()` can leak into URLs via query parameters upon submission, and lack of input validation (like `maxLength`) can lead to potential client-side DoS or unexpected data handling issues.
**Learning:** Even simple "Get Started" forms in landing pages should follow secure defaults to prevent accidental data exposure in browser history or server logs.
**Prevention:** Always implement `e.preventDefault()` on form submission and use HTML5 validation attributes (`required`, `maxLength`, `type`) to enforce basic input constraints.
