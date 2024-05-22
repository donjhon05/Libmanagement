import BookList from "./BookList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const Home = () => {
    const {data:books,error,isPending}=useFetch('http://localhost:8000/books');

    {/*const handleIssue=()=>{
        history.push('/issueid');
    }
    const handleReturn=()=>{
        history.push('/return');
    }*/}

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... Please wait</div>}
            {!isPending && <div className="Links">
            <Link to='/libdata'>Issue/Return</Link></div>}
            {books && <BookList books={books} title="List of all books->"/>}
            
        </div>
    );
}
 
export default Home;