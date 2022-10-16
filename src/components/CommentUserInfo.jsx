import "./CommentUserInfo.css"
import CommentWrapper from "./CommentWrapper";

function CommentUserInfo(props){
    return(
      <CommentWrapper className="userInfo">
       <img src={props.avatarUrl} alt="img" />
       <div className="userInfo-name">{props.name}</div>
      </CommentWrapper>
       
    )
}
export default CommentUserInfo;