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
        <td>` + data[a] + `</td>
        </tr>`;
    }
    output+="</table";
    document.getElementById("table").innerHTML = output;
}