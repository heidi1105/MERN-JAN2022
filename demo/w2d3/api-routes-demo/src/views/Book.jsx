import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Book = () => {
    const [book, setBook] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/books/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setBook(res.data)

            })
            .catch(err => {
                setBook(null)
                //not successful
            })
    }, [id])


    return (
        <div>
            {
                book ?(
                    <div>
                        <h1> Book name: {book.name}</h1>
                        <h1> Publisher: {book.publisher}</h1>
                        <h1> ISBN: {book.isbn}</h1>
                    </div>) :
                    <h1>Loading... If it takes too long, try another ID. </h1>
            }
        </div>
    )
}

export default Book
