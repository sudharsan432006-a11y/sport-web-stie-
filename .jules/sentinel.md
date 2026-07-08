## 2025-05-15 - Vite Vulnerability Patch
**Vulnerability:** NTLMv2 hash disclosure (GHSA-v6wh-96g9-6wx3) and `server.fs.deny` bypass (GHSA-fx2h-pf6j-xcff) in Vite < 8.1.3.
**Learning:** Bleeding-edge dependencies can still harbor high-severity vulnerabilities that are only patched in very recent minor releases. Standard `npm audit` is essential for identifying these even in "modern" setups.
**Prevention:** Regularly run `npm audit` and keep core build tools like Vite updated to the latest stable minor version.
