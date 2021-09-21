import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import contactsData from './contacts.json'






function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))

  const remainContacts = contactsData.filter(result => !contacts.includes(result));

  function deleteContact(id){
    const filteredContacts = contacts.filter(result => result.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
    <div class></div>
      <div className="navbar">
        <h1>IronContacts</h1>
        <button onClick = {()=>{
          let newContact = remainContacts[Math.floor(Math.random(1)*remainContacts.length)]
          let newArr = [...contacts]

          newArr.push(newContact)
          setContacts(newArr)

        }}>Add Random Contact</button>
        <button onClick = {()=>{
          
          let newArr = [...contacts]
        
          let orderArrByScore = newArr.sort((a,b)=>(b.popularity>a.popularity)?1:-1)

          setContacts(orderArrByScore)

        }}>Sort by popularity</button>
        <button onClick = {()=>{
          let newArr = [...contacts]

          let orderArrByName = newArr.sort((a,b)=>(a.name>b.name)?1:-1)
        
          setContacts(orderArrByName)

        }}>Sort by name</button>
        {/* <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </table> */}
      </div>
      <div className="contactList">
        {contacts.map(contact=>{
            return(
              
              <div className="contactCard">
              <div className="1">
              <div><img src={contact.pictureUrl}/></div>
              </div>
              <div className="2">
              <h2>{contact.name}</h2>
              <h4>Popularity: {contact.popularity}</h4>
              {contact.wonOscar && <h4>Oscars: 🏆</h4> }
              {!contact.wonOscar && <h4>Oscars:</h4>}
              {contact.wonEmmy && <h4>Emmy: 🏆</h4> }
              {!contact.wonEmmy && <h4>Emmy:</h4>}
              <button onClick={()=>deleteContact(contact.id)}>Delete</button>
              </div>
            </div> )})}
      </div>


    </div>
  );
}

export default App;
