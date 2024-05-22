import { useState } from "react";
import { useHistory } from 'react-router-dom';


const IssueID = () => {
    const [name,setName]=useState('');
    const [rollNo,setRollNo]=useState('');
    const [bookName,setBookName]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    const data=fetch('http://localhost:1000/issues');
    
    const handleDelete=(rollNo,bookName) => {
        {data.map((prsn)=>{
            if((prsn.rollNo===rollNo) && (prsn.bookName===bookName)){
                method: 'DELETE'
            }
        });
        const prsn={name,rollNo,bookName,isPending};
        const newBlogs = blogs.filter((prsn)=>(prsn.rollNo!==rollNo && prsn.bookName!==bookName))
        setBlogs(newBlogs);
    }
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data= {name,rollNo,roomNo,bookName};
        setIsPending(true);

        fetch('http://localhost:1000/issues/',{
            method:'DELETE'
        })
        .then(()=>{
            setIsPending(false);

            history.push('/');
        })

    }
    return (
        <div className="issueid">
            <h2>Information</h2>
            <form onSubmit={handleDelete}>
                <label>Name:</label>
                <input type="text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Roll number:</label>
                <input type="text"
                required
                value={rollNo}
                onChange={(e)=>setRollNo(e.target.value)}
                />
                <label>Name of the book:</label>
                <input type="text"
                required
                value={bookName}
                onChange={(e)=>setBookName(e.target.value)}
                />
                {!isPending && <button>Return</button>}
                {isPending && <button disabled>Submitting data...</button>}
            </form>
        </div>
    );
}}
 
export default IssueID;