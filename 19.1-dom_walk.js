const li = document.getElementsByTagName('li');
li[1].innerText = 'main title';
li[2].querySelector('ul').innerHTML += '<li>sub title 4</li>';
li[li.length - 1].remove();
for (let element of li){
    if(!element.childElementCount > 0){
        element.innerText = 'Master Of The Dom';
    }
}

document.querySelector('p').innerText = `I did't sure that i understand what to do in 4`;