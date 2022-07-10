import './closefriend.css'

export default function CloseFriend({user}){
  return(
  <li className="sidebarFriend">
    <img className="sidebarfriendprofilePhoto" src={user.profilePicture} alt=" "/>
    <span className="sidebarfriendName">{user.username}</span>
  </li>
)}
