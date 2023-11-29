import { Outlet } from 'react-router-dom';

import Directory from '../../directory/directory.component';
import FrontSplash from '../../components/front-splash/front-splash.component';
import Footer from '../../components/footer/footer.component';


const Home = () => {

  
  return(
    <>
    <div> 
    <FrontSplash />
    <Directory /> 
    <Outlet />
    <Footer />    
    </div>
    </>
  );
}

export default Home
 