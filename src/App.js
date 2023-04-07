import React from 'react';
import MarketingFunnel from './components/MarketingFunnel';
import UserInterface from './components/UserInterface';
import useDataSource from './components/DataSource';
import './styles/index.css';

function App() {
  const leadsData = useDataSource([
    {
      id: 1,
      name: 'Lead 1',
      source: 'Website',
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'Lead 2',
      source: 'Referral',
      date: '2022-01-05'
    },
    {
      id: 3,
      name: 'Lead 3',
      source: 'Website',
      date: '2022-01-10'
    }
  ]);

  const prospectsData = useDataSource([
    {
      id: 4,
      name: 'Prospect 1',
      status: 'Interested',
      date: '2022-01-15'
    },
    {
      id: 5,
      name: 'Prospect 2',
      status: 'Interested',
      date: '2022-01-20'
    }
  ]);

  const customersData = useDataSource([
    {
      id: 6,
      name: 'Customer 1',
      product: 'Product A',
      date: '2022-01-25'
    },
    {
      id: 7,
      name: 'Customer 2',
      product: 'Product B',
      date: '2022-02-01'
    }
  ]);

  return (
    <div className="app">
      <UserInterface
        layout={[
          [leadsData, prospectsData],
          [
            customersData,
            { component: MarketingFunnel, leads: leadsData, prospects: prospectsData, customers: customersData }
          ]
        ]}
      />
    </div>
  );
}

export default App;
