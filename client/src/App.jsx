import { useState } from "react"
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom"

const checkComments = [
  { user: { id: '1', icon: '😘', type: 'user' }, text: 'comment 1' },
  { user: { id: '3', icon: '🤴', type: 'admin' }, text: 'comment 2' },
]

export default function App() {
  const [comments, setComments] = useState(checkComments)
  const [roomId, setRoomId] = useState(null)

  const currentUser = { id: '1', icon: '😘', type: 'user' }
  const currentAdmin = { id: '3', icon: '🤴', type: 'admin' }

  const addComment = (comment, user) => setComments(old => [...old, { text: comment, user }])

  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: '/', element: <User connectToRoom={setRoomId} roomId={roomId} comments={comments} user={currentUser} addComment={addComment} /> },
        { path: '/admin', element: <Admin  comments={comments.filter(c=> c.user.type == 'admin')} user={currentAdmin} addComment={addComment}/> },
      ]
    }
  ])


  return (  <RouterProvider router={router} />)
}

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <NavLink to="/">user</NavLink>
        <NavLink to="/admin">admin</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

const User = ({ roomId, comments = [], user, addComment, connectToRoom }) => {
  return (<main>
    {roomId ? <h1>connected to room: {roomId}</h1> :<RoomForm connectToRoom={connectToRoom}/>}
    <Comments comments={comments} user={user} />
    {roomId ? <Comment addComment={addComment}  user={user}/> : null}
  </main>)
}
const Comments = ({comments, user}) => {
  const className = (comment) => user.id === comment.user?.id ? 'user' : comment.user?.type === 'admin' ? 'admin' : ''
  
  return (
    <ul className="comments">
      {comments.map(comment => <li className={className(comment)} key={comment.text}>
        <div>{comment.user?.icon}</div>
        <p><span>{comment.user?.type === 'admin' ? 'system message: ' : '' }</span>{comment.text}</p>
      </li>)}
    </ul>
  )
}

const Admin = ({  comments = [], user, addComment }) => {
  return (<main>
    <Comments comments={comments} user={user} />
   <Comment addComment={addComment} user={user} />
  </main>)
}

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

const RoomForm =({ connectToRoom }) => {
  return (
    <form className="room" onSubmit={e => {e.preventDefault(); connectToRoom(e.target.roomId.value)  }}>
        <input  placeholder="enter room id" type="text" name="roomId" />
        <button>connect</button>
      </form>
  )
}