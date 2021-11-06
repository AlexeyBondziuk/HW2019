const express = require('express');          //модуль-замена http
const enableWs = require('express-ws');      // 2. Добавляем

const app = express(); //создаем приложение
const expressWs = enableWs(app);             //2. Оборачиваем app в объект enableWs
const clients = []; // 3.чтобы работать с несколькими клиентами, серверу необходимо их где-то хранить

let arr = [];


app.get('/api', (req, res) => {  //get - тип запроса, /api - по какому пути, req, res - обработчики;
    // api - "розетка-вилка", Если сервер ничего не знает о клиенте (index.html), то сервер может получать данные только по запросу клиента.
    //2.Для того того, чтобы сервер узнал о клиенте нужно организовать websocket:
    // Добавляем (если нет): npm i express-ws --save;
    res.send('Hello with express');
});


app.use(express.static('public')); //настройка сервера, чтобы он возращал html страницы

expressWs.getWss().on('connection', ws => { //3. чтобы обработать подключение. Connection - событие. Подсоеденятеся новый - мы его добаялем в массив
    clients.push(ws); // 3. добавляем объект к клиентам
    setInterval(sendAllClients, 1000); //3. message: `clients.length = ${clients.length}` отправляем всем клиентам сообщение
    // sendAllClients(JSON.stringify(arr));
});

const sendAllClients = message => { //3. чтобы всем отсылать сообщения, реализуем метод
    clients.forEach(client => client.send(JSON.stringify(arr)))
};


// const sendAllClients2 = function message2(arr) {
//     clients.forEach(client => client.send(JSON.stringify(arr)))
// };
// setInterval(sendAllClients, 500)
// console.log(JSON.stringify(arr));





app.ws('/ws', ws => {
    ws.on('message', msg => { // слушатели. Можем с клиента слать сообщения.
        console.log(msg)  //2.Получили со стороны клиента (index) запрос ws.send, и отвечаем console.log(msg) на стороне сервера(!) (в терминале "message from client")
    });

    ws.on('close', () => { // 3. чтобы не отсылать клиентам, которые отключены, мы будем remove-ать его из массива
        const index = clients.indexOf(ws); //3. берем идекс клиента

        if (index > -1) {
            clients.splice(index, 1);
        }

        console.log(`removed ws index = ${index}`); // 3. в терминале `removed ws index = ${index}`
    })
});

app.listen(3000, () => {
    console.log('listening port...')
});


function randomNumber (){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}
function currentTime(){
    let date = new Date();
    return date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
}
function dataElement() {
    arr.push({time: currentTime(), value: randomNumber()});
    if (arr.length > 1000){
        arr.shift();
    }
    // console.log(arr)
    // let data = arr.map(function (el) {
    //     return el.time + ";" + el.value;
    // }).join("/\r/\n");
//     fs.writeFileSync("data.csv", data);


    return JSON.stringify(arr)
}
setInterval(dataElement,1000)

