var aboutTrevor = document.addEventListener('click', () => {

    let trevorTag = document.getElementByClassName('.about-trevor');
    alert("The 'about-trevor' element has been clicked on!");

});

var imageInspection = document.addEventListener('click', () => {

    let trevorTag = document.getElementByClassName('img-display');
    alert("The 'img-display' element has been clicked on!");

});

// Hmm, need to investigate how the event element is being reference because it looks like it 