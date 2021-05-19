import logo from './logo.svg';
import './App.css';
import "./style.css";
import SrcImage from "./go.jpg"
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="container"> 
   <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
   <h1 className="titleRed">Kemmouche zineb jsx </h1>
   <img  className="photo"src={SrcImage} alt="srcImage" />
   <img className="photo" src="/images/zineb.jpg" alt="publicImage" />
   <ReactPlayer  
   width='480px'
   height='240px'
   controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />

<ReactPlayer  
   width='480px'
   height='240px'
   controls url='/images/player.mp4' />

   {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
   </div>


{/* <video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" >

</video> */}



    </div>
  );
}

export default App;
