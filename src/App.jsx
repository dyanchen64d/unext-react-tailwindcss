import { useSelector, useDispatch } from 'react-redux';

import useBodyScrollLock from './hooks/useBodyScrollLock';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const { isOpen } = useSelector((state) => state.nav);

  useBodyScrollLock();

  return (
    <div className={`App ${isOpen ? ' h-full overflow-hidden' : ''}`}>
      <Header />
      <Navbar />
      <main className="app-main lg:ml-[256px]">
        <div className=" w-ful h-[800px] bg-red-400"></div>
        <div className=" w-ful h-[800px] bg-green-400"></div>
        <div className=" w-ful h-[800px] bg-blue-400"></div>
      </main>
    </div>
  );
}

export default App;
