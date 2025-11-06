import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Panel from './pages/Panel';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/panel/:id' element={<Panel />} />
    </Routes>
  )
}

export default App;