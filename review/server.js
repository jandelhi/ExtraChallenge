import React from 'react';
import {renderToString} from 'react-dom/server';
import Review from "./src/components/Review.js";

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const renderedApp = renderToString(<Review/>);

  callback(null, {
    staticPath,
    app: renderedApp
  });
};
