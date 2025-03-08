import { useState } from 'react'

const Filter = ({ filter, handleFilter}) => {
  return(
    <div>
      Filter: <input 
      value = {filter}
      onChange = {handleFilter}/> 
    </div>
  )
}

const PersonForm = ({ 
  newName, 
  newNumber, 
  handleNewName, 
  handleNewNumber, 
  addPerson 
}) => {
  return (
    <form onSubmit={addPerson}>
      <h2>Add New Contact</h2>
      <div>
        Name: <input 
          value={newName}
          onChange={handleNewName} 
        /> 
      </div>
      <div>
        Phone Number: <input  
          value={newNumber}
          onChange={handleNewNumber}
        /> 
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const PersonList = ({ persons, filter }) => {
  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.map((person) =>
        <li key={person.name}>{person.name}: {person.number}</li>
      )}
    </ul>
  );
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    if (
      persons.some((person) => person.name.toLowerCase() === newName.toLowerCase()  ) 
      ) {
      window.alert(`Ooga Booga! ${newName} is already in thine phonebook`)
    } else {

      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.max(0, ...persons.map(person => person.id || 0)) + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

const handleNewName = (event) => {
  setNewName(event.target.value)
}

const handleNewNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleFilter = (event) => {
  setFilter(event.target.value)
}

  return (
    
    <div>
      
    <h2>Phonebook</h2>

    <Filter 
        filter = {filter} 
        handleFilter = {handleFilter} 
    />

    <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <PersonList 
        persons = {persons} 
        filter = {filter} 
      />
    </div>
    
  )
}

export default App