import React, {useState, useEffect, useImperativeHandle} from "react";
import API from "../utils/API";
import Search from "./Search"

function Main () {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        API.getEmployees().then(results => {
            console.log(results.data.results);
            setUsers(results.data.results)
            setFilteredUsers(results.data.results)
        })
    },[])

    const handleSearchChange = event => {
        const searchTerm = event.target.value
        const filteredList = users.filter (user => {
            let values = Object.values(user).join("").toLowerCase();
            return values.indexOf(searchTerm.toLowerCase()) !== -1;
        })
        setFilteredUsers (filteredList)
    }

    const sort = () => {
        console.log("sort")
        const sortedList = filteredUsers.sort((a, b) => {
           return a.name.first.localeCompare(b.name.first) 
        })
        console.log(sortedList)
        setFilteredUsers(sortedList)
    }
    return (
        <div className="main">
            <Search handleSearchChange={handleSearchChange} />
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th >First Name</th>
                        <th onClick={() => {
                            sort() 
                        }}>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
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
    )
}

export default Main;