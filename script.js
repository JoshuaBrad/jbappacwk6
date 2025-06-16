function getContacts(){
    fetch(rootPath + "controller/get-contacts/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // displayOutput(data);
        console.log(data);
    })
}

function displayOutput(){

}