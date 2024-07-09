let result={
       "tag": "",
       "free": true,
       "role": false,
       "user": "romasahu257",
       "email": "romasahu257@gmail.com",
       "score": 0.64,
       "state": "deliverable",
       "domain": "gmail.com",
       "reason": "valid_mailbox",
       "mx_found": true,
       "catch_all": null,
       "disposable": false,
       "smtp_check": true,
       "did_you_mean": "",
       "format_valid": true
     }
submitbtn.addEventListener("click",async(e)=>{
       e.preventDefault();
       console.log("clicked")
       resultcont.innerHTML=`<img  width="123" src="image/loading.svg"></img>`
       let key="ema_live_EquomFU7nNSF6NC2Y3Y0TdciPFazHMDcvH5aH4J5"
       let email=document.getElementById("username").value
let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res=await fetch(url)
let result=await res.json()
let str=``;
for(key of Object.keys(result)){
       if(result[key]!=="" && result[key]!==" "){
       str=str+`<div>${key}:${result[key]}</div>`
       }
}
console.log(str)
resultcont.innerHTML=str
})

