import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BookList = (props) => {    //can also be done like ({books,title}) without need of further 2 lines
    const books=props.books;
    const title=props.title;
    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book)=>(
                <div className="book-preview" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <h2>{book.title}</h2>
                        <p>Author of the book is {book.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BookList;