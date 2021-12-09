import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscode-plugin-demo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-plugin-demo!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
