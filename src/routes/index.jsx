import Home from '../pages/Home.jsx';
import Menu from '../pages/Menu/Menu.jsx';
import About from '../pages/About';
import Contact from '../pages/Contact';

const publicRoutes = [
    { path: '/', component : Home },
    { path: '/menu', component : Menu },
    { path: '/about', component : About },
    { path: '/contact', component : Contact },      
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }