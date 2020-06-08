import React,{Component} from 'react';
import profile from './profile.jpg';
import icn from './icn.png'
import olemiss from './olemiss.png';


class About extends Component{


    render(){


        return(

            <>
            <div className="container">

                <div className="cc">

                

                <div className="component">

                <p className="tabTitle"> About Me </p>

                </div>

                <div className="actualContent">

                

                    <div className="card aboutDetails" >
                    <div className="card-body">
                        <p style={{padding:"25px"}}>Recent computer science graduate with a passion for building efficient and effective software solutions. Seeking for a software engineer position with strong desire to understand and contribute to the business side of application programming.</p>
                         </div>
                    </div>

                    <div className="card">
                    <img className="card-img-top2 outreach" src={profile} alt="Card image cap"/>
                
                    
                    </div>

                    
                </div>
            </div>

            <hr/>


            <div className="cc">

                

                <div className="component">

                <p className="tabTitle"> Education </p>

                </div>

                <div className="actualContent">

                

                    <div className="card aboutDetails" >
                    <div className="card-body">
                    <h5  style={{padding:'2px'}}class="title1">Bachelor of Science in Computer Science</h5>
                    <h5 style={{padding:'2px'}} class="card-title1"> University of Mississippi</h5>
                    <h5 style={{padding:'2px'}} class="card-title1"> Aug 2016 – May 2020</h5>
                    <h5 style={{padding:'2px'}} class="desc"> 
                    <li>Cumulative GPA : 3.85</li>
                    <li>Magna Cum Laude, Chancellor Honors List, Phi Kappa Phi Scholar</li>
                    <li>Minor: Mathematics</li>

                    </h5>
                    </div>
                    </div>

                    <div className="card uniCard">
                    <img className="card-img-top2 outreach" src={olemiss} alt="Card image cap"/>
                    
                    </div>

                    
                </div>
            </div>

            <hr></hr>

            <div className="cc">

                

                <div className="component">

                <p className="tabTitle"> Skills </p>

                </div>

                <div className="actualContent">

                

                    <div className="card aboutDetails" >
                    <div className="card-body">
                    
                    <h5 class="desc"> 
                    <li>Object Oriented Programming, Java, Python, R, Maven,  Spring Boot, Spring  MVC, REST API, Microservices, Multi-threading, XML.</li>
                    <li> JavaScript, HTML, CSS, React.js, Jquery, JSON, Node.js, Express.js</li>

                    </h5>
                    </div>
                    </div>

                    <div className="card aboutDetails" >
                    <div className="card-body">
                    
                    <h5 class="desc"> 
                    <li>MySql/SQL, Hibernate, MongoDB, Firestore</li>
                    <li>Agile, Jenkins, GIT, Postman, JUnit, Docker</li>
                    <li>IntelliJ IDEA, Eclipse, Spyder, Visual Studio Code</li>

                    </h5>
                    </div>
                    </div>

                    
                </div>
            </div>

            <hr></hr>


            </div>
            </>
        )
        }
    }
export default About;