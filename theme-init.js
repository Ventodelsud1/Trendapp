// Apply the saved theme before the first paint (no light flash).
// Loaded as a separate file so the Content-Security-Policy can forbid inline scripts.
try {
    if (localStorage.getItem("trendapp-theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
} catch (error) {}
