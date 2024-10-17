import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { getUsers } from './redux/userSlice';
import './App.css';

import ClientResentResponseComponent from './components/ClientResentResponse';
import EstPendingApprovalResultComponent from './components/EstPendingApprovalResult';
import WinLostGraphDataComponent from './components/WinLostGraphData';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <ClientResentResponseComponent />
      <EstPendingApprovalResultComponent />
      <WinLostGraphDataComponent />
    </div>
  );
}

export default App;
