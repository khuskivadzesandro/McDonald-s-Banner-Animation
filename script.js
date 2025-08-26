// animation effects for css

function headlineFadeIn() {
    let headline = document.querySelector('.scene-1-headline');
    setTimeout(() => {
        headline.style.opacity = '0';
    }, 4200);
}
headlineFadeIn();