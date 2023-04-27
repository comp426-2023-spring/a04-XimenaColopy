#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist';
import express from 'express'

const args  = minimist(process.argv.slice(2));
console.log(args);
const PORT = args.port || 5000;
console.log(PORT);
const app = express();
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.get('*', (req, res) => {
  res.status(404).send('404 NOT FOUND')
})

app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
})

app.get('/app/rps/', (req, res) => {
  //console.log(req.body.move);
  res.status(200).send(JSON.stringify(rps())).end();
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
