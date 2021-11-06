// было в index.html в скрипте

const xhr = new XMLHttpRequest(); // XMLHttpRequest - встроенный в барузер объект

xhr.open('GET', '//localhost:3000/api', true); //отправялется запрос на /api
xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.responseText);
    }

};
xhr.send();
