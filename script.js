const celestialBodySelect = document.getElementById('celestialBody');
const temperatureElement = document.getElementById('temperature');
const atmosphereElement = document.getElementById('atmosphere');

celestialBodySelect.addEventListener('change', () => {
    const selectedBody = celestialBodySelect.value;
    fetchWeather(selectedBody);
});

function fetchWeather(body) {
    // Fetch data based on the selected body (e.g., from NASA or NOAA)
    // Update temperatureElement and atmosphereElement with relevant info
    // Example: temperatureElement.textContent = 'Average temperature: -50°C';
}

