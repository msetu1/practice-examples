// users 
const loadUsers = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
};
const displayUsers = (users) => {
    const userContainer = document.getElementById('user-container')
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h2>ID : ${user.id}</h2>
        <h4>User Name :${user.username}</h4>
        <h3>Email :${user.email}</h3>
        `;
        userContainer.appendChild(userDiv)
    }
}
loadUsers();