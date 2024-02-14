const planetData = {
    earth: {
        name: 'Earth',
        averageTemperature: 15,
        atmosphere: 'Nitrogen, Oxygen',
    },
    mars: {
        name: 'Mars',
        averageTemperature: -50,
        atmosphere: 'Carbon Dioxide',
    },
    moon: {
        name: 'Moon',
        averageTemperature: -20,
        atmosphere: 'None (vacuum)',
    },
    // Add more planets and moons as needed
};
const celestialBodySelect = document.getElementById('celestialBody');
const temperatureElement = document.getElementById('temperature');
const atmosphereElement = document.getElementById('atmosphere');

celestialBodySelect.addEventListener('change', () => {
    const selectedBody = celestialBodySelect.value;
    const bodyInfo = planetData[selectedBody];
    if (!bodyInfo) {
        console.error('Invalid celestial body selection.');
        return;
    }

    const { name, averageTemperature, atmosphere } = bodyInfo;

    // Update weather information
    temperatureElement.textContent = `Average Temperature: ${averageTemperature}°C`;
    atmosphereElement.textContent = `Atmosphere: ${atmosphere}`;
});
