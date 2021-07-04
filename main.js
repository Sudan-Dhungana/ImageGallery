const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
// overlays

const overlay = document.querySelector('.overlay');

/* Looping through images */

var i = 1;
while (i<=5) {
    const nextImg = document.createElement('img');
    nextImg.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(nextImg);
    nextImg.onclick = function (display) {
        displayedImage.src = display.target.src;
        
    }
    i++;
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Light Mode';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Dark Mode';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}