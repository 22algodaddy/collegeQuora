import './topbar.css'
import {VscSearch} from 'react-icons/vsc'
import {BsFillPersonFill, BsFillChatSquareDotsFill} from 'react-icons/bs'
import {MdOutlineNotificationAdd} from 'react-icons/md'
export default function Topbar(){
  return(<div className="topbarContainer">
    <div className="topbarLeft">
      <span className="logo">TappApp</span>
    </div>
    <div className="topbarCentre">
      <div className="searchBar">
        <VscSearch className="searchIcon" />
        <input placeholder="Search your friends here" className="searchInput" />
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarLinks">
       <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <BsFillPersonFill />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <BsFillChatSquareDotsFill />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <MdOutlineNotificationAdd />
          <span className="topbarIconBadge">3</span>
        </div>
      </div>
      <img src="/Assets/Photo/person1.jpg" alt= "" className="topbarImg" />
    </div>
  </div>)
 }
