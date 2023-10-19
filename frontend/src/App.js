
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import Home from './Home';
import TeachersInfo from './TeachersInfo';
import Timetable from './Timetable';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/student' element={<Student />}></Route>
        <Route path='/create' element={<CreateStudent />}></Route>
        <Route path='/update/:id' element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

