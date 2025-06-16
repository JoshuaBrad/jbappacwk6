function getContacts(){
    fetch(rootPath + "controller/get-contacts/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayOutput(data);
    })
}

function displayOutput(data){
    let output = "<table>";
    for (a in data) {
        output += 
        `<tr>
            <td><img src="${rootPath}controller/uploads/${data[a].avatar}"/></td>
            <td>${data[a].firstname}</td>
            <td>${data[a].lastname}</td>
            <td>${data[a].mobile}</td>
            <td>${data[a].email}</td>
        </tr>`;
    }
    output+="</table";
    document.getElementById("table").innerHTML = output;
}