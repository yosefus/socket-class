import Comment from "./Comment"
import Comments from "./Comments"
import RoomForm from "./RoomForm"

const User = ({ roomId, comments = [], user, addComment, connectToRoom }) => {
   return (<main>
     {roomId ? <h1>connected to room: {roomId}</h1> : <RoomForm connectToRoom={connectToRoom} />}
     <Comments comments={comments} user={user} />
     {roomId ? <Comment addComment={addComment} user={user} /> : null}
   </main>)
}
 
export default User