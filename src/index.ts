import { FancyTextApp } from "./ui/app.js";

// Export core library functionality
export * from "./core/index.js";

// Auto-initialize Web UI if run in a browser document context
if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const app = new FancyTextApp();
    app.init();
  });
}
