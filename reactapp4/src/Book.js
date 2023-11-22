import React from 'react'
import BookEdit from './BookEdit'

export default function Book(props) {
  return (
    <div>
        <li onClick={()=>BookEdit(props)}>
            <span>ISBN: {props.isbn} Title: {props.title}</span>
            <p>Author: {props.author}</p>
        </li>
    </div>
  )
}
