const Comment = ({ addComment, user }) => {
   const handleSubmit = e => {
     e.preventDefault()
     addComment(e.target.comment.value, user)
     e.currentTarget.reset()
   }
   return (<form className="commentForm" onSubmit={handleSubmit}>
     <textarea name="comment" cols="30" rows="3"></textarea>
     <button>send</button>
   </form>)
}
 
export default Comment