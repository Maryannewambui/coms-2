document.addEventListener("DOMContentLoaded", () => {
const friendsList = document.getElementById("friends-list");
const friendsDetailsContainer = document.querySelector(".friends-details");


fetch("http://localhost:3000/friends")
.then(res => res.json())
.then(data => {
    data.forEach(friends => {
        const personList = document.createElement("li");
        personList.className = "fri-list";

        friendsList.appendChild(personList);
        personList.addEventListener("click", () => {
            friendsDetailsContainer.innerHTML =  `
            <h2>Name: ${friends.name}</h2>
            <h3>Gender: ${friends.gender}</h3>
          `;
    })
    })
})
})
