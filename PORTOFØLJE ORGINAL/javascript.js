document.addEventListener('DOMContentLoaded', function() {
    const prosjektContainers = document.querySelectorAll('.prosjektkortcontainer');
    const projectImage = document.querySelector('.project-image');
    const randomImage = document.querySelector('.random-image');

    // Map project names to image file names
    const projectImageMap = {
        'Prosjekt A': 'projectA.jpg',
        'Prosjekt B': 'projectB.jpg',
        'Prosjekt C': 'projectC.jpg',
        'Prosjekt D': 'projectD.jpg'
    };

    // Function to create image URLs based on file names
    const getImageUrl = (fileName) => `bilder/${fileName}`;

    // Add event listeners to each prosjektkortcontainer
    prosjektContainers.forEach((container) => {
        const projectName = container.querySelector('.venstre-prosjektkort h4').textContent.trim();
        container.addEventListener('mouseenter', () => {
            const imageName = projectImageMap[projectName];
            if (imageName) {
                randomImage.style.display = 'none'; // Hide random image
                projectImage.style.display = 'block'; // Show project image
                projectImage.src = getImageUrl(imageName);
            }
        });
    });

    var imageUrls = [
        'bilder/vestlandet.jpg',
        'bilder/girlbymountainlakehansdahl.jpg',
        'bilder/ayounggirlinafjordlandscapehansdahl.jpg',
        'bilder/summerdayonthefjordhansdahl.jpg',
        'bilder/thefjordhansdahl.jpg',
        'bilder/norskfjordlandskapandersaskvold.jpg',
        'bilder/skrikedvardmunch.jpg'
    ];

    function getRandomImageUrl() {
        var randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }

    var randomImageUrl = getRandomImageUrl();
    randomImage.src = randomImageUrl;
    projectImage.style.display = 'none'; // Initially hide project image
});








const kalenderItems = document.querySelectorAll('.kalender');

// Define an object to map month abbreviations to CSS variable names
const monthColors = {
    JAN: '--jan-color',
    FEB: '--feb-color',
    MAR: '--mar-color',
    APR: '--apr-color',
    MAI: '--mai-color',
    JUN: '--jun-color',
    JUL: '--jul-color',
    AUG: '--aug-color',
    SEP: '--sep-color',
    OKT: '--okt-color',
    NOV: '--nov-color',
    DES: '--des-color'
};

kalenderItems.forEach(item => {
    const monthAbbreviation = item.dataset.month; // Get the month abbreviation from data attribute
    const borderColor = monthColors[monthAbbreviation];
    
    item.addEventListener('mouseenter', () => {
        const targetElements = document.querySelectorAll('.header, .main-høyre, .main-om-meg, .footer');
        targetElements.forEach(target => {
            target.style.borderColor = `var(${borderColor})`;
        });
    });

    item.addEventListener('mouseleave', () => {
        const targetElements = document.querySelectorAll('.header, .main-høyre, .main-om-meg, .footer');
        targetElements.forEach(target => {
            target.style.borderColor = `var(--apr-color)`;
        });
    });
});






