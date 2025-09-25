const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.routes');
const planRoutes = require('./routes/plan.routes');
const friendRoutes = require("./routes/friend.routes");


const { notFound, errorHandler } = require('./middleware/error');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/friends", friendRoutes);

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/plans', planRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
