import React,{Component} from 'react';
import profile from "./profile.jpg";
import ComputerSciencePortfolio from './ComputerSciencePortfolio';
import home from './home';
import Resume from './Resume';
import About from './About';
import Home from './home';
import Footer from './footer';









class Introduction extends Component{

    constructor(props){

        super(props);

        this.showAbout = this.showAbout.bind(this);
        this.showHome = this.showHome.bind(this);
        this.showPortfolio = this.showPortfolio.bind(this);
        this.showResume= this.showResume.bind(this);

        this.state={
            showHome: true,
            showResume: false,
            showPortfolio:false,
            showAbout:false,
        }



    }

    showHome=e=>{

        e.preventDefault();
        this.setState({showHome:true,
            showResume: false,
            showPortfolio:false,
            showAbout:false})
    }

    showAbout=e=>{

        e.preventDefault();
        this.setState({showAbout:true,
            showHome: false,
            showResume: false,
            showPortfolio:false,
        })
    }


    showPortfolio=e=>{

        e.preventDefault();
        this.setState({showPortfolio:true,
            showHome: false,
            showResume: false,
            showAbout:false})
    }

    showResume=e=>{

        e.preventDefault();
        this.setState({showResume:true,
            showHome: false,
            showPortfolio:false,
            showAbout:false})
    }
       



    render(){

        return(
        
        <>

      
            



        <div className="container">


      

        <div className="title jumbotron">

            <p><span className="printStatement">System.out.println </span> <span className="braces">&#40;</span><span className="name"> "Madhav Prasad Koirala" <br/> "CS Portfolio"</span><span className="braces">&#41;</span></p>

        

        </div>


        <hr/>

        <nav class="navbar navbar-expand-lg">
    
        <div class="collapse navbar-collapse txt-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a onClick={this.showHome} class="nav-item nav-link active">Home</a>
            <a onClick={this.showResume} class="nav-item nav-link">Resume</a>
            <a onClick={this.showAbout} class="nav-item nav-link" >About</a>
            
            </div>
        </div>
        </nav>

      
        <hr/>


        {this.state.showHome && 
        <Home />
        }

        {this.state.showAbout && 
        <About />
        }

        {this.state.showPortfolio && 
        <ComputerSciencePortfolio />
        }

        {this.state.showResume && 
        <Resume />
        }

        <Footer />

        </div>
       

        

       

        </>



        )

    }

        
    
}
export default Introduction;
