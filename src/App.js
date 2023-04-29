import { Fragment } from 'react';
//Fragment chi de chuaws
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes'
import DefaultLayout from './components/Layout/defaultLayout';
function App(){
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((routes, index) =>{
            let Layout =  DefaultLayout
            if(routes.layout){
              Layout = routes.layout
              //routes.layout
            }else if(routes.layout ===  null){
              Layout = Fragment
            }
            const Page = routes.component
            return  <Route key={index} path={routes.path} element={
                   <Layout>
                      <Page/>
                   </Layout>
              }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;