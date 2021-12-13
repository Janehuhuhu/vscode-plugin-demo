import * as vscode from 'vscode';

interface Cats {
  'Coding Cat': string,
  'Compiling Cat': string,
}
type Cat  = 'Coding Cat' | 'Compiling Cat';

const cats: Cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};

export const undatePanel = vscode.commands.registerCommand('catCodeing.update', () => {
  const panel = vscode.window.createWebviewPanel(
    'catCoding', // Identifies the type of the webview. Used internally
    'Cat Coding', // Title of the panel displayed to the user
    vscode.ViewColumn.One, // Editor column to show the new webview panel in.
    {}, // Webview options. More on these later.
  );
  let index = 0;
  const updateWebview = () => {
    const cat = index++ % 2 ? 'Compiling Cat' : 'Coding Cat';
    panel.title = cat;
    panel.webview.html = getWebviewContent(cat);
  };
  setInterval(updateWebview, 2000);
});

function getWebviewContent(cat: Cat) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
  </head>
  <body>
  <img src="${cats[cat]}" width="300" />
  </body>
  </html>`;
}