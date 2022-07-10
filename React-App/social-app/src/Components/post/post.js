import './post.css'
import{Users} from "../../dummyData"
import {useState} from 'react'
import {BiDotsVertical} from 'react-icons/bi'
export default function Post({post}){
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false) //intialy post is not liked
  const likeHandler= () =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return(
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
          {<img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg"/>}
          <span className="postUserName">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
          <span className="postDate">{post.date}</span>
        </div>
        <div className="postTopRight">
          <BiDotsVertical />
        </div>
        </div>
        <div className="postCentre">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt=" "/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postIcon" src="/Assets/heart.png" alt=" " onClick={likeHandler} />
            <img className="postIcon" src="/Assets/like.png" alt=" "  onClick={likeHandler} />
            <span className="postLikeCounter">{like} People Liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
