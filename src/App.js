import { BrowserRouter, Route, Routes } from 'react-router-dom'

import UseStateNav from './components/useState-nav'
import UseStateArray from './components/useState-array'
import UseStateObject from './components/useState-object'
import UseStateBasics from './components/useState-basics'
import ErrorExample from './components/error-example'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <UseStateNav />
      </div>
      <Routes>
        <Route path='usestatearray' element={<UseStateArray />} />
        <Route path='usestateobject' element={<UseStateObject />} />
        <Route path='usestatebasics' element={<UseStateBasics />} />
        <Route path='errorexample' element={<ErrorExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
