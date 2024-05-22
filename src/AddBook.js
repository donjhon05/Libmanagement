import { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddBook = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const book= {title,body,author};
        setIsPending(true);

        fetch('http://localhost:3000/books',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(book)
        })
        .then(()=>{
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className="addbook">
            <h2>Add a new book to library</h2>
            <form onSubmit={handleSubmit}>
                <label>Title of the book:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>About the book:</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Author of the book:</label>
                <input type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Book</button>}
                {isPending && <button disabled>Adding book...</button>}
            </form>
        </div>
    );
}
 
export default AddBook;
