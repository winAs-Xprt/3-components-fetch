import React from 'react';
import { useAppSelector } from '../redux/hooks'; 
import { WinLostGraphData } from '../redux/userSlice';

const WinLostGraphDataComponent: React.FC = () => {

  const winLostGraphData: WinLostGraphData | null = useAppSelector((state) => state.user.winLostGraphData);

  return (
    <div className="card graph-data">
      <h2>Win/Lost Graph Data:</h2>
      {winLostGraphData && (
        <div>
          <h2>Current Win Count: {winLostGraphData.current_win_count}</h2>
          <h2>Current Lost Count: {winLostGraphData.current_lost_count}</h2>
          <h2>Previous Win Count: {winLostGraphData.previous_win_count}</h2>
          <h2>Previous Lost Count: {winLostGraphData.previous_lost_count}</h2>
          <h2>Current Win Amount: {winLostGraphData.current_win_amount}</h2>
          <h2>Current Lost Amount: {winLostGraphData.current_lost_amount}</h2>
          <h2>Previous Win Amount: {winLostGraphData.previous_win_amount}</h2>
          <h2>Previous Lost Amount: {winLostGraphData.previous_lost_amount}</h2>
          <h2>Current Total Amount: {winLostGraphData.current_total_amount}</h2>
          <h2>Previous Total Amount: {winLostGraphData.previous_total_amount}</h2>
          <h2>Current Total Count: {winLostGraphData.current_total_count}</h2>
          <h2>Previous Total Count: {winLostGraphData.previous_total_count}</h2>
        </div>
      )}
    </div>
  );
};

export default WinLostGraphDataComponent;
