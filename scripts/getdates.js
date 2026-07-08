
const currentYearSpan = document.getElementById("currentyear");

currentYearSpan.textContent = new Date().getFullYear();


const lastModifiedParagraph = document.getElementById("lastModified");

lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`;