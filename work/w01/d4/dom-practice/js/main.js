let titleEL = document.getElementById("title");
titleEL.style.textAlign = 'center';
let pEl = document.querySelector('.cool');
pEl.innerHTML = 'Comments for <strong>Today</strong>';
pEl.style.color = 'purple';
console.dir(pEl);
let aEl = document.querySelector('a');
aEl.setAttribute('href', "https://www.google.com");

let commentEls = document.querySelectorAll('.comment');

for(let el of commentEls) {
el.style.fontSize = '30px';
}