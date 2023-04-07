import React, { useState, useEffect } from 'react';

function ConversionRateWidget({ leads, customers }) {
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    const calculateConversionRate = async () => {
      const leadsData = await leads.getData();
      const customersData = await customers.getData();

      if (leadsData.length > 0) {
        setConversionRate((customersData.length / leadsData.length).toFixed(2));
      }
    };

    calculateConversionRate();
  }, [leads, customers]);

  const renderWidget = () => {
    return (
      <div className="widget">
        <h2>Conversion Rate</h2>
        <h1>{conversionRate}</h1>
      </div>
    );
  };

  return <div className="widget-container">{renderWidget()}</div>;
}

export default ConversionRateWidget;
