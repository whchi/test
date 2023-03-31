import { AppBridgeProvider } from '@/components/providers/AppBridgeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Routes from './routes';
import './style.css';

const app = createRoot(document.getElementById('app') as HTMLElement);
const pages = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)', {
  eager: true,
});

app.render(
  <BrowserRouter>
    <AppBridgeProvider>
      <Routes pages={pages} />
      <App />
    </AppBridgeProvider>
  </BrowserRouter>,
);
