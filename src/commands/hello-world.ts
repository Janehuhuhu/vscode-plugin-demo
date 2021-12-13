import * as vscode from 'vscode';
export default vscode.commands.registerCommand('vscode-plugin-demo.helloWorld', () => {
  vscode.window.showInformationMessage('Hello World from vscode-plugin-demo!');
});