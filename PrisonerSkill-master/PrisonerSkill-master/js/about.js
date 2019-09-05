const aboutMeData = [
    {
        name: "Trevor",
        description: "I'm Trevor. DMV area native. System Engineer, business man, and by father, by day, and Full Stack student at night.",
        twitter:"twitter.com/earthboundtrev",
        github: "github.com/tthompson2",
    },
    {
        name: 'Ray',
        description: "Full Stack student at Lambda School",
        twitter: "twitter.com/lambdaschool",
        github: "github.com/ray-aguilar",
    },

    {
        name: "Dallas",
        description: "Full Stack student at Lambda School",
        twitter: "twitter.com/lambdaschool",
        github: "github.com/dallas-james",
    },

    {
        name: "Aaron",
        description: "Full Stack student at Lambda School",
        twitter: "twitter.com/lambdaschool",
        github: "github.com/aaron-troska"
    }
];

var aboutTrevor = document.querySelector('.about-trevor').addEventListener('click', () => {
    
    var tempTrevor = document.querySelector('.about-trevor');
    tempTrevor.innerHTML = aboutMeData[0].description;
    tempTrevor.style.color = "red";
    tempTrevor.style.fontSize = "x-large";
    tempTrevor.style.textAlign = "center";
});

var aboutRay = document.querySelector('.about-ray').addEventListener('click', () => {
    
    var tempRay = document.querySelector('.about-ray');
    tempRay.innerHTML = aboutMeData[1].description;
    tempRay.style.fontSize = "x-large";
    tempRay.style.textAlign = "center";
});

var aboutDallas = document.querySelector('.about-dallas').addEventListener('click', () => {
    
    var tempDallas = document.querySelector('.about-dallas');
    tempDallas.innerHTML = aboutMeData[2].description;
    tempDallas.style.fontSize = "x-large";
    tempDallas.style.textAlign = "center";
});

var aboutAaron = document.querySelector('.about-aaron').addEventListener('click', () => {
    
    var tempAaron = document.querySelector('.about-aaron');
    tempAaron.innerHTML = aboutMeData[3].description;
    tempAaron.style.fontSize = "x-large";
    tempAaron.style.textAlign = "center";
});