import * as vscode from 'vscode';
import commands from './commands';
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(...commands);
}

export function deactivate() {}
