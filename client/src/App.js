import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login_add_mail from './login_add_mail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login_add_mail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;