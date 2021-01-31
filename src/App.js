import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles 
    params={{
      particles:{
        number:{
          value:30,
        density:{
          enable:true,
          value_area:900
        }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:'#3CA9D1'
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    
</>
  );
}

export default App;
