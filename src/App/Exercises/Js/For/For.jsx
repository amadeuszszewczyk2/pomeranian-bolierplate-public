import React from 'react';

export const Exercise33 = () => {
  const data = [
    { id: 1, name: 'Produkt 1', price: 10 },
    { id: 2, name: 'Produkt 2', price: 20 },
    { id: 3, name: 'Produkt 3', price: 15 },
    { id: 4, name: 'Produkt 4', price: 25 },
  ];

  const renderProducts = () => {
    const productsList = [];
    for (let i = 0; i < data.length; i++) {
      const { id, name, price } = data[i];
      productsList.push(
        <div key={id}>
          <h3>{name}</h3>
          <p>Cena: ${price}</p>
        </div>
      );
    }
    return productsList;
  };

  const snippetCode = `
    import React from 'react';

    export const Exercise33 = () => {
      const data = [
        { id: 1, name: 'Produkt 1', price: 10 },
        { id: 2, name: 'Produkt 2', price: 20 },
        { id: 3, name: 'Produkt 3', price: 15 },
        { id: 4, name: 'Produkt 4', price: 25 },
      ];

      const renderProducts = () => {
        const productsList = [];
        for (let i = 0; i < data.length; i++) {
          const { id, name, price } = data[i];
          productsList.push(
            <div key={id}>
              <h3>{name}</h3>
              <p>Cena:{price}</p>
            </div>
          );
        }
        return productsList;
      };

      return (
        <div>
          <h2>Lista produktów:</h2>
          {renderProducts()}
        </div>
      );
    };
  `;

  return (
    <div>
      <h2>Lista produktów:</h2>
      {renderProducts()}
      <pre>
        <code>{snippetCode}</code>
      </pre>
    </div>
  );
};
  

  









