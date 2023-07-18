const toggle_btn = document.querySelector(".toggle_btn");
const toggle = document.querySelector(".toggle")
let flag=0;
toggle_btn.addEventListener("click", ()=> {
    if(flag===0){
        toggle.style.display = "block";
        flag =1;
    }
    else{
        toggle.style.display = "none";
        flag =0;
    }
})

// $(".toggle_btn").click(function(){
//     // 
//     console.log("Clicked")
//  })


