import './home.css'
import Topbar from '../../Components/topbar/topbar.js';
import Sidebar from '../../Components/sidebar/sidebar.js';
import Rightbar from '../../Components/rightbar/rightbar.js';
import Feed from '../../Components/feed/feed.js';
export default function Home(){
  return(<>
         <Topbar />
         <div className='HomeContainer'>
           <Sidebar/>
          <Feed />
          <Rightbar  />
         </div>
        </>
  );
}
