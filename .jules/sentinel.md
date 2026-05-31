## 2025-05-15 - React Purity and Form Security in R3F Projects
**Vulnerability:** User PII leakage via URL and unstable R3F renders due to impurity.
**Learning:** Default form behavior in React can leak sensitive data into URLs if `e.preventDefault()` is missing. Additionally, `react-hooks/purity` blocks `Math.random()` in components, which is critical for stable R3F scenes.
**Prevention:** Always implement `e.preventDefault()` on forms and move non-deterministic data generation outside component render cycles.
