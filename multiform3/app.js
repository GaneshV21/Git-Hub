let firstpage=document.getElementById("one")
let secondpage=document.getElementById("two")
let thirdpage=document.getElementById("three")
let fourthpage=document.getElementById("four")
let fifthpage=document.getElementById("five")
let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let num3=document.getElementById("num3")
let num4=document.getElementById("num4")
let month=document.getElementById("month")
let year=document.getElementById("year")
let btn1=document.getElementById("btn_1")
let btn2=document.getElementById("btn_2")
let goback=document.getElementById("goback")
let goback1=document.getElementById("goback1")
let goback2=document.getElementById("goback2")
let nextbtn1=document.getElementById("nextstep1")
let nextbtn2=document.getElementById("nextstep2")
let btnlast=document.getElementById("btnlast")
let display_method=document.getElementById("display_method")
let display_check=document.getElementById("display_check")
let displaysecondpage=document.getElementById("displaysecondpage")
let displaythirdpage=document.getElementById("displaythirdpage")
let total_price=document.getElementById("total_price")
let names=document.getElementById("name")
let emails=document.getElementById("email")
let phones=document.getElementById("phone")
let alerts=document.getElementById("alert")
let alertss=document.getElementById("alert1")

let nam=document.getElementById("name1")
let eml=document.getElementById("email1")
let phno=document.getElementById("phone1")

let show=1
let barr=1
let arr6=[]
let a=0
let count=0

let arrobj=[{index:0,isSelected:false,icon:"./assets/icon-arcade.svg",title:"Arcade",amount:9},
            {index:1,isSelected:false,icon:"./assets/icon-advanced.svg",title:"Advanced",amount:12},
            {index:2,isSelected:false,icon:"./assets/icon-pro.svg",title:"Pro",amount:15}]

let arrobj1=[{index:0,isSelected:false,icon:"./assets/icon-arcade.svg",title:"Arcade",amount:90,free:"2 months free"},
            {index:1,isSelected:false,icon:"./assets/icon-advanced.svg",title:"Advanced",amount:120,free:"2 months free"},
            {index:2,isSelected:false,icon:"./assets/icon-pro.svg",title:"Pro",amount:150,free:"2 months free"}]


let arrobj2=[{index:0,isChecked:false,title:"Online service",subtitle:"Access to multiplayer games",amount:1},
            {index:1,isChecked:false,title:"Larger storage",subtitle:"Extra 1TB of cloud save",amount:2},
            {index:2,isChecked:false,title:"Customizable profile",subtitle:"Custom theme on your profile",amount:2}]
    
let arrobj3=[{index:0,isChecked:false,title:"Online service",subtitle:"Access to multiplayer games",amount:10},
            {index:1,isChecked:false,title:"Larger storage",subtitle:"Extra 1TB of cloud save",amount:20},
            {index:2,isChecked:false,title:"Customizable profile",subtitle:"Custom theme on your profile",amount:20}]
    
let arr5=[{index:0,isSelected:false,icon:"./assets/icon-arcade.svg",title:"Arcade",amount:9,amount1:90},
            {index:1,isSelected:false,icon:"./assets/icon-advanced.svg",title:"Advanced",amount:12,amount1:120},
            {index:2,isSelected:false,icon:"./assets/icon-pro.svg",title:"Pro",amount:15,amount1:150}]
            names.addEventListener("click",()=>{
                console.log(names.value.length)
                if(names.value.length>0){
                    nam.style.display="none"
                }   
            })
            emails.addEventListener("click",()=>{
                if(emails.value.length>0){
                    eml.style.display="none"
                }   
            })
            phones.addEventListener("click",()=>{
                if(phones.value.length>0){
                    phno.style.display="none"
                }   
            })

