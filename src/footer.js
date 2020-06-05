import React,{Component} from 'react';
import ln from './linkedin.svg';
import git from './github.svg';
import fb from './facebook.svg';
import gmail from './gmail.svg';
import phone from './phone.svg';





class footer extends Component{



    render(){



        return(

                <>

                <hr/>


                <br/>
                <nav class="navbar navbar-expand-lg">
    
                <div class="collapse navbar-collapse txt-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a href="https://www.linkedin.com/in/mkoirala/" target="_blank" class="nav-item nav-link"><img src={ln} width="75"/></a>
                    <a href="https://github.com/mempk" target="_blank" class="nav-item nav-link"><img src={git} width="75"/></a>
                    <a href="https://www.facebook.com/madhav.babu.56" target="_blank" class="nav-item nav-link" ><img src={fb} width="75"/></a>
                    
                    <a class="nav-item nav-link">
                        <h6><img src={gmail} width="15"/> : madhav.koiralacs@gmail.com</h6>
                        <h6><img src={phone} width="15"/> : +1 (662) 638 9580</h6>
                        <h6>Copyright @ Madhav Prasad Koirala</h6>  
                    </a>
                   
                    </div>
                </div>
                </nav>

                

                </>




        )
    }
}



export default footer;