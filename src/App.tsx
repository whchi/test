import { useAppBridge } from '@/hooks/index';

const App = () => {
  const app = useAppBridge();
  return <div>your content here</div>;
};

export default App;
