import React , {useState , createRef} from "react";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {exportComponentAsJPEG} from "react-component-export-image"
const EditPage = () =>{

    const [params] = useSearchParams();
    const [count,setCount] = useState(0);

    const memeRef = createRef();

    const addText = () =>{
        setCount(count+1);
    }

    return (
        <>
        <div style={{margin:"20px", width:"700px" , border:"1px solid black"}} ref={memeRef} className="meme mt-5 mb-5 ml-5">
            <img style={{padding:"20px"}} src={params.get("url")} alt="" width="300px" />
            {
            Array(count).fill(0).map(e => <Text/>)
            }
        </div>
        <Button style={{margin:"20px"}} onClick={addText}>Add Text</Button>
        <Button style={{margin:"20px"}} className="ml-5" variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</Button>
         </>
    )
}

export default EditPage;