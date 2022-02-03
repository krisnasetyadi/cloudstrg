import axios from "axios";
import React from "react";
import FileItem from "./FileItem";

export default function MainList({files,removeFile}){
    function deleteFileHandler(_name){
        axios.delete(`http://localhost:5000/upload?name=${_name}`)
        .then((res)=>{
            removeFile(_name)
        })
        .catch((err)=>console.error(err))
    }
    return(
        <ul className="file-list">
            {
                files &&
                files.map(f=><FileItem 
                key={f.name}
                file={f}
                deleteFile={deleteFileHandler}/>)
            }
        </ul>
    )
}