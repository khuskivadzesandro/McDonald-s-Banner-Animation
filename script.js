// animation effects for css

function headlineFadeOut() {
    let headline = document.querySelector('.scene-1-headline');
    setInterval(() => {
        headline.style.opacity = '0';
    }, 4200);
}
headlineFadeOut();