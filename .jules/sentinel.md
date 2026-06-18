## 2026-06-18 - [React Purity and 3D Rendering Stability]
**Vulnerability:** Not a direct security vulnerability, but a reliability issue. Impure functions like `Math.random()` called during render caused lint errors and visual instability (flickering) in the 3D scene.
**Learning:** React 19 and the `react-hooks/purity` plugin strictly enforce idempotency. In 3F (React Three Fiber), generating random positions/rotations in the render loop leads to non-deterministic state on every frame/re-render.
**Prevention:** Always declare non-deterministic or static data as constants outside the component scope or within `useMemo`/`useRef` if they must be instance-specific.
