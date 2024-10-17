import React from 'react';
import { useAppSelector } from '../redux/hooks'; 
import { EstPendingApprovalResult } from '../redux/userSlice';

const EstPendingApprovalResultComponent: React.FC = () => {

  const estPendingApprovalResult: EstPendingApprovalResult[] | null = useAppSelector((state) => state.user.estPendingApprovalResult);

  return (
    <div className="card est-card">
      <h2>Est Pending Approval Result:</h2>
      {estPendingApprovalResult?.map((est, index) => (
        <div key={index}>
          <h2>Company Estimate ID: {est.company_estimate_id}</h2>
          <h2>Client Icon: {est.client_icon}</h2>
          <h2>Full Name: {est.full_name}</h2>
          <h2>Submitted: {est.submitted}</h2>
          <h2>Expires: {est.expires}</h2>
          <h2>Amount: {est.amount}</h2>
        </div>
      ))}
    </div>
  );
};

export default EstPendingApprovalResultComponent;
