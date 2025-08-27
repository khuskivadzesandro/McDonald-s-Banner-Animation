// banner animation loop logic

let bannerAnimationDuration = 12900;

let animationTargets = [
    background = document.querySelector('.scene-1-background'),
    burger = document.querySelector('.scene-1-burger'),
    claim = document.querySelector('.scene-1-claim'),
    logo = document.querySelector('.scene-1-logo'),
    headline = document.querySelector('.scene-1-headline'),
    headline_overlay = document.querySelector('.scene-1-headline_overlay'),
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
    scene2_overlay = document.querySelector('.scene-2-overlay')
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
        };
        target.classList.remove('paused');
        target.classList.add('running');
    });
    stopBannerAnimation();
};

function startOver() {
    for(let i = 0; i < animationTargets.length; i++) {
        let target = animationTargets[i];
        target.style.display = 'none';
    };
};

function stopBannerAnimation() {
    stopAnimation(animationTargets[0], 450); // .scene-1-background
    stopAnimation(animationTargets[1], 2150); // .scene-1-burger
    stopAnimation(animationTargets[2], 1050); // .scene-1-claim
    stopAnimation(animationTargets[3], 1050); // .scene-1-logo
    stopAnimation(animationTargets[4], 2160); // .scene-1-headline
    stopAnimation(animationTargets[5], 4660); // .scene-1-headline_overlay
    stopAnimation(animationTargets[6], 2650); // .scene-1-txt_2
    stopAnimation(animationTargets[7], 9750); // .scene-1-mcextreme_container
    stopAnimation(animationTargets[8], 4760); // .scene-1-x
    stopAnimation(animationTargets[9], 5350); // .scene-1-mce_treme
    stopAnimation(animationTargets[10], 5950); // .scene-1-stroerer
    stopAnimation(animationTargets[11], 9950); // .outro-circle1
    stopAnimation(animationTargets[12], 10050); // .outro-circle2
    stopAnimation(animationTargets[13], 9550); // .outro-circle3
    stopAnimation(animationTargets[14], 9650); // .scene-2-logo_container
    stopAnimation(animationTargets[15], 10660); // .scene-2-mcextreme
    stopAnimation(animationTargets[16], 12660); // .scene-2-overlay
};

stopBannerAnimation();

function replayBannerAnimation() {
    setInterval(() => {
        startOver();
    }, bannerAnimationDuration);

    setInterval(() => {
        startAnimation();
    }, bannerAnimationDuration + 150);
};

replayBannerAnimation();