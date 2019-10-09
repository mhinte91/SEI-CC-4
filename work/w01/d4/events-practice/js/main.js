const btn = document.querySelector('button');
const ul = document.querySelector('ul')

btn.addEventListener('click', function(evt){
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
});

ul.addEventListener('click', handleClick);

function handleClick(evt) {
    console.log(evt.target);
}