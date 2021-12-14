import helloWorld from './hello-world';
import { initPanel } from './webview-init';
import { undatePanel } from './webview-update';
import { disposePanel } from './webview-dispose';
import { revealPanel } from './webview-reveal';

export default [ helloWorld, initPanel, undatePanel, disposePanel, revealPanel ];