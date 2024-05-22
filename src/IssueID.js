import { useState } from "react";
import { useHistory } from 'react-router-dom';

const IssueID = () => {
    const [name,setName]=useState('');
    const [rollNo,setRollNo]=useState('');
    const [roomNo,setRoomNo]=useState('');
    const [bookName,setBookName]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data= {name,rollNo,roomNo,bookName};
        setIsPending(true);

        fetch('http://localhost:1000/issues',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(()=>{
            setIsPending(false);
            history.push('/libdata');
        })

    }
    return (
        <div className="issueid">
            <h2>Information</h2>
            <form onSubmit={handleSubmit}>
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
                <label>Room number:</label>
                <input type="text"
                required
                value={roomNo}
                onChange={(e)=>setRoomNo(e.target.value)}
                />
                <label>Name of the book:</label>
                <input type="text"
                required
                value={bookName}
                onChange={(e)=>setBookName(e.target.value)}
                />
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Submitting data...</button>}
            </form>
        </div>
    );
}
 
export default IssueID;