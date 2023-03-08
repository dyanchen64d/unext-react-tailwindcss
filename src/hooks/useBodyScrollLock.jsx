import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function useBodyScrollLock() {
  const bodyStyle = document.body.style;

  const { isOpen } = useSelector((state) => state.nav);

  useEffect(() => {
    bodyStyle.overflowY = isOpen ? 'hidden' : '';
    bodyStyle.height = isOpen ? '100%' : '';
  }, [isOpen]);
}

export default useBodyScrollLock;
