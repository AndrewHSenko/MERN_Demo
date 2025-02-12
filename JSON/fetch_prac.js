/**
Promise.all / Promise.any

All waits for multiple promises to arrive
Any checks through all listed servers for a promise

Promise.any([
    fetchServerOne,
    fetchServerTwo
]).then(value => {
    return
})

Old Style:
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addJSON);
const output = document.querySelector('#output');
function addJSON() {
    output.innerHTML = "WORKING";
    const url = "https://randomuser.me/api/?results=10";
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        output.innerHTML = data.results[0].cell + "|" + data.results[0].gender;
    })
}
*/
const btn = document.querySelector('#getJSON');
const btn_two = document.querySelector('#addButton');
const newUser = {
    name: 'John',
    job: 'Carpenter'
}

const clickHandler = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users');
        const data = await res.json();
        if (!res.ok) {
            console.log(data.description)
            return;
        }
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
    try {
        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        console.log(data)

    } catch (error) {
        console.log(error);
    }
    try {
        const res = await fetch('https://reqres.in/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        console.log(data)

    } catch (error) {
        console.log(error);
    }
    try {
        const res = await fetch('https://reqres.in/api/users', {
            method: 'DELETE'
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', clickHandler);
btn_two.addEventListener('click', clickHandler);