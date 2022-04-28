const btn = document.querySelector('.rating-btn');
const ratingStateContainer = document.querySelector('.rating-state-container');
const thankStateContainer = document.querySelector('.thank-state-container');
const rates = document.querySelectorAll('.rating-number');
const score = document.querySelector('.score');
const thankContainer = document.querySelector('.thank-state-container');
let startScore = 3; //default value

btn.addEventListener('click', onSubmit);
rates.forEach(rate => {
    rate.addEventListener('click', handleRatingsClick);
})

function onSubmit() {
    ratingStateContainer.classList.add('hide');
    score.textContent = startScore;
    thankContainer.classList.remove('hide');
}

function handleRatingsClick(event) {
    rates.forEach(rate=> {
        rate.classList.remove('active');
    })

    if(event.target.classList.contains('rating-number')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    startScore=event.target.textContent;
}