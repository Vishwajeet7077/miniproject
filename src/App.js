import Home from './component/homePage/homePage';
import Login from './component/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './component/profile/profile';
import ServiceProviders from './component/serviceProviderList/serviceProviderList';
function App() { 
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="login" exact Component={Login} />
                <Route path='profile' exact Component={Profile} />
                <Route path='serviceprovider' exact Component={ServiceProviders} />
            </Routes>
        </Router>
    )
}

export default App;
