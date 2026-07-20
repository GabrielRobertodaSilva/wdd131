document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;


    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

  
    const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

   
    if (temp <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${result.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});