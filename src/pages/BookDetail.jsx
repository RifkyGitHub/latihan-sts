import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function BookDetail() {
    const { id } = useParams();
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        if (id) {
            const data = books.find((book) => book.id == id);
            setCurrentData(data);
        }
    }, [id]);
  return (
    <div>
      <h1> ID buku ini adalah : {currentData?.id}</h1>
      <h1> Nama buku ini adalah : {currentData?.id}</h1>
    </div>
  )
}

export default BookDetail
