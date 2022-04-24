const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


const newOl = document.createElement('ol');
users.forEach(user => {
    const newLi = document.createElement('li');
    newLi.textContent = user.firstName + ' ' + user.lastName;
    newOl.appendChild(newLi);
});
document.body.appendChild(newOl);

document.getElementsByTagName('ol')[0].style.listStyle = 'none';

const liCollection = document.getElementsByTagName('li');
users.forEach((user, i) => {
    liCollection[i].setAttribute('data-id', user.id);
});
