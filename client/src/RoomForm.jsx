import useSocket from "./socket";

const RoomForm = ({ connectToRoom }) => {

  const socket = useSocket()
  const handleSubmit = (e) => {
    e.preventDefault(); 
    connectToRoom(e.target.roomId.value)
    socket.on('room-status',(msg)=>console.log(msg))
    socket.emit('room',e.target.roomId.value)
  }
  return (
    <form className="room" onSubmit={handleSubmit}>
      <input placeholder="enter room id" type="text" name="roomId" />
      <button>connect</button>
    </form>
  )
}

export default RoomForm