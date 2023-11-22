import React from 'react'
import Book from './Book'
import BookEdit from './BookEdit'

export default function BookList() {
    const list = [
        { isbn: 100, title: 'A Christmas Carol', author: 'Charles Dickens' },
        { isbn: 101, title: 'The Mansion', author: 'Henry Van Dyke' },
        { isbn: 102, title: 'The PHP', author: 'Rasmus Lerdorf' },
    ]
    // return (
    //     <div>
    //         <h1>Book List</h1>
    //         <ul>
    //             {list.map((item, i) => <li key={i}> ISBN: {item.isbn}, Title: {item.title}, Author: {item.author}</li>)}
    //         </ul>
    //     </div>
    // )
    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {list.map((item, i) => <Book isbn={item.isbn} title={item.title} author={item.author} key={i} />)}
            </ul>
        </div>
    )
}
