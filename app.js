## File 3: `app.js`

Save this as **app.js** in the same folder as `index.html` and `styles.css`.

```javascript
document.addEventListener("DOMContentLoaded", () => {

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);

        themeToggle.textContent =
            savedTheme === "dark" ? "☀️" : "🌙";

        themeToggle.addEventListener("click", () => {
            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "light" ? "dark" : "light";

            document.documentElement.setAttribute(
                "data-theme",
                newTheme
            );

            localStorage.setItem("theme", newTheme);

           
```
