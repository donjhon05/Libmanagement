import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const DataList = (props) => {    //can also be done like ({books,title}) without need of further 2 lines
    const data=props.data;
    const history=useHistory();
    const title=props.title;
    const handleDelete=(id)=>{
        fetch('http://localhost:1000/issues/'+id,{
            method:'DELETE'
        })
        .then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="data-list">
            <h2>{title}</h2>
            {data.map((person)=>(
               
                <div className="person-data" key={person.id}>
                    <h3>{person.name}</h3>
                    <h4>{person.rollNo}</h4>
                    <h4>{person.bookName}</h4>
                    <h4>Room number-{person.roomNo}</h4>
                    <button onClick={()=>handleDelete(person.id)}>Return</button>
                </div>
            ))}
        </div>
    );
}
 
export default DataList;