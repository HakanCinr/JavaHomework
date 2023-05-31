//1.Ödev 
//div elementine css özellikleri kazandıralım.
//button elementimiz olucak.
//Butona tıklandıkca arkaplan rengi değişicek.

var btn1=document.querySelector("#button");
        
        btn1.onclick=function(){
                        var kirmizi=Math.floor(Math.random()*255);
            var yesil=Math.floor(Math.random()*255);
            var mavi=Math.floor(Math.random()*255);
            
            var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`; 
            document.body.style.backgroundColor=renk;           
        }


        
function MesajGonder(){
    var nickname=document.querySelector("#nickname").value;
    var message=document.querySelector("#message").value;
    var box =document.querySelector("#message-box");

    const lielemant = document.createElement("li");
    lielemant.innerHTML = "<span> Adınız=" + nickname +"</span><br><span> Mesajınız=" + message + "</span>";
    box.appendChild(lielemant);
    
    }
    

    




//2.ödev
//Html kısmı
//js dosyasında MesajGonder function oluşturucaz.
//CreateElement ile ul içerisine li elementi oluşturalım
//appendchild method ile ul içerisine li elementi ekletelim.
{/* <input id="nickname" type="text" placeholder="adınızı giriniz" />
<br />
<textarea id="message"></textarea>
<br />
<button onclick="MesajGonder()" >Mesaj At</button>

<ul id="message-box"></ul> */}