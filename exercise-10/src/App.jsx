import UserList from "./UserList";
const App=()=>  {

const users=[
  { id: 1, name: 'Ahmed', email: 'jery12@gmail.com'},
  { id: 1, name: 'Ahmed', email: 'jery12@gmail.com'}
]
  return(
    <div>
      <UserList users={users}/>
    </div>
  )
}

export default App;