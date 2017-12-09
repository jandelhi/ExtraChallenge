import React from 'react';
import {renderToString} from 'react-dom/server';
import Item from "./src/components/Item.js";

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const renderedApp = renderToString(<Item/>);

  callback(null, {
    name,
    staticPath,
    app: renderedApp
  });
};
