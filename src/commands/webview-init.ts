import * as vscode from 'vscode';
export const initPanel = vscode.commands.registerCommand('catCodeing.start', () => {
  const panel = vscode.window.createWebviewPanel(
    'catCoding', // Identifies the type of the webview. Used internally
    'Cat Coding', // Title of the panel displayed to the user
    vscode.ViewColumn.One, // Editor column to show the new webview panel in.
    {}, // Webview options. More on these later.
  );
  panel.webview.html = getWebviewContent();
});

function getWebviewContent() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
  </head>
  <body>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  </body>
  </html>`;
}