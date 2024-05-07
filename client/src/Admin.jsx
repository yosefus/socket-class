import Comment from "./Comment"
import Comments from "./Comments"

const Admin = ({ comments = [], user, addComment }) => {
   return (<main>
     <Comments comments={comments} user={user} />
     <Comment addComment={addComment} user={user} />
   </main>)
}
 
export default Admin