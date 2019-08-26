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
        description: "Web development student at Lambda School",
        twitter: "twitter.com/lambdaschool",
        github: "github.com/dallas-james",
    },

    {
        name: "Aaron",
        description: "Web development student at Lambda School",
        twitter: "twitter.com/lambdaschool",
        github: "github.com/aaron-troska"
    }
];

var aboutTrevor = document.addEventListener('click', (aboutMeData) => {

    let trevorTag = document.querySelector('.about-trevor');
    
    var filterFunction = aboutMeData.filter = (element) => {

      console.log(element.description);

    };
    filterFunction(aboutMeData);
});


// Hmm, need to investigate how the event element is being reference because it looks like it 
// Hmm, according to my research I should need this stuff to trigger displaying a text box, but I don't understand it, so I might do it this way.