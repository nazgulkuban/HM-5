import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment(props) {
  return (
    <div>
      <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={props.data.author.avatarUrl}
          name={props.data.author.name}
        />
        <CommentWrapper className="comment-block">
          <div className="comment-text">{props.data.text}</div>
          <CommentDate date={props.data.date} />
        </CommentWrapper>
      </CommentWrapper>
    </div>
  );
}
export default Comment;
