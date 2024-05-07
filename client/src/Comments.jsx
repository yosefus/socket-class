
const Comments = ({ comments, user }) => {
   const className = (comment) => user.id === comment.user?.id ? 'user' : comment.user?.type === 'admin' ? 'admin' : ''
 
   return (
     <ul className="comments">
       {comments.map(comment => <li className={className(comment)} key={comment.text}>
         <div>{comment.user?.icon}</div>
         <p><span>{comment.user?.type === 'admin' ? 'system message: ' : ''}</span>{comment.text}</p>
       </li>)}
     </ul>
   )
}
 
export default Comments