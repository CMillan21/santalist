import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


(function () {
    const body = document.body;

    function randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    function moveGradient() {
        const x = randomBetween(85, 100);
        const y = randomBetween(85, 100);

        body.style.setProperty('--x', `${x}%`);
        body.style.setProperty('--y', `${y}%`);
    }

    moveGradient();
    setInterval(moveGradient, 6000);
})();
