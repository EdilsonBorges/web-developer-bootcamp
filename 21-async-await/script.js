const fetch = require('node-fetch')

function fetchAvaterUrl(userId){
     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
     .then(response => response.json())

}

const result = fetchAvaterUrl(123)
result