import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Normal} from './oyun1';
import {Zoroyun} from './zoroyun';
import {Home} from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    
    <div>
      
    
      <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/normal' element={<Normal />}/>
            <Route path='/zoroyun' element={<Zoroyun />}/>
      </Routes>
      
   </div>
     
  );
}

export default App;
