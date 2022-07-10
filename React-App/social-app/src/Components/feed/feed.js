import './feed.css'
import Post from "../post/post.js"
import Share from "../share/share.js"
import{Posts} from "../../dummyData.js"
export default function feed(){
  return(
    <div className="feed">
     <div className="feedWrapper">
       <Share />
       {Posts.map((post)=>(
         <Post key={post.id} post={post}></Post>
       ))}
     </div>
    </div>


    )
}