btn2.addEventListener("click",(event)=>{
    display_method.innerHTML=""
    display_check.innerHTML=""
    event.preventDefault();
    btn1.style.backgroundColor="#0b3160"
    btn2.style.backgroundColor="white"
    month.style.color="#9e9bab"
    year.style.color="#0b3160"
    barr=2
    displayModesMonth(arr5,barr);
    displaychecksYear(arrobj3)
    border1(a);   
    show=2
})

btn1.addEventListener("click",(event)=>{
    display_method.innerHTML=""
    display_check.innerHTML=""
    event.preventDefault();
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="#0b3160" 
    month.style.color="#0b3160"
    year.style.color="#9e9bab"
    barr=1
    console.log(arr5)
    displayModesMonth(arr5,barr);
    displaychecksMonth(arrobj2)
    border1(a);
    show=1
})

function Validation(name1,email1,phone1){
    nam.style.display="none"
    eml.style.display="none"
    phno.style.display="none"
    if(name1&&email1&&phone1){
        console.log(name1,email1,phone1)
        secondpage.style.display="block"
        firstpage.style.display="none"
        num1.style.backgroundColor="#544aff"
        num1.style.color="white"
        num2.style.backgroundColor="rgb(198, 231, 253)"
        num2.style.color="black"
        nam.style.display="none"
        eml.style.display="none"
        phno.style.display="none"
    }
    else{
        console.log("hi")
        if(name1==="" && email1==="" && phone1===""){
            nam.style.display="block"
            eml.style.display="block"
            phno.style.display="block"
        }
        else if(name1==="" && email1==="" ){
            nam.style.display="block"
            eml.style.display="block"     
        }
        else if(email1==="" && phone1===""){
            eml.style.display="block"
            phno.style.display="block"     
        }
        else if(name1==="" && phone1==="" ){
            nam.style.display="block"
            phno.style.display="block"     
        }
        else if(name1===""){
            nam.style.display="block"
        }
        else if(email1===""){
            eml.style.display="block"
        }
        else if(phone1===""){
            phno.style.display="block"
        }
    }
}

function checkbox(){
    if(show==1){
        displaychecksMonth(arrobj2)      
    }
    else{
        displaychecksYear(arrobj3)
    }
}

let myform=document.getElementById("myForm")
myform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let realname=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phone=document.getElementById("phone").value
    Validation(realname,email,phone);
    console.log(realname,email,phone);
    displayModesMonth(arr5,barr);
    checked=0
    checked1=0
    checkbox();    
})

goback.addEventListener("click",()=>{
    firstpage.style.display="block"
    secondpage.style.display="none"
    num1.style.backgroundColor="rgb(198, 231, 253)"
    num1.style.color="black"
    num2.style.backgroundColor="#544aff"
    num2.style.color="white"
    count=0
 arr5=[{index:0,isSelected:false,icon:"./assets/icon-arcade.svg",title:"Arcade",amount:9,amount1:90},
            {index:1,isSelected:false,icon:"./assets/icon-advanced.svg",title:"Advanced",amount:12,amount1:120},
            {index:2,isSelected:false,icon:"./assets/icon-pro.svg",title:"Pro",amount:15,amount1:150}]
console.log(arr5)
arrobj2=[{index:0,isChecked:false,title:"Online service",subtitle:"Access to multiplayer games",amount:1},
            {index:1,isChecked:false,title:"Larger storage",subtitle:"Extra 1TB of cloud save",amount:2},
            {index:2,isChecked:false,title:"Customizable profile",subtitle:"Custom theme on your profile",amount:2}]
    
arrobj3=[{index:0,isChecked:false,title:"Online service",subtitle:"Access to multiplayer games",amount:10},
            {index:1,isChecked:false,title:"Larger storage",subtitle:"Extra 1TB of cloud save",amount:20},
            {index:2,isChecked:false,title:"Customizable profile",subtitle:"Custom theme on your profile",amount:20}]
alerts.style.display="none"
})

goback1.addEventListener("click",()=>{
alertss.style.display="none"
    secondpage.style.display="block"
    thirdpage.style.display="none"
    num2.style.backgroundColor="rgb(198, 231, 253)"
    num2.style.color="black"
    num3.style.backgroundColor="#544aff"
    num3.style.color="white"
    alerts.style.display="none"
    alertss.style.display="none"
})
goback2.addEventListener("click",()=>{
    thirdpage.style.display="block"
    fourthpage.style.display="none"
    num3.style.backgroundColor="rgb(198, 231, 253)"
    num3.style.color="black"
    num4.style.backgroundColor="#544aff"
    num4.style.color="white"
})

nextbtn1.addEventListener("click",()=>{
    for(let i=0;i<arr5.length;i++){
        if(arr5[i].isSelected===true){
            count=count+1
        }
    }
    if(count<1){
        alerts.style.display="block"
        thirdpage.style.display="none"
        secondpage.style.display="block"
        num2.style.backgroundColor="rgb(198, 231, 253)"
        num2.style.color="black"
        num3.style.backgroundColor="#544aff"
        num3.style.color="white"
    }
    else{
        alerts.style.display="none"
        thirdpage.style.display="block"
        secondpage.style.display="none"
        num3.style.backgroundColor="rgb(198, 231, 253)"
        num3.style.color="black"
        num2.style.backgroundColor="#544aff"
        num2.style.color="white"
    }    
})

nextbtn2.addEventListener("click",()=>{
    console.log("checked","checked1",checked,checked1)
    if(checked>0||checked1>0){
        displayLastpage(arr6);
        console.log(arr6)
        fourthpage.style.display="block"
        thirdpage.style.display="none"
        num4.style.backgroundColor="rgb(198, 231, 253)"
        num4.style.color="black"
        num3.style.backgroundColor="#544aff"
        num3.style.color="white"
        alertss.style.display="none"
    }
    else{
        fourthpage.style.display="none"
        thirdpage.style.display="block"
        num3.style.backgroundColor="rgb(198, 231, 253)"
        num3.style.color="black"
        num4.style.backgroundColor="#544aff"
        num4.style.color="white"
        alertss.style.display="block"
    }  
})

nextstep3.addEventListener("click",()=>{
    fourthpage.style.display="none"
    fifthpage.style.display="block"
    num4.style.backgroundColor="#544aff"
    num4.style.color="white"
})

btnlast.addEventListener("click",()=>{
    fifthpage.style.display="none"
    firstpage.style.display="block"
    num1.style.backgroundColor="rgb(198, 231, 253)"
    num1.style.color="black"
    names.value=""
    emails.value=""
    phones.value=""
})

function displayModesMonth(arr5,barr){    
    display_method.innerHTML=""
    console.log("display_method", display_method.childNodes)
    arr5.map(item=>{
        let divcontent=document.createElement("div")
        divcontent.setAttribute("class","divcon")
            divcontent.style.cursor="pointer"  
            let imgsec=document.createElement("img")
            imgsec.addEventListener("click", e => {
                e.preventDefault()             
              })
            imgsec.src=item.icon
            imgsec.style.marginBottom="30px"
            let title=document.createElement("p")
            title.addEventListener("click", e => {
                e.preventDefault()               
              })
            title.innerText=item.title
            let amount=document.createElement("p")
            let free=document.createElement("p")
            if(barr==1){
                amount.innerText=`$${item.amount}/mo`
                free.innerHTML=""
            }
            else{
                amount.innerText=`$${item.amount1}/yr`
                free.innerHTML="2 years free"
            }
            amount.addEventListener("click", e => {
                e.preventDefault()                
              })
            divcontent.appendChild(imgsec)
            divcontent.appendChild(title)
            divcontent.appendChild(amount) 
            divcontent.appendChild(free) 
            display_method.appendChild(divcontent)
    })
    console.log("display_method",  display_method)
    const divConArr = Array.from(document.getElementById("display_method").children)
    console.log("divConArr", divConArr)
    display_method.addEventListener('click', (e) => {
            let qwerty = e.target
            if (e.target.tagName === 'IMG' || e.target.tagName === "P") {
                console.log(qwerty, e.target.parentNode)
                qwerty = e.target.parentNode
            }
            var index = divConArr.indexOf(qwerty) 
            border()
            function border(){
                const divConArr = Array.from(document.getElementById("display_method").children)  
                if(index !== -1) {   
                    changeObjMonth(index,divConArr)
                }                      
            }
            a=index              
    })
}
function border1(index){
    const divConArr = Array.from(document.getElementById("display_method").children)  
    if(index !== -1) {   
        changeObjMonth(index,divConArr)
    }         
}

function changeObjMonth(index,divcontent){             
    for(let i=0;i<arr5.length;i++){
        console.log("index",index)
        if(i==index){
            arr5[i].isSelected=true
            divcontent[i].style.border="1px solid black"
            alerts.style.display="none"
        }
        else{
        arr5[i].isSelected=false
        divcontent[i].style.border="0.1px solid rgb(214, 212, 212)"
        }
    }
    console.log("index", index) 
    console.log(arr5)
    arr6=arr5
}

let checked=0
let checked1=0 
function displaychecksMonth(arrobj2){ 
    display_check.innerHTML=""
    arrobj2.map(item=>{
        let divcontent=document.createElement("div")
        let checkbox=document.createElement("input")
        checkbox.setAttribute("type","checkbox")
        checkbox.style.cursor="pointer"
        checkbox.onclick=()=>{
            if(checkbox.checked){
                console.log(item.index,"selected")
                check(item.index)
                alertss.style.display="none"
            }
            else{
                console.log(item.index,"not selected")
                notcheck(item.index,checkbox)        
            }
        }
        let divcontent1=document.createElement("div")
        let title=document.createElement("p")
        title.innerText=item.title
        title.style.color="#0b3160"
        title.style.fontWeight="700"
        let subtitle=document.createElement("p")
        subtitle.innerText=item.subtitle
        subtitle.style.color="#9e9bab"
        divcontent1.appendChild(title)
        divcontent1.appendChild(subtitle)
        let amount=document.createElement("p")
        amount.innerText=`+$${item.amount}/mo`
        amount.style.color="#544aff"
        divcontent.appendChild(checkbox)
        divcontent.appendChild(divcontent1)
        divcontent.appendChild(amount)
        display_check.appendChild(divcontent)
        divcontent.style.display="flex"
        function check(index){
            for(let i=0;i<arrobj2.length;i++){
                if(i==index){
                    arrobj2[i].isChecked=true       
                }
            }
            checked=checked+1
            console.log(arrobj2)
        }
        function notcheck(index){
            for(let i=0;i<arrobj2.length;i++){
                if(i==index){
                    arrobj2[i].isChecked=false
                }       
            }
            checked=checked-1
            console.log(arrobj2)
        }
    })
}   

function displaychecksYear(arrobj3){
    display_check.innerHTML=""
    arrobj3.map(item=>{
        let divcontent=document.createElement("div")
        let checkbox=document.createElement("input")
        checkbox.setAttribute("type","checkbox")
        checkbox.style.cursor="pointer"
        checkbox.onclick=()=>{
            if(checkbox.checked){
                console.log(item.index,"selected")
                check1(item.index)
                alertss.style.display="none"
            }
            else{
                console.log(item.index,"not selected")
                notcheck1(item.index)            
            }
        }
        let divcontent1=document.createElement("div")
        let title=document.createElement("p")
        title.innerText=item.title
        title.style.color="#0b3160"
        title.style.fontWeight="700"
        let subtitle=document.createElement("p")
        subtitle.innerText=item.subtitle
        subtitle.style.color="#9e9bab"
        divcontent1.appendChild(title)
        divcontent1.appendChild(subtitle)
        let amount=document.createElement("p")
        amount.innerText=`+$${item.amount}/yr`
        amount.style.color="#544aff"
        divcontent.appendChild(checkbox)
        divcontent.appendChild(divcontent1)
        divcontent.appendChild(amount)
        display_check.appendChild(divcontent)
        divcontent.style.display="flex"
        function check1(index){
            for(let i=0;i<arrobj3.length;i++){
                if(i==index){
                    arrobj3[i].isChecked=true
                }
            }
            checked1=checked1+1
            console.log(arrobj3)
        }
        function notcheck1(index){
            for(let i=0;i<arrobj3.length;i++){
                if(i==index){
                    arrobj3[i].isChecked=false
                }
            }
            checked1=checked1-1
            console.log(arrobj3)
        }
    })
}  

function displayLastpage(arr5){
    displaysecondpage.innerHTML=""
    displaythirdpage.innerHTML=""

    let arrobj4=arr5.filter(item=>{
        return item.isSelected===true
    })
    let arrobj6=arrobj2.filter(item=>{
        return item.isChecked===true
    }) 

    let arrobj7=arrobj3.filter(item=>{
        return item.isChecked===true
    })

    
    if(show==1){
        let divcontent=document.createElement("div")
        let divcontent1=document.createElement("div")
        let sum=0
        arrobj4.map(item=>{
            let name=document.createElement("p")
            name.innerText=`${item.title}(Monthly)`
            let amount=document.createElement("p") 
            amount.innerText=`$${item.amount}/mo`
            sum=sum+item.amount
            divcontent.appendChild(name)
            divcontent.appendChild(amount)
            let link=document.createElement("p")
            link.innerText="change"
            link.onclick=()=>{
                secondpage.style.display="block"
                fourthpage.style.display="none"
                num4.style.backgroundColor="#544aff"
                num4.style.color="white"
                num2.style.backgroundColor="rgb(198, 231, 253)"
                num2.style.color="black"       
                arr5=arrobj4
                border1(a);
                
          }
            displaysecondpage.appendChild(divcontent)
            displaysecondpage.appendChild(link)
        })
        arrobj6.map(item=>{
            let divcontent2=document.createElement("div")
            let title= document.createElement("p")
            title.innerText=item.title
            let amount=document.createElement("p") 
            amount.innerText=`+$${item.amount}/mo`
            sum=sum+item.amount
            divcontent2.appendChild(title)
            divcontent2.appendChild(amount)
            divcontent1.appendChild(divcontent2)
            displaythirdpage.appendChild(divcontent1)
            
        })

        total_price.innerText=`+$${sum}/mo`
       
    }
    else{
        let sum=0
        let divcontent=document.createElement("div")
        let divcontent1=document.createElement("div")
        arrobj4.map(item=>{
        let name=document.createElement("p")
        name.innerText=`${item.title}(Yearly)`
        let amount=document.createElement("p")
        amount.innerText=`$${item.amount1}/yr`
        sum=sum+item.amount1

        divcontent.appendChild(name)
        divcontent.appendChild(amount)
            let link=document.createElement("p")
            link.innerText="change"
            link.onclick=()=>{
                secondpage.style.display="block"
                fourthpage.style.display="none"
                num4.style.backgroundColor="#544aff"
                num4.style.color="white"
                num2.style.backgroundColor="rgb(198, 231, 253)"
                num2.style.color="black"           
            }
        displaysecondpage.appendChild(divcontent)
        displaysecondpage.appendChild(link)
        })
        arrobj7.map(item=>{
            let divcontent2=document.createElement("div")
            let title=document.createElement("p")
            title.innerText=item.title
            let amount=document.createElement("p") 
            amount.innerText=`+$${item.amount}/yr`
            sum=sum+item.amount
            divcontent2.appendChild(title)
            divcontent2.appendChild(amount)
            divcontent1.appendChild(divcontent2)
            displaythirdpage.appendChild(divcontent1)
        })
        total_price.innerText=`+$${sum}/yr`
    }
    
}



