import React, {useState, useEffect, useImperativeHandle} from "react";
import API from "../utils/API";
import Search from "./Search"
import "./comp.css"

// Function that creates the main section of the page that will include the dynamic content from the api
function Main () {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Function to grab data from the api
    useEffect(() => {
        API.getEmployees().then(results => {
            console.log(results.data.results);
            setUsers(results.data.results)
            setFilteredUsers(results.data.results)
        })
    },[])

    // Function that will allow the search bar  to filter through the dynamic table of employees
    const handleSearchChange = event => {
        const searchTerm = event.target.value
        const filteredList = users.filter (user => {
            let values = Object.values(user).join("").toLowerCase();
            return values.indexOf(searchTerm.toLowerCase()) !== -1;
        })
        setFilteredUsers (filteredList)
    }

    // Function to sort the dynamic table based on its categories....currently bugged, works in console log but not on page
    const sort = () => {
        console.log("sort")
        const sortedList = filteredUsers.sort((a, b) => {
           return a.name.first.localeCompare(b.name.first) 
        })
        console.log(sortedList)
        setFilteredUsers(sortedList)
    }
    return (
        // content that we want to return from the main function including the search component and a table with dynamic content from the api
        <div className="main">
            <div class="container">
            <Search handleSearchChange={handleSearchChange} />
            <table class="table" id="table">
                <thead class="thead-dark" id="thead">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">First Name</th>
                        <th scope="col" onClick={() => 
                            sort() 
                        }>Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                {filteredUsers.map(({login, name, picture, email, dob}) => {
                    return(
                        <tr key={login.uuid}>
                            <td><img src={picture.medium} /></td>
                            <td>{name.first}</td>
                            <td>{name.last}</td>
                            <td>{email}</td>
                            <td>{dob.age}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Main;