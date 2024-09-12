    function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
    }
    function closeModal(){
        document.querySelector('.overlay').classList.remove('showoverlay');
        document.querySelector('.loginform').classList.remove('showloginform');
    }
    
    var btnlogin=document.querySelector(".btn-login")  //button
    btnlogin.addEventListener("click",showModal)      //button click

    var c=document.querySelector("span");
    c.addEventListener("click",closeModal)
