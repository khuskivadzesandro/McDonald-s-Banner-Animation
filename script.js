// banner animation loop logic

let animationTargets = [
    background = document.querySelector('.scene-1-background'),
    burger = document.querySelector('.scene-1-burger'),
    claim = document.querySelector('.scene-1-claim'),
    logo = document.querySelector('.scene-1-logo'),
    headline = document.querySelector('.scene-1-headline'),
    text_2 = document.querySelector('.scene-1-txt_2'),
    mcextreme_container = document.querySelector('.scene-1-mcextreme_container'),
    x = document.querySelector('.scene-1-x'),
    mce_treme = document.querySelector('.scene-1-mce_treme'),
    stroerer = document.querySelector('.scene-1-stroerer'),
    circle1 = document.querySelector('.outro-circle1'),
    circle2 = document.querySelector('.outro-circle2'),
    circle3 = document.querySelector('.outro-circle3'),
    logo_container = document.querySelector('.scene-2-logo_container'),
    mcextreme = document.querySelector('.scene-2-mcextreme'),
    overlay = document.querySelector('.scene-2-overlay'),
    headline_overlay = document.querySelector('.scene-1-headline_overlay')
];

function stopAnimation(target, stopDelay) {
    target.classList.remove('running');
    setTimeout(() => {
        target.classList.add('paused');
    }, stopDelay);
};

function startAnimation() {
    animationTargets.forEach((target) => {
        if(target.tagName === 'IMG') {
            target.style.display = 'inline';
        } else {
            target.style.display = 'block';
        }
        target.classList.remove('paused');
        target.classList.add('running');
    });
    stopBannerAnimation();
};

function stopBannerAnimation() {
    stopAnimation(animationTargets[0], 450);
    stopAnimation(animationTargets[1], 2150);
    stopAnimation(animationTargets[2], 1050);
    stopAnimation(animationTargets[3], 1050);
    stopAnimation(animationTargets[4], 2160);
    stopAnimation(animationTargets[5], 2650);
    stopAnimation(animationTargets[6], 9750);
    stopAnimation(animationTargets[7], 4770);
    stopAnimation(animationTargets[8], 5350);
    stopAnimation(animationTargets[9], 5950);
    stopAnimation(animationTargets[10], 9850);
    stopAnimation(animationTargets[11], 9650);
    stopAnimation(animationTargets[12], 8250);
    stopAnimation(animationTargets[13], 8750);
    stopAnimation(animationTargets[14], 9750);
    stopAnimation(animationTargets[15], 11060);
    stopAnimation(animationTargets[16], 4660);
};

stopBannerAnimation();

function startOver() {
    for(let i = 0; i < animationTargets.length; i++) {
        let target = animationTargets[i];
        target.style.display = 'none';
    };
};

setInterval(() => {
    startOver();
}, 11500);

setInterval(() => {
    startAnimation();
}, 11700);