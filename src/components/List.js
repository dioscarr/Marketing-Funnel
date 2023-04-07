import React, { useState, useEffect } from 'react';

function List({ dataSource }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataSource.getData();
      setData(result);
    };

    fetchData();
  }, [dataSource]);

  const renderList = () => {
    return (
      <div className="list">
        <h2>{dataSource.constructor.name}</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return <div className="list-container">{renderList()}</div>;
}

export default List;
