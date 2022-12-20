import React from 'react';

export default function Card() {
  const arr = [
    {
      header: 'Заголовок 1',
      options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3'],
      text: 'какой-то текст 1 текст какой-то 1 какой-то',
    },
  ];
  return (
    <div style={{
      border: '1px solid black', width: '30%',
    }}
    >
      { arr?.map((el) => (
        <>
          <h2>{el?.header}</h2>
          {el?.options.map((op, i) => <ul key={i}><li>{op}</li></ul>)}
          <p>{el?.text}</p>
        </>
      ))}
    </div>
  );
}
