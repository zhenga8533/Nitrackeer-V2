import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Logout from './pages/authentication/Logout';
import { Dashboard } from './pages/Dashboard';
import { Player } from './pages/Player';
import { Auction } from './pages/Auction';
import { Bazaar } from './pages/Bazaar';
import { Product } from './pages/Product';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='player' element={<Player />} />
                <Route path='auction' element={<Auction />} />
                <Route path='bazaar' element={<Bazaar />} />
                <Route path='bazaar/:productId' element={<Product />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='logout' element={<Logout />} />
            </Route>
        </Routes>
    );
}

export default App;
