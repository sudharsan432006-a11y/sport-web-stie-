## 2025-05-15 - React Purity and Non-deterministic Data
**Vulnerability:** Not a direct security vulnerability, but a reliability and performance issue where `Math.random()` was used inside a component's render body, causing unstable UI and lint errors.
**Learning:** The `react-hooks/purity` plugin is extremely strict. Even using `Math.random()` inside `useMemo` within the component scope was flagged as an error.
**Prevention:** Always declare non-deterministic static data (like random positions for particles) as constants outside the component scope to ensure component idempotency and pass strict purity checks.
