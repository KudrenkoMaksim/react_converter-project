
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ConverterStart from './ConverterStart';
import Converter from './Converter'
import Layout from './Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<ConverterStart/>}/>
            <Route path='converter' element={<Converter/>}/>
            <Route path='*' element={<h1>error 404</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
