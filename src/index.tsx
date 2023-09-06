import { App } from './App';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');

if (root) {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(<App />);
} else {
    console.error("Element with ID 'root' not found.");
}
