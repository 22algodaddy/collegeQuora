import './share.css'
import {MdPermMedia} from 'react-icons/md'
import {AiFillTag} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'
 export default function Share(){
  return(
    <div className="share">
      <div className="shareWrapper">
       <div className="shareTop">
         <img className="shareProfileImg" src='Assets/Photo/person1.jpg' alt="" />
         <input className="shareInput" placeholder="Jot down here, what's in ur mind" />
       </div>
        <hr className="shareHr" />
       <div className="shareBottom">
         <div className="shareOptions">
           <div className="shareOption">
             <MdPermMedia style={{color: 'lightcoral'}} className="shareIcon"/>
             <span className="shareOptionText">Photos or Videos</span>
           </div>
           <div className="shareOption">
             <AiFillTag style={{color: 'brown'}} className="shareIcon"/>
             <span className="shareOptionText">Tag</span>
           </div>
           <div className="shareOption">
             <BiMap style={{color: 'green'}} className="shareIcon"/>
             <span className="shareOptionText">Location</span>
           </div>
           <div className="shareOption">
             <BsFillEmojiLaughingFill style={{color: 'goldenrod'}} className="shareIcon"/>
             <span className="shareOptionText">Feeling Lucky</span>
           </div>
         </div>
         <button className="shareButton">Share</button>
       </div>
      </div>
    </div>

  )
}
