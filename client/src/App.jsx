import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Admin from "./Admin"
import Layout from "./Layout"
import User from "./User"
import { users } from "./users"

const checkComments = [
  { user: { id: '1', icon: '😘', type: 'user' }, text: 'comment 1' },
  { user: { id: '3', icon: '🤴', type: 'admin' }, text: 'comment 2' },
]
export default function App() {
  const [comments, setComments] = useState([] ||checkComments)
  const [roomId, setRoomId] = useState(null)
  const [user, setUser] = useState(users[Math.floor(Math.random() * users.length)])

  const currentAdmin = { id: '3', icon: '🤴', type: 'admin' }

  const addComment = (comment, user) => setComments(old => [...old, { text: comment, user }])

  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: '/', element: <User connectToRoom={setRoomId} roomId={roomId} comments={comments} user={user} addComment={addComment} /> },
        { path: '/admin', element: <Admin comments={comments.filter(c => c.user.type == 'admin')} user={currentAdmin} addComment={addComment} /> },
      ]
    }
  ])


  return (<RouterProvider router={router} />)
}