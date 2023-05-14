const express = require('express');
const app = express();
const sendmail = require('./controller')


app.get('/',sendmail)

app.listen(5000)
