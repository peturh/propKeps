import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

import { data } from './data';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = polka();

app.get('/propkeps', (req, res) => {
  res.end(JSON.stringify(data));
});

app.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware()).listen(PORT, (err) => {
  if (err) console.log('error', err);
});
