

// let item = document.querySelector("ul#list>li:first-child")

// console.log(item.innerHTML)

// item.innerHTML="Oge değiştirildi first elemnt"

// let meditem = document.querySelector("ul#list>li:nth-child(2").innerHTML

// console.log(meditem)

// let ulist = document.querySelector("ul#list")

// let lidom = document.createElement('li')

// lidom.innerHTML="Kendi oluşturduğumuz veri"

// ulist.prepend(lidom)


let userName = prompt("Isminizi giriniz")

var catchedname = document.querySelector("#myName")

catchedname.innerHTML=userName;

var catcheddate = document.querySelector("#myClock")

function getdate(){

    var hour = new Date().getHours()
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();

    catcheddate.innerHTML = `${hour}:${minute}:${second} ${stringday}`


}



var day = new Date().getDay()
var stringday;

if(day ==1){
    stringday = "Pazartesi"
}
else if(day ==2){
    stringday ="Salı"
}
else if(day ==3){
    stringday ="Çarşamba"
}
else if(day ==4){
    stringday ="Perşembe"
}
else if(day ==5){
    stringday ="Cuma"
}
else if(day ==6){
    stringday ="Cumartesi"
}
else if(day ==7){
    stringday ="Pazar"
}


setInterval(getdate,1000)






