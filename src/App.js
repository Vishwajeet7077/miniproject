import Home from './component/homePage/homePage';
import Login from './component/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './component/profile/profile';
import ServiceProviders from './component/serviceProviderList/serviceProviderList';
import ServiceProviderForm from './component/from/serviceProviderSignup';
import ServiceProviderDetail from './component/from/serviceProviderDetail';
import ProjectForm from './component/from/projectfrom';
function App() { 
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="login" exact Component={Login} />
                <Route path='profile' exact Component={Profile} />
                <Route path='serviceprovider' exact Component={ServiceProviders} />
                <Route path='serviceproviderform' exact Component={ServiceProviderForm} />
                <Route path='serviceDetailform' exact Component={ServiceProviderDetail} />
                <Route path='projectFrom' exact Component={ProjectForm} />
            </Routes>
        </Router>
    )
}

export default App;
