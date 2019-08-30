const aboutMeData = [
    {
        name: "Trevor",
        description: "I'm Trevor. DMV area native. System Engineer, business man, and by father, by day, and Full Stack student at night",
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
    
    var filterFunction = aboutMeData.filter(element => {

        console.log(aboutMeData);

     if(element.description === "I'm Trevor. DMV area native. System Engineer, business man, and by father, by day, and Full Stack student at night");
     {
        var trevorSelected = document.querySelector('.about-trevor');
        trevorSelected.innerHTML = element.description;
     } 

    });
     console.log(filterFunction);
});

var aboutRay = document.querySelector('.about-ray').addEventListener('click', () => {
    
    var filterFunction = aboutMeData.filter(element => {

      return element.description;

    });
     console.log(filterFunction);
});

var aboutDallas = document.querySelector('.about-dallas').addEventListener('click', () => {
    
    var filterFunction = aboutMeData.filter(element => {

      return element.description;

    });
     console.log(filterFunction);
});

var aboutAaron = document.querySelector('.about-aaron').addEventListener('click', () => {
    
    var filterFunction = aboutMeData.filter(element => {

      return element.description;

    });
     console.log(filterFunction);
});