import { Outlet } from 'react-router-dom'

import UseStateNav from './components/useState-nav'

function App() {
  return (
    <div className='container'>
      <UseStateNav />
      <Outlet />
    </div>
  );
}

export default App;
