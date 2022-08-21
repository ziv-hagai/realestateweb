
import data from "../assets/data/data.json";
let users = data[2].users
// let users = []
export const userService = {
    getUsers,
    getById
}


function getUsers() {
    return data[2].users
}

function getById(id) {
    return users.find(u => u.id === +id)
}