
import "./App.css";
import Bio from "./components/Bio.js";
import FullName from "./components/FullName.js";
import Address from "./components/Address.js";
import Image from "./components/Image.js";


function App() {
  const fullName = <h2 id= "full">  William Shakespeare </h2>
const image ="https://www.londontheatre.co.uk/sites/default/files/Shakespeare-1200-020221_0.jpg      " ;
const bio =<h5 id="bio"> * William Shakespeare was an English playwright, poet and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.  </h5>
const address = <h6  id="add"> Address:Stratford-upon-Avon</h6>


return (
   <div className="App">
     <center>
      
       <FullName fullName={fullName}/>
       <Image image={image}/>
       <Bio bio={bio}/>
       <Address address={address}/>
       
       </center>
       </div>
);
}

export default App;
