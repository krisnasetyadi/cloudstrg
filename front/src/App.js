import './App.css';
import NavBarr from './component/NavBar';
import { useState } from 'react';

import Uploaderr from './component/Uploader';
import MainList from './component/MainFile';

function App() {
  const [files,setFiles] = useState([{}])

  function removeFile(filename){
    setFiles(files.filter(file=>file.name !== filename))
  }
  console.log(files)
return(
  <div className='App'>
    <NavBarr/>
    <h1>Upload your data here</h1>
  <Uploaderr files={files} setFiles={setFiles} removeFile={removeFile}/>
  <MainList files={files} setFiles={setFiles} removeFile={removeFile}/>
  </div>
)
}

  

export default App;
