import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.demoIssue', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
		}, async progress => {
			progress.report({message: 'Incrementing 1 every 50 ms', increment: 1})
			await new Promise(resolve => setTimeout(resolve, 150))

			for (let i = 0; i < 100; i++) {
				progress.report({message: 'Incrementing 1 every 50 ms', increment: 1})
				await new Promise(resolve => setTimeout(resolve, 50))
			}
		})
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.demoWorkaround', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
		}, async progress => {
			for (let i = 0; i < 100; i++) {
				progress.report({message: 'Incrementing 1 every 150 ms', increment: 1})
				await new Promise(resolve => setTimeout(resolve, 150))
			}
		})
	}));
}

export function deactivate() {}
