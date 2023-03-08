import React,{useEffect, useState} from 'react';
import FileViewer from 'react-file-viewer';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { TextField,MenuItem } from '@mui/material';
import './index.scss';
const HomePage = () => {
  const [docxFile, setDocxFile] = useState(null);
  const [process, setProcess] = useState(null);

  const handleFileChange = (event) => {
    setDocxFile(event.target.files[0]);

  };



  return (
    <>
     <div className="App">
        <div className="sidebar">
          <Link onClick={()=>{setProcess("Dashboard")}}>Dashboard</Link>
          <Link onClick={()=>{setProcess("Profile")}}>Profile</Link>
          <Link onClick={()=>{setProcess("Setting")}}>Settings</Link>
          <div style={{bottom:'20px',position:'absolute'}}>
          <Row><Col>
          <TextField margin='normal' sx={{ width: '100%' }} id='client' select name='client' label='Client'  InputLabelProps={{ shrink: true, required: true }}>

<MenuItem value={'Male'}>Male</MenuItem>
<MenuItem value={'Female'}>Female</MenuItem>
<MenuItem value={'Other'}>Other</MenuItem>
</TextField>
   
   </Col><Col><TextField margin='normal' sx={{ width: '100%' }} id='journal' select name='journal' label='Journal'  InputLabelProps={{ shrink: true, required: true }} >

<MenuItem value={'Male'}>Male</MenuItem>
<MenuItem value={'Female'}>Female</MenuItem>
<MenuItem value={'Other'}>Other</MenuItem>
</TextField>

</Col></Row>
         
<TextField margin='normal' required fullWidth id='file' name='file' type='file' label='Select a Docx File' onChange={handleFileChange} InputLabelProps={{ shrink: true, required: true }} />

          <button className='w-100'>DOWNLOAD</button>
          </div>
        </div>
        <div className="main-content">
        {docxFile && (
        <div style={{ height: '645px' }}>
        
        <FileViewer 
  fileType="docx"
  filePath={URL.createObjectURL(docxFile)}
  key={docxFile.name}/>
  




        </div>
      )}

    </div>
    </div>
    </>
  );
}

export default HomePage;