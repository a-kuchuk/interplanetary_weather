const planetData = {
    earth: {
        name: 'Earth',
        averageTemperature: 15,
        atmosphere: 'Mainly nitrogen and oxygen, with traces of other gases',
        image: './planets/earth.jpg'
    },
    mars: {
        name: 'Mars',
        averageTemperature: -50,
        atmosphere: 'Thin atmosphere, mostly carbon dioxide',
        image: './planets/mars.jpg'
    },
    moon: {
        name: 'Moon',
        averageTemperature: -20,
        atmosphere: 'Virtually no atmosphere, some trace gases such as helium and argon',
        image: './planets/moon.jpg'
    },
    mercury: {
        name: 'Mercury',
        averageTemperature: 167,
        atmosphere: 'Thin atmosphere, mostly helium and hydrogen',
        image: './planets/mercury.jpg'
    },
    venus: {
        name: 'Venus',
        averageTemperature: 462,
        atmosphere: 'Thick atmosphere, primarily carbon dioxide',
        image: './planets/venus.jpg'
    },
    jupiter: {
        name: 'Jupiter',
        averageTemperature: -145,
        atmosphere: 'Primarily hydrogen and helium, with trace amounts of other gases',
        image: './planets/jupiter.jpg'
    },
    saturn: {
        name: 'Saturn',
        averageTemperature: -178,
        atmosphere: 'Mainly hydrogen and helium, with trace amounts of other gases',
        image: './planets/saturn.jpg'
    },
    uranus: {
        name: 'Uranus',
        averageTemperature: -216,
        atmosphere: 'Primarily hydrogen and helium, with some methane',
        image: './planets/uranus.jpg'
    },
    neptune: {
        name: 'Neptune',
        averageTemperature: -201,
        atmosphere: 'Mainly hydrogen and helium, with some methane and trace amounts of other gases',
        image: './planets/neptune.jpg'
    },
    // Add more planets and moons as needed
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
