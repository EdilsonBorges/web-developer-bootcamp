var request = require('request');
request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(error, response, body){
    if(error){
        console.log('something went wrong: '+error)
    } else {
        if(response.statusCode == 200){
            console.log(body)
        }
    }
})