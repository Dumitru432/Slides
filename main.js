const slides = document.querySelectorAll('.slide')


// aici i-am adaugat la fiecare slide evenimentul de active =, adica cand dau un click pe un slide sa se activeze partea aia de activ din css
for (const slide of slides){
    slide.addEventListener('click', function (){
        clearActiveSlides();
        slide.classList.add('active')
})
}

function clearActiveSlides (){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}

// modificare 