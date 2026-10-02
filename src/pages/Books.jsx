import React from 'react'
import { resumeToPipeableStream } from 'react-dom/server'
import { Link } from 'react-router'

export const books = [
    {id : 1, bookName: '- Motivation '},
    {id : 2, bookName: '- Scientist '},
    {id : 3, bookName: 'Psychology '}
]

function Books() {
    
  return (
    <div>
      <h1 className='text-3xl'>Katalog Buku </h1>
      {books.map((book) => {
        return (
            <Link
            to = {`/${book.id}`}
            className='w-1/5'
            key={book.id}
            >
                {book.bookName}
            </Link>
        )
      })}
    </div>
  )
}

export default Books
