import * as vscode from 'vscode';
export const postmessagePanel = vscode.commands.registerCommand('catCodeing.postmessage', () => {
  const panel = vscode.window.createWebviewPanel(
    'catCoding',
    'Cat Coding',
    vscode.ViewColumn.One,
    {
      enableScripts: true
    },
  );
  panel.webview.onDidReceiveMessage(message => {
    console.log('接收消息')
    if (message.type === 'add') {
      panel.webview.postMessage({
        type: 'add'
      })
    }
  })
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
  <h1 id="countRef"></h1>
  <Button onclick="add()">增加</Button>
  </body>
  <script>
    const vscode = acquireVsCodeApi()
    let index = 1

    function add() {
      console.log('发送消息')
      vscode.postMessage({
        type: 'add',
      })
    }
    window.addEventListener('message', event => {
      const message = event?.data
      if (message.type === 'add') {
        countRef.textContent = index++
      }
    })
    countRef.textContent = index

  </script>
  </html>`;
}