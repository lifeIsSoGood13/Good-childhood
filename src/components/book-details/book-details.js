import React from 'react';

export function BookDetails({ bookData }) {
  return (
    <>
      <div>Это новая книга</div>
      <img src={bookData.image} alt="" />
    </>
  );
}
