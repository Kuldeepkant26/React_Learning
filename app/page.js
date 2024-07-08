'use client'
import Header from '@/Components/Header';
import React, { useState } from 'react';

function Page() {
  let [marks, updateMarks] = useState(56);
  const handleClick = () => {
    updateMarks(++marks)
  };

  return (
    <>

      <h1>
        My Marks are: {marks}
      </h1>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default Page;

