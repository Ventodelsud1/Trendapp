// Runs at the very start of <body> on every page.
// Kept as a separate file so the Content-Security-Policy can forbid inline scripts.

// 1. Clickjacking protection: GitHub Pages cannot send X-Frame-Options,
//    so refuse to be shown inside another site's frame.
if (window.top !== window.self) {
    document.documentElement.style.display = "none";
    try {
        window.top.location.replace(window.self.location.href);
    } catch (error) {}
}

// 2. Apply the saved theme before the first paint (no light flash).
try {
    if (localStorage.getItem("trendapp-theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
} catch (error) {}
