import { useSelector } from 'react-redux';

import useBodyScrollLock from './hooks/useBodyScrollLock';
import Home from './pages/Home';

function App() {
  const { isOpen } = useSelector((state) => state.nav);

  useBodyScrollLock();

  return (
    <div className={`App ${isOpen ? ' h-full overflow-hidden' : ''}`}>
      <Home />
    </div>
  );
}

export default App;
