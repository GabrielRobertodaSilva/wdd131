
document.addEventListener("DOMContentLoaded", () => {
    
    
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", () => {
        
        navMenu.classList.toggle("open");
        
        
        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "&times;"; 
        } else {
            menuButton.innerHTML = "&#9776;"; 
        }
    });

    
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});