const menuButton = document.querySelector("#menu-button");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuButton && primaryNavigation) {
    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );
        primaryNavigation.classList.toggle("open", !isExpanded);
    });

    // Close the mobile menu 
    primaryNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            primaryNavigation.classList.remove("open");
        });
    });

    // Keep the navigation visible 
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 700) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            primaryNavigation.classList.remove("open");
        }
    });
}
