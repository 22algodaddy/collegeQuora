import './rightbar.css'
import Online from "../Online/online.js"
import {Users} from "../../dummyData.js"
export default function rightbar({profile}){
  const HomeRightBar=() => {
    return(
      <>
        <div className='birthdayContainer'>
          <img className="birthdayImg" src='Assets/gigt.jpg' alt=" "/>
          <span className="birthdayText">
                <b>John Doe</b> and <b>3 other friends</b> have their birthday
              </span>
        </div>
        <img className="randomImg" src='Assets/Ad.jpg' alt=" " />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((eachUser)=>
            ( <Online key={eachUser.id} user={eachUser}></Online>)
          )}
        </ul>
      </>
    )
  };

  const ProfileRightBar= () => {
    return(
      <>
        <h4 className="rightBarProfileTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">College:</span>
            <span className="rightBarInfoValue">Bengaluru</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Branch:</span>
            <span className="rightBarInfoValue">ETE</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Native:</span>
            <span className="rightBarInfoValue">Prayagraj</span>
          </div>
        </div>
        <h4 className="rightBarProfileTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="Assets/Photo/person1.jpg" alt=" "  />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="Assets/Photo/person2.jpg" alt=" "  />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="Assets/Photo/person3.jpg" alt=" "  />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="Assets/Photo/person4.jpg" alt=" "  />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="Assets/Photo/person5.jpg" alt=" "  />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    )
  };
  return(<div className='rightBar'>
          <div className="rightBarWrapper">
            {profile?<ProfileRightBar />:<HomeRightBar/>}
          </div>
         </div>
  )
}
