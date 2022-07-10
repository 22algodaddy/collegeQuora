import  "./profile.css"
import Topbar from "../../Components/topbar/topbar";
import Sidebar from "../../Components/sidebar/sidebar";
import Feed from "../../Components/feed/feed";
import Rightbar from "../../Components/rightbar/rightbar";
export default function profile(){
  return(<>
      <Topbar />
  <div className='profile'>
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img src="Assets/Post/post3.jpg" alt=" "  className="profileCoverImg"/>
          <img src="Assets/Photo/person2.jpg" alt=" " className="profileUserImg"/>
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Dhruv</h4>
          <span className="profileInfoDesc">Hello!!</span>
        </div>
      </div>
      <div className="profileRightBottom">
         <Feed />
         <Rightbar profile/> {/*use to check whether Rightbar is on the Profile Page or Home Page we are not sending profile prop if rightbar is on Home Page*/}
      </div>
    </div>
  </div>
   </>
  )
};
