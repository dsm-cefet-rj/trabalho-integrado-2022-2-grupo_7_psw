function saveEdits() {

    //get the editable element
    var editElem = document.getElementById("edit");
    
    //get the edited element content
    var userVersion = editElem.innerHTML;
    
    //save the content to local storage
    localStorage.userEdits = userVersion;
    
    //write a confirmation to the user
    document.getElementById("update").innerHTML=
        `<span style='
            color:rgb(167, 167, 167);
            font-family: tahoma;
            font-size:small;
        '>Edit Saved!
        </span>";`
    }