import React from 'react';
// import BarChart from './BarChart';
import ConversionRateWidget from './ConversionRateWidget';
import List from './List';

function MarketingFunnel({ leads, prospects, customers }) {
  return (
    <div className="marketing-funnel">
      <div className="charts-container">
        {/* <BarChart dataSource={leads} /> */}
        {/* <BarChart dataSource={prospects} /> */}
        {/* <BarChart dataSource={customers} /> */}
      </div>
      <ConversionRateWidget leads={leads} customers={customers} />
      <div className="lists-container">
        <List dataSource={leads} />
        <List dataSource={prospects} />
        <List dataSource={customers} />
      </div>
    </div>
  );
}

export default MarketingFunnel;
