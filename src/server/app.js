const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('./handlers/logger');

const indexRoute = require('./routes/index_route');

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: true }));
app.use(helmet());

// Static
app.use(express.static(path.join(__dirname, '../../', 'build')));

// Routes
app.use('/', indexRoute);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404); // TODO: Error
});

module.exports = app;
