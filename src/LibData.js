import DataList from "./DataList";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LibData = () => {
    const history=useHistory();
    const {data,error,isPending}=useFetch('http://localhost:1000/issues');
    const handleIssue=()=>{
        history.push('/issueid');
    }
    return (
        <div className="data">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <DataList data={data} title="List of all issues->"/>}
            <button onClick={handleIssue}>Issue</button>
        </div>
    );
}
 
export default LibData;