const RoomForm = ({ connectToRoom }) => {
   return (
     <form className="room" onSubmit={e => { e.preventDefault(); connectToRoom(e.target.roomId.value) }}>
       <input placeholder="enter room id" type="text" name="roomId" />
       <button>connect</button>
     </form>
   )
}
 
export default RoomForm