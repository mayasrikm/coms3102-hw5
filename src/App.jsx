import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <Container>
      <h1>Homework 5</h1>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>First Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name.first}</td>
              <td>{person.location.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
