
function getInnerValueById (id){
    
    const value = document.getElementById(id).value;
    const convertedValue =parseFloat(value);
    return convertedValue;
}

function getInnerTextById (id){
    const text = document.getElementById(id).innerText;
    const convertedText = parseFloat(text);
    return convertedText;
}

function setInnerTextByIDandValue (id,value){
    document.getElementById(id).innerText = value;
    // return setValue;
}

function handleToggle (id,status){
    document.getElementById(id).style.display = status;
}