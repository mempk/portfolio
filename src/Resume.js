import React,{Component} from 'react';
import {Document, Page, ReactPDF} from 'react-pdf';
import resume from './resume.jpg';



class Resume extends Component{

    state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };


    render(){

        const {numPages,pageNumber}=this.state;


        return(

            <>

            <div className="main">
            <div className="container">

            
            <div className="cc">
                <div className="component">

                <p className="tabTitle">Resume</p>
                <p className="downloadLink">Please<a className="href" href="https://drive.google.com/file/d/1bAeWeqRBYfQ2g596YuZLeOv7d1By9bIJ/view" >click here</a>to view or download pdf version of my resume</p>
           

                </div>

                <div className="actualContent">
                    <div className="card" style={{marginTop:"0px"}}>

                    <img src={resume} width="100%"/>


                    </div>

                    
               
                </div>
            </div>
            </div>
            </div>
            </>
        )
        }
    }
export default Resume;