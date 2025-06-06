let About=document.querySelector(".About");
let Projects= document.querySelector(".Animal");
let Contacts=document.querySelector(".Contacts");


function Aboutpopout(){
    About.addEventListener("click",function(){
        if (!document.querySelector(".Span")) {
    
    let Span=document.createElement("span");
    Span.classList.add("Span");
    Span.innerHTML=`
    <Div class="Aboutpopout">
    am Ashley Mahindu Lungaho, a passionate Computer Science student and an aspiring web developer dedicated to building dynamic and user-friendly web applications. Alongside my formal studies, I am actively teaching myself web development, diving deep into coding, design, and innovative problem-solving. My journey extends beyond just coding—I am also exploring creative skills like writing and branding, aiming to develop a versatile skill set. Though I’m still learning the full scope of web development, my curiosity and commitment to growth drive me to continuously push my boundaries and embrace every opportunity to improve.
    I build 
    <Div> <button id="close" >close</button>
    </Div>
    `
    
    document.body.appendChild(Span);
    const close= document.getElementById("close");
    close.addEventListener("click",function(){
        Span.remove();
    })
    
    
    
        } 

    })
}


Aboutpopout();
function Projectspopout(){
    Projects.addEventListener("click",()=>{
        window.open("https://l.instagram.com/?u=https%3A%2F%2Fgithub.com%2Fkz-web%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadrbrjqu5a0TrBD3ZY6_haOag02tg9y4Z4-iP-crV3i9J1lK6lGywYRu27GAQ_aem__zhr7Sq2uRZC5un45Axigg&e=AT3aaxqxAG2SYV0uYA2KSqGUxy_nW9cGk4SEpL3SyagnuOLuKZIdjFScaObXjKy_iQOwcLEfTHmM5NMA7E4ycUdPSZNHyW-SLe6RZns")
    })
}

Projectspopout();

function contactspopout(){
    Contacts.addEventListener("click",()=>{
        if (!document.querySelector(".Socials")){
            let socials=document.createElement("span");
            socials.classList.add("socials");
            socials.innerHTML=`
             <div>
             <a href="https://www.instagram.com/ashleylungaho/">
  <i class="bi bi-instagram" style="font-size: 24px; color: #E1306C;"></i>
</a>


            `
            document.body.appendChild(socials);
        }
    })
}
contactspopout();