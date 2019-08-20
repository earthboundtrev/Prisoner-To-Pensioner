var aboutTrevor = document.addEventListener('click', () => {

    let trevorTag = document.querySelector('.about-trevor');
    alert("The 'about-trevor' element has been clicked on!");

});

var imageInspection = document.addEventListener('click', () => {

    let trevorTag = document.querySelector('trevor-flexer');
    alert("The 'img-display' element has been clicked on!");

});

// Hmm, need to investigate how the event element is being reference because it looks like it 
// Hmm, according to my research I should need this stuff to trigger displaying a text box, but I don't understand it, so I might do it this way.