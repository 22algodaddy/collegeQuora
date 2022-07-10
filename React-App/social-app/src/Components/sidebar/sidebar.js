import './sidebar.css'
import {MdOutlineRssFeed,MdSlowMotionVideo,MdGroups} from 'react-icons/md'
import {BsChatSquareQuoteFill,BsFillBookmarkStarFill,BsFillPatchQuestionFill} from 'react-icons/bs'
import {Users} from "../../dummyData.js"
import CloseFriend from "../closefriends/closefriends.js"
export default function sidebar(){
  return(<div className='sideBar'>
           <div className="sidebarWrapper">
             <ul className="sidebarList">
               <li className='sidebarlistItem'>
                 <BsChatSquareQuoteFill className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Chats</span>
               </li>
               <li className='sidebarlistItem'>
                 <MdSlowMotionVideo className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Vidoes</span>
               </li>
               <li className='sidebarlistItem'>
                 <MdGroups className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Groups</span>
               </li>
               <li className='sidebarlistItem'>
                 <BsFillBookmarkStarFill className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Bookmarks</span>
               </li>
               <li className='sidebarlistItem'>
                 <BsFillPatchQuestionFill className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Questions</span>
               </li>
               <li className='sidebarlistItem'>
                 <MdOutlineRssFeed className="sidebarIcon"/>
                 <span className="sidebarlistitemText">Feed</span>
               </li>
             </ul>
             <button className="sidebarButton">Show More</button>
             <hr className="sidebarHr"/>
             <ul className="sidebarfriendList">
               {Users.map((u) =>
                 <CloseFriend key={u.id} user={u}/>
               )}
             </ul>
           </div>
         </div>
  )}
