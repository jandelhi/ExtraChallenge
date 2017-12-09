import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Item from './item/src/components/Item';
import template from './template';

const app = express();

app.get('/', (req, res) => {
  const appString = renderToString(<Item />);

  res.send(template({
    body: appString,
  }));
});

const port = 3000;
app.listen(port,function(){
    console.log(`Listening on port ${port}`)
});