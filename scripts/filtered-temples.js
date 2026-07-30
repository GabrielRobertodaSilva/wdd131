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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Campinas Brazil",
            location: "Campinas, São Paulo, Brazil",
            dedicated: "2002, May, 17",
            area: 48100,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 382207,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
        },
        {
            templeName: "Curitiba Brazil",
            location: "Curitiba, Paraná, Brazil",
            dedicated: "2008, June, 1",
            area: 27850,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
        }
    ];

    
    const container = document.querySelector(".grid-container");

    function displayTemples(templeList) {
        container.innerHTML = "";
        templeList.forEach((temple, index) => {
            let card = document.createElement("figure");
            
            let name = document.createElement("h3");
            name.textContent = temple.templeName;

            let location = document.createElement("p");
            location.innerHTML = `<span>Location:</span> ${temple.location}`;

            let dedicated = document.createElement("p");
            dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

            let area = document.createElement("p");
            area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

            let img = document.createElement("img");
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `Image of ${temple.templeName}`);
            img.setAttribute("width", "400");
            img.setAttribute("height", "250");

            
            if (index === 0) {
                img.setAttribute("fetchpriority", "high");
            } else {
                img.setAttribute("loading", "lazy");
            }

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(img);

            container.appendChild(card);
        });
    }

    
    displayTemples(temples);

    
    const navLinks = document.querySelectorAll("nav a");
    const mainHeading = document.querySelector("main h2");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const filterName = link.textContent;
            mainHeading.textContent = filterName;

            if (filterName === "Old") {
                displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
            } else if (filterName === "New") {
                displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
            } else if (filterName === "Large") {
                displayTemples(temples.filter(temple => temple.area > 90000));
            } else if (filterName === "Small") {
                displayTemples(temples.filter(temple => temple.area < 10000));
            } else { // Home
                displayTemples(temples);
            }
        });
    });
});