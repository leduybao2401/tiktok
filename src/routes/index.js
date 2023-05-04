import Home from '../pages/home';
import Following from '../pages/following';
import Profile from '../pages/profile';
import Upload from '../pages/upload';
//Layout
import HeaderOnly from '../components/Layout/HeaderOnly';

const publicRoutes = [
//no Sign
{ path: '/', component: Home },
{ path: '/follwing', component: Following },
{ path: '/profile', component: Profile },
{ path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = [

]
 
export {publicRoutes, privateRoutes}
