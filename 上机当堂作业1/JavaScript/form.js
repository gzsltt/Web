function checkEmail(){
    alert("a");
    var mail=getElementById("inputemail");
    var note=getElementById("checkemail");
    alert("a2");
    alert(note.innerHTML);
    note.innerHTML="";
    if(mail.value==""){
        note.innerHTML="此项为必填项，请输入您的Email地址。";
        //mail.focus();
        // return false;
    }

    if(mail.value.indexOf("@")==-1){
        note.innerHTML="Email格式不正确，必须包含@";
        //mail.focus();
        return false;
    }
    // if(mail.value.indexOf(".")==-1){
    //     divID.innerHTML="Email格式不正确，必须包含.";
    //     //mail.focus();
    //     return false;
    // }
    // //return true;
}
