function insertValue(content){

var OriginalContent = document.getElementById ('displayResult').value;
var lastCharacter = OriginalContent.slice(OriginalContent.length-1,OriginalContent.length)
/* slice(OriginalContent.length-1,OriginalContent.length) means only the last character */
if(OriginalContent=='Error'){
    document.getElementById('displayResult').value = '0';
}

/* Test Case 1: If the value is Zero. then 0will be replaced by New Content*/
if(document.getElementById ('displayResult').value== '0' && content=='.'){
    document.getElementById('displayResult').value += content;
}
else if(document.getElementById ('displayResult').value== '0'){
    document.getElementById('displayResult').value = content;
}
/* Test Case 2: If we add same operator multiple times then it will not be updated */
else if(lastCharacter=='+' && content=='+'){
    document.getElementById('displayResult').value += '';
}
else if(lastCharacter=='-' && content=='-'){
    document.getElementById('displayResult').value += '';
}
else if(lastCharacter=='*' && content=='*'){
    document.getElementById('displayResult').value += '';
}
else if(lastCharacter=='/' && content=='/'){
    document.getElementById('displayResult').value += '';
}
else if(lastCharacter=='%' && content=='%'){
    document.getElementById('displayResult').value += '';
}
else if(lastCharacter=='.' && content=='.'){
    document.getElementById('displayResult').value += '';
}
    /*
        Example:
        748+- => 748-
        1. RemoveLast Character        (+)
        2. Add New Character (Content) (-)
    */
else if(lastCharacter=='+' && (content=='-' ||content=='*' ||content=='/' ||content=='%')){
        // Replace Last Character by Content
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1) + content;
    document.getElementById('displayResult').value = OriginalContent;
}
else if(lastCharacter=='-' && (content=='+' ||content=='*' ||content=='/' ||content=='%')){
        // Replace Last Character by Content
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1) + content;
    document.getElementById('displayResult').value = OriginalContent;
}
else if(lastCharacter=='*' && (content=='+' ||content=='-' ||content=='/' ||content=='%')){
        // Replace Last Character by Content
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1) + content;
    document.getElementById('displayResult').value = OriginalContent;
}
else if(lastCharacter=='/' && (content=='+' ||content=='-' ||content=='*' ||content=='%')){
        // Replace Last Character by Content
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1) + content;
    document.getElementById('displayResult').value = OriginalContent;
}
else if(lastCharacter=='%' && (content=='+' ||content=='-' ||content=='*' ||content=='/')){
        // Replace Last Character by Content
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1) + content;
    document.getElementById('displayResult').value = OriginalContent;
}
else{
    document.getElementById('displayResult').value += content;
}

}

function backspace(){
    /* Pick the Original Content */
    var OriginalContent = document.getElementById ('displayResult').value;
    /* Remove Last Character */
    OriginalContent = OriginalContent.slice(0,OriginalContent.length-1);
    /* Place at Original Position */
    document.getElementById('displayResult').value = OriginalContent;
    if(document.getElementById('displayResult').value.length==0){
        document.getElementById('displayResult').value=0;
    }
}

function allClear(){
    document.getElementById('displayResult').value = '0';
}

function calculate(){
    /* Pick the Original Content */
    var OriginalContent = document.getElementById ('displayResult').value;
    try{
        document.getElementById('displayResult').value = eval(OriginalContent);
    } catch (error){
        document.getElementById('displayResult').value = 'Error';
    }
}