import React from 'react';

function UserInterface({ layout }) {
  const renderUI = () => {
    return (
      <div className="user-interface">
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className="ui-row">
            {row.map((component, columnIndex) => (
              <div key={columnIndex} className="ui-column">
                {component.component ? (
                  React.createElement(component.component, {
                    ...component,
                    key: `${rowIndex}-${columnIndex}`
                  })
                ) : (
                  React.createElement(component, {
                    key: `${rowIndex}-${columnIndex}`
                  })
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return <div className="user-interface-container">{renderUI()}</div>;
}

export default UserInterface;
