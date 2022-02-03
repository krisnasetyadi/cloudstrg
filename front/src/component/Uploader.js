import React from "react";
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

export default function Uploaderr({files,setFiles,removeFile}){
    function uploadHandler(e){
        const file = e.target.files[0];
        file.isUploading = true;
        setFiles([...files,file])
        // upload file
        const data = new FormData()
        data.append(
                file.name,
                file,
                file.name)
        
        axios.post('http://localhost:5000/upload',data)
        .then((res)=>{
            file.isUploading=false;
            setFiles([...files,file])
        })
        .catch((err)=>{
            console.error(err)
            removeFile(file.name)
        })

    
      }
      return (
        <div className="App">
          <Form method='POST'>
            <input type="file" name="file" onChange={uploadHandler}/>
            <Button>Upload</Button>

            <p>Support file</p>
            <p>PDF,JPG,PNG</p>
         </Form>
        </div>
      );
    

}
