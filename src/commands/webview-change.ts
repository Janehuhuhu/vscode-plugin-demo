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

export const changePanel = vscode.commands.registerCommand('catCodeing.change', () => {
  let cat: Cat = 'Compiling Cat'
  const panel = vscode.window.createWebviewPanel(
    'catCoding',
    'Cat Coding',
    vscode.ViewColumn.One,
    {},
  );
  updateWebview('Compiling Cat', panel)
  panel.onDidChangeViewState(e => {
    const currentPanel = e.webviewPanel
    if (currentPanel.viewColumn === vscode.ViewColumn.One) {
      updateWebview('Compiling Cat', panel)
    } else {
      updateWebview('Coding Cat', panel)
    }
  })
});

const updateWebview = (cat: Cat, panel: vscode.WebviewPanel) => {
  panel.title = cat;
  panel.webview.html = getWebviewContent(cat);
};

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