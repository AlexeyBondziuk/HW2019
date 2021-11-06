require('dotenv').config();
// //
// // console.log('Hello Node.js project!.');
// //
// // console.log(process.env.MY_SECRET);
//
// // import 'dotenv/config';
//
// // require('./my-other-file.js').saySomething;
// import saySomething from './my-other-file.js'
import uuidv4 from 'uuid/v4' ;
import cors from 'cors' ;
import bodyParser from 'body-parser';
import express from 'express';
import models from './models';
import routes from './routes' ;
const app = express();

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.use ( cors ());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});


// app.get('/users', (req, res) => {
//     return res.send(Object.values(req.context.models.users));
// });
//
// app.get('/users/:userId', (req, res) => {
//     return res.send(req.context.models.users[req.params.userId]);
// });


// app.get('/messages', (req, res) => {
//     return res.send(Object.values(req.context.models.messages));
// });
//
// app.get('/messages/:messageId', (req, res) => {
//     return res.send(req.context.models.messages[req.params.messageId]);
// });
//
// app.post('/messages', (req, res) => {
//     const id = uuidv4();
//     const message = {
//         id,
//         text: req.body.text,
//         userId: req.context.me.id,
//     };
//
//     req.context.models.messages[id] = message;
//
//     return res.send(message);
// });
//
//
// app.delete('/messages/:messageId', (req, res) => {
//     const {
//         [req.params.messageId]: message,
//         ...otherMessages
//     }  = req.context.models.messages;
//
//     req.context.models.messages = otherMessages;
//
//     return res.send(message);
// });
//
// app.get('/session', (req, res) => {
//     return res.send(req.context.models.users[req.context.me.id]);
// });



app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

