import React from "react";
import {FaRegFile,FaTimesCircle} from 'react-icons/fa'
export default function FileItem({file,deleteFile}){
    return(
        <li
        className="list-item"
        key={file.name}>
            <FaRegFile/>
            <p>{file.name}</p>
            <div className="act">
                {file.isUploading && 
                <FaTimesCircle/>
                }
                {!file.isUploading && 
                <FaTimesCircle onClick={()=>deleteFile(file.name)}/>}
            </div>
        </li>
    )
}