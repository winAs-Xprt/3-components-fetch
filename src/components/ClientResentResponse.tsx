import React from 'react';
import { useAppSelector } from '../redux/hooks'; 
import { ClientResentResponse } from '../redux/userSlice';

const ClientResentResponseComponent: React.FC = () => {
 
  const clientResentResponse: ClientResentResponse[] | null = useAppSelector((state) => state.user.clientResentResponse);

  return (
    <div className="card client-card">
      <h2>Client Resent Response:</h2>
      {clientResentResponse?.map((client, index) => (
        <div key={index}>
          <h2>Subject: {client.subject}</h2>
          <h2>Company Estimate ID: {client.company_estimate_id}</h2>
          <h2>Client Icon: {client.client_icon}</h2>
          <h2>Full Name: {client.full_name}</h2>
          <h2>Status: {client.status}</h2>
          <h2>Status Key: {client.status_key}</h2>
          <h2>Status ID: {client.status_id}</h2>
        </div>
      ))}
    </div>
  );
};

export default ClientResentResponseComponent;
