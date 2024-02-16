const planetData = {
    earth: {
        name: 'Earth',
        averageTemperature: 15,
        atmosphere: 'Mainly nitrogen and oxygen, with traces of other gases',
    },
    mars: {
        name: 'Mars',
        averageTemperature: -50,
        atmosphere: 'Thin atmosphere, mostly carbon dioxide',
    },
    moon: {
        name: 'Moon',
        averageTemperature: -20,
        atmosphere: 'Virtually no atmosphere, some trace gases such as helium and argon',
    },
    mercury: {
        name: 'Mercury',
        averageTemperature: 167,
        atmosphere: 'Thin atmosphere, mostly helium and hydrogen',
    },
    venus: {
        name: 'Venus',
        averageTemperature: 462,
        atmosphere: 'Thick atmosphere, primarily carbon dioxide',
    },
    jupiter: {
        name: 'Jupiter',
        averageTemperature: -145,
        atmosphere: 'Primarily hydrogen and helium, with trace amounts of other gases',
    },
    saturn: {
        name: 'Saturn',
        averageTemperature: -178,
        atmosphere: 'Mainly hydrogen and helium, with trace amounts of other gases',
    },
    uranus: {
        name: 'Uranus',
        averageTemperature: -216,
        atmosphere: 'Primarily hydrogen and helium, with some methane',
    },
    neptune: {
        name: 'Neptune',
        averageTemperature: -201,
        atmosphere: 'Mainly hydrogen and helium, with some methane and trace amounts of other gases',
    },
    // Add more planets and moons as needed
};

const celestialBodySelect = document.getElementById('celestialBody');
const temperatureElement = document.getElementById('temperature');
const atmosphereElement = document.getElementById('atmosphere');
const planetNameElement = document.getElementById('planetName');

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
    planetNameElement.textContent = `Planet: ${name}`;
});
