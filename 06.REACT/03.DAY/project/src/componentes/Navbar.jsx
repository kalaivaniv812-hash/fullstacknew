import Banner from './Banner'
import './Desing.css'

const Navbar =()=>{
    const Apartment = "Lotus"

    
    return(<>

   
    
    <div className="parent">
        <div>
            <h1>{Apartment} <img src="public/favicon.svg" alt="" /></h1> 
            
            
        </div  >
        
        
        <div>
            <ul>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </ul>
        </div>
        
    </div>

    
    
    </>)
}

export default Navbar