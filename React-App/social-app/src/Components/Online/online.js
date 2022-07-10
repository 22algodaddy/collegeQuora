import "./online.css"
export default function Online({user}){
  return(
    <li>
      <div className="rightBarFriend">
        <dciv className="rightBarProfileImgContainer">
        <img className="rightBarProfileImg" src={user.profilePicture} alt=" " />
         <span className="rightBarOnline"></span>
      </dciv>
        </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  )
}
