import React,{Component} from 'react';
import profile from './profile.jpg';
import icn from './icn1.png';
import outreach from './icn.png';
import itmedia from './itmedia.jpg';
import dl from './dl.jpg';
import ge from './goodeats.png';
import rapp from './outreachRAPP.png';






class Home extends Component{


    constructor(props){

    

        super(props);

        this.displayDL= this.displayDL.bind(this);
        this.displayFS = this.displayFS.bind(this);
        this.displayIT = this.displayIT.bind(this);
        this.displayWD = this.displayWD.bind(this);
      
          this.state ={
          webdeveloper:false,
          fullstack:false,
          itmedia:false,
          DistanceLearning:false,
          main:true
          
        }}

    displayDL=(e)=>{
        e.preventDefault();

    
        this.setState({DistanceLearning:!this.state.DistanceLearning,main:!this.state.main})
        

       


    }

    displayFS=(e)=>{

        e.preventDefault();

    
        this.setState({fullstack:!this.state.fullstack,main:!this.state.main})

     


    }

    displayIT=(e)=>{

        e.preventDefault();

    
        this.setState({itmedia:!this.state.itmedia,main:!this.state.main})

  


    }

    displayWD=(e)=>{

        e.preventDefault();

    
        this.setState({webdeveloper:!this.state.webdeveloper,main:!this.state.main})

     


    }


    

    


    render(){

    


        return(

            <>
            
            <div className="main">
            


            {this.state.main && 
            <div className="container">

            <p> This section highlights my ever growing achievement and experience in the field of Computer Science, includes my relevant experiences,  projects, my involvement and awards I have been awarded. </p>
            <br>
            </br>
            
            <div className="cc">

                   

                <div className="component">
                    
                     <p className="tabTitle"> Work Experience </p>
                     </div>


                <div className="actualContent">


                    <div className="card">
                    <img className="card-img-top1 outreach" src={outreach} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title"><a className="href" href="#fullstack" onClick={this.displayFS} >Full Stack Developer</a></h5>
                           
                    </div>
                    
                    </div>

                    <div className="card" >
                    <img className="card-img-top1" src={icn} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title"><a className="href" href="#webdeveloper" onClick={this.displayWD}>Web Developer</a></h5>
                         </div>
                    </div>


                    <div className="card" >
                    <img className="card-img-top1" src={dl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title"><a className="href" href="DistanceLearning" onClick={this.displayDL}>Distance Learning Facilitator</a></h5>
                         </div>
                    </div>


                    <div className="card">
                    <img className="card-img-top1" src={itmedia} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title"><a className="href" href="itmedia" onClick={this.displayIT}>IT Media Student Consultant</a></h5>
                        </div>
                    </div>

                    
                    
                </div>



                


            </div>

            </div>}


            <div className="container">
            {this.state.fullstack && 
            <div id="fullstack" className=" card largecard details fullstack">

                                
            <img  style={{float:"left",marginRight:"25px"}}className="card-img-top outreach" src={outreach} alt="Card image cap"/>
           
               
            <div className="details">
            <span onClick={this.displayFS} className="arrow" aria-hidden="true">&times;</span>
            <h5 class="title1">Full Stack Developer</h5>
                <h5 class="card-title1"> Outreach, University of Mississippi</h5>
                <h5 class="card-title1"> Jan 2020 – May 2020</h5>
                <h5 class="desc"> 
                <li>Working as a MERN Stack Developer to create web application for recruitment.</li>
                <li>Utilizing agile development methodology and working with product owners and various cross functional teams at Outreach throughout the development cycle </li>
                </h5>
                </div>          


            </div>}


           {this.state.webdeveloper && 

            <div id= "webdeveloper" className=" card largecard details webdeveloper">

                    
                    <img  style={{float:"left",marginRight:"25px"}}className="card-img-top outreach" src={icn} alt="Card image cap"/>

                    <div className="details">
                    <span onClick={this.displayWD} className="arrow" aria-hidden="true">&times;</span>
                        <h5 class="title1">Web Developer</h5>
                        <h5 class="card-title1"> The Institute of Child Nutrition</h5>
                        <h5 class="card-title1"> May 2019 – May 2020</h5>
                        <h5 class="desc"> 
                        <li>Design, deploy and launch two sites for Institute of Child Nutrition.</li>
                        <li>Coordinate with marketing and administrative division for contents and resources for websites.</li>
                        <li>Attend a weekly meeting with a team to meet the standards and deadlines set by USDA.</li>
                        <li>Customize theme and plugin to formulate effective and responsive design as governed by USDA.</li>
                        </h5>
                        </div>          
        
       
            </div>}



            {this.state.DistanceLearning && 
            <div id="DistanceLearning" className=" card largecard details ">

                    
                    <img  style={{float:"left",marginRight:"25px"}}className="card-img-top outreach" src={dl} alt="Card image cap"/>

                    <div className="details">
                    <span onClick={this.displayDL} className="arrow" aria-hidden="true">&times;</span>
                        <h5 class="title1">Distance Learning Facilitator</h5>
                        <h5 class="card-title1"> University of Mississippi</h5>
                        <h5 class="card-title1"> Jan 2019 – May 2019</h5>
                        <h5 class="desc"> 
                        <li>Set up video conference and meeting for online classes.</li>
                        <li>Troubleshoot any hardware and network issue during live streaming.</li>
                        <li>Coordinated with control office, professor and students to ensure engaging and interactive learning experience.</li>
                        </h5>
                        </div>          
        
       
            </div>}

            {this.state.itmedia && 
            <div id="itmedia"className=" card largecard details">

                    
                    <img  style={{float:"left",marginRight:"25px"}}className="card-img-top outreach" src={itmedia} alt="Card image cap"/>

                    <div className="details">
                    <span onClick={this.displayIT} className="arrow" aria-hidden="true">&times;</span>
                        <h5 class="title1">IT Media Student Consultant</h5>
                        <h5 class="card-title1">IT Department, University of Mississippi</h5>
                        <h5 class="card-title1"> Jan 2019 – May 2019</h5>
                        <h5 class="desc"> 
                        <li>Orchestrated delivery and setup of PC and multimedia for a class</li>
                        <li>Ensured uninterrupted media environment for class and immediate support if needed.</li>
                        </h5>
                        </div>          
        
       
            </div>}
            </div>

            <div className="container">

    

            <div className="cc">

                

                <div className="component">
                    
                    <p className="tabTitle"> Project Experience</p>
                    </div>


                <div className="actualContent">


                    <div className="card">
                    <img className="card-img-top1 outreach" src={rapp} alt="Card image cap"/>
                    <div className="card-body">
                       <h5 class="card-title">Recruitment App -<a className="href" href="https://olemissoutreach.herokuapp.com/" target="_blank">Demo</a></h5>
                       
                        
                    </div>
                    </div>
                    

                    <div className="card" >
                    <img className="card-img-top1" src={ge} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 class="card-title">Food Delivery System -<a className="href" href="http://goodeats9.herokuapp.com/" target="_blank">Demo</a></h5>
                       </div>
                    </div>


                    <div className="card" >
                    <div className="card-body">
                        <h5 class="card-title">And many more unpublished work ......</h5>
                        </div>
                    </div>
                    
                </div>



                


            </div>

            </div>

            </div>



            


            </>

    
        )
        }
    }
export default Home;