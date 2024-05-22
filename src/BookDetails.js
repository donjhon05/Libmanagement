import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BookDetails = () => {
    const {id} = useParams()
    const {data:book,error,isPending}=useFetch('http://localhost:8000/books/'+id);
    const history=useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:8000/books/'+book.id,{
            method:'DELETE'
        })
        .then(()=>{
            history.push('/');
        })
    }    
    return (
        <div className="book-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p>Written by {book.author}</p>
                    <div>{book.body}</div>
                    <button onClick={handleDelete}>Delete</button>                    
                </article>
            )}
        </div>
    );
}
 
export default BookDetails;