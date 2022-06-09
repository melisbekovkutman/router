
import {BrowserRouter , Routes ,Route,} from 'react-router-dom'
import Header from './components/Header';
import Basket from './pages/Basket';
import Content from './pages/Content';
import '../src/style.scss'

function App() {
  return (
    <BrowserRouter>
<div className="App">
  <Header/>
</div>

<Routes>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/content' element={<Content/>}/>
</Routes>
    </BrowserRouter>
  );
}

export default App;
