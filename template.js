export default ({ body }) => {
    return `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root-item">${body}</div>
        </body>
      </html>
    `;
};