const planetData = {
    earth: {
        name: 'Earth',
        averageTemperature: 15,
        atmosphere: 'Mainly nitrogen and oxygen, with traces of other gases',
        gravity: 9.8, // m/s^2
        dayLength: 24, // hours
        landscapeOverview: 'Diverse landscapes including mountains, oceans, forests, and deserts',
        seasonOverview: 'Four seasons: spring, summer, autumn, winter',
        image: './planets/earth.jpg'
    },
    mars: {
        name: 'Mars',
        averageTemperature: -50,
        atmosphere: 'Thin atmosphere, mostly carbon dioxide',
        gravity: 3.7, // m/s^2
        dayLength: 24.6, // hours
        landscapeOverview: 'Reddish landscape with craters, valleys, and volcanoes',
        seasonOverview: 'Seasons similar to Earth, but longer due to Mars\' orbit',
        image: './planets/mars.jpg'
    },
    moon: {
        name: 'Moon',
        averageTemperature: -20,
        atmosphere: 'Virtually no atmosphere, some trace gases such as helium and argon',
        gravity: 1.622, // m/s^2
        dayLength: '27.3 days (tidally locked with Earth)',
        landscapeOverview: 'Barren surface with craters, mountains, and plains',
        seasonOverview: 'No seasons, but phases due to its orbit around Earth',
        image: './planets/moon.jpg'
    },
    mercury: {
        name: 'Mercury',
        averageTemperature: 167,
        atmosphere: 'Thin atmosphere, mostly helium and hydrogen',
        gravity: 3.7, // m/s^2
        dayLength: 4222.6, // hours
        landscapeOverview: 'Rocky and cratered surface, very hot during the day and cold at night',
        seasonOverview: 'No significant seasons due to its minimal axial tilt',
        image: './planets/mercury.jpg'
    },
    venus: {
        name: 'Venus',
        averageTemperature: 462,
        atmosphere: 'Thick atmosphere, primarily carbon dioxide',
        gravity: 8.87, // m/s^2
        dayLength: 2802, // hours
        landscapeOverview: 'Volcanic plains, highlands, and vast deserts',
        seasonOverview: 'No distinct seasons due to its minimal axial tilt',
        image: './planets/venus.jpg'
    },
    jupiter: {
        name: 'Jupiter',
        averageTemperature: -145,
        atmosphere: 'Primarily hydrogen and helium, with trace amounts of other gases',
        gravity: 24.79, // m/s^2
        dayLength: 9.9, // hours
        landscapeOverview: 'Gaseous planet with colorful bands of clouds and a turbulent atmosphere',
        seasonOverview: 'No distinct seasons as it lacks a solid surface',
        image: './planets/jupiter.jpg'
    },
    saturn: {
        name: 'Saturn',
        averageTemperature: -178,
        atmosphere: 'Mainly hydrogen and helium, with trace amounts of other gases',
        gravity: 10.44, // m/s^2
        dayLength: 10.7, // hours
        landscapeOverview: 'Gaseous planet with a prominent ring system and many moons',
        seasonOverview: 'No distinct seasons as it lacks a solid surface',
        image: './planets/saturn.jpg'
    },
    uranus: {
        name: 'Uranus',
        averageTemperature: -216,
        atmosphere: 'Primarily hydrogen and helium, with some methane',
        gravity: 8.69, // m/s^2
        dayLength: 17.2, // hours
        landscapeOverview: 'Ice giant with a bluish-green hue, ring system, and numerous moons',
        seasonOverview: 'Extreme seasons due to its axial tilt, with each pole experiencing 42 years of continuous daylight followed by darkness',
        image: './planets/uranus.jpg'
    },
    neptune: {
        name: 'Neptune',
        averageTemperature: -201,
        atmosphere: 'Mainly hydrogen and helium, with some methane and trace amounts of other gases',
        gravity: 11.15, // m/s^2
        dayLength: 16.1, // hours
        landscapeOverview: 'Ice giant with a deep blue color, active atmosphere, and strong winds',
        seasonOverview: 'Similar to Uranus, extreme seasons due to its axial tilt',
        image: './planets/neptune.jpg'
    },
};

const celestialBodySelect = document.getElementById('celestialBody');
const temperatureElement = document.getElementById('temperature');
const atmosphereElement = document.getElementById('atmosphere');
const planetNameElement = document.getElementById('planetName');
const planetImageContainer = document.getElementById('planetImageContainer');
const mainFlexContainer = document.getElementById('mainFlexContainer');

celestialBodySelect.addEventListener('change', () => {
    const selectedBody = celestialBodySelect.value;
    const bodyInfo = planetData[selectedBody];
    if (!bodyInfo) {
        console.error('Invalid celestial body selection.');
        return;
    }

    const { name, averageTemperature, atmosphere, image } = bodyInfo;

    // Update weather information
    temperatureElement.textContent = `Average Temperature: ${averageTemperature}°C`;
    atmosphereElement.textContent = `Atmosphere: ${atmosphere}`;
    planetNameElement.textContent = `Planet: ${name}`;

    // Update planet image
    const imagePath = `./${image}`; // Path to the image file
    const planetImage = document.createElement('img');
    planetImage.src = imagePath;
    planetImage.alt = `${name} Image`;
    planetImageContainer.innerHTML = ''; // Clear previous image (if any)
    planetImageContainer.appendChild(planetImage);

    // Remove all existing planet-specific styles
    mainFlexContainer.classList.remove(
        'mercury-style', 'venus-style', 'earth-style', 'mars-style', 
        'jupiter-style', 'saturn-style', 'uranus-style', 'neptune-style', 'moon-style'
    );

    // Add class for the selected planet-specific style
    mainFlexContainer.classList.add(`${selectedBody}-style`);
});


function goToPage(page) {
    window.location.href = page;
}

window.onload = function() {
    const defaultSelectedBody = 'earth';
    const defaultBodyInfo = planetData[defaultSelectedBody];
    const { name, averageTemperature, atmosphere, image } = defaultBodyInfo;

    // Update weather information
    temperatureElement.textContent = `Average Temperature: ${averageTemperature}°C`;
    atmosphereElement.textContent = `Atmosphere: ${atmosphere}`;
    planetNameElement.textContent = `Planet: ${name}`;

    // Update planet image
    const imagePath = `./${image}`; // Path to the image file
    const planetImage = document.createElement('img');
    planetImage.src = imagePath;
    planetImage.alt = `${name} Image`;
    planetImageContainer.innerHTML = ''; // Clear previous image (if any)
    planetImageContainer.appendChild(planetImage);

    // Set default planet-specific style
    mainFlexContainer.classList.add(`${defaultSelectedBody}-style`);
};
