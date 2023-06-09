
//variabili 

let MRIC;
let Mris;
let n;
let num;
var input; 
var filtro;
var lista;
var voci;
var x;
var i;
var testo;
let click = 1;
let Pla = 0;
let Vet = 0;
let Car = 0;
let Ind = 0;
let Org = 0;
let E = 0;
let BarraR = 0;
let sez = 0;

let pages = 2;

//tutta la parte dedicata alla ricerca e bottoni vari

function searchCod()
{
    
    click = 0;

    input = document.getElementById("Ricerca");

    filtro = input.value.toUpperCase();

    num = 5;

    //Plastica

    lista = document.getElementById("elenco1");

    voci = lista.getElementsByTagName("li");

    n = voci.length;

    for (i = 0; i < voci.length; i++) 
    {
        x = lista.getElementsByTagName("li")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) 
        {
            voci[i].style.display = "";
            MRIC = testo;
        } 
        else 
        {
            voci[i].style.display = "none";
            n = n-1;
        }
    }

    if (n == 0){
        gsap.to("#plastica", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#plastica", {display: "none"});
        }});
        num = num - 1;
        Pla = 1;
    }
    else {
        gsap.set("#plastica", {display: ""});
        if (Pla == 1){
            gsap.fromTo("#plastica", {opacity: 0}, {opacity: 1, duration: 0.2});
            Pla = 0;
        }
    }
    
    //Vetro

    lista = document.getElementById("elenco2");

    voci = lista.getElementsByTagName("li");

    n = voci.length;

    for (i = 0; i < voci.length; i++) 
    {
        x = lista.getElementsByTagName("li")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) 
        {
            voci[i].style.display = "";
            MRIC = testo;
        } 
        else 
        {
            voci[i].style.display = "none";
            n = n-1;
        }
    }

    if (n == 0){
        gsap.to("#vetro", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#vetro", {display: "none"});
        }});
        num = num - 1;
        Vet = 1;
    }
    else {
        gsap.set("#vetro", {display: ""});
        if (Vet == 1){
            gsap.fromTo("#vetro", {opacity: 0}, {opacity: 1, duration: 0.2});
            Vet = 0;
        }
    }


    //carta

    lista = document.getElementById("elenco3");

    voci = lista.getElementsByTagName("li");

    n = voci.length;

    for (i = 0; i < voci.length; i++) 
    {
        x = lista.getElementsByTagName("li")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) 
        {
            voci[i].style.display = "";
            MRIC = testo;
        } 
        else 
        {
            voci[i].style.display = "none";
            n = n-1;
        }
    }

    if (n == 0){
        gsap.to("#carta", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#carta", {display: "none"});
        }});
        num = num - 1;
        Car = 1;
    }
    else {
        gsap.set("#carta", {display: ""});
        if (Car == 1){
            gsap.fromTo("#carta", {opacity: 0}, {opacity: 1, duration: 0.2});
            Car = 0;
        }
    }


    //indifferenziata

    lista = document.getElementById("elenco4");

    voci = lista.getElementsByTagName("li");

    n = voci.length;

    for (i = 0; i < voci.length; i++) 
    {
        x = lista.getElementsByTagName("li")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) 
        {
            voci[i].style.display = "";
            MRIC = testo;
        } 
        else 
        {
            voci[i].style.display = "none";
            n = n-1;
        }
    }

    if (n == 0){
        gsap.to("#indifferenziato", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#indifferenziato", {display: "none"});
        }});
        num = num - 1;
        Ind = 1;
    }
    else {
        gsap.set("#indifferenziato", {display: ""});
        if (Ind == 1){
            gsap.fromTo("#indifferenziato", {opacity: 0}, {opacity: 1, duration: 0.2});
            Ind = 0;
        }
    }


    //Organico

    lista = document.getElementById("elenco5");

    voci = lista.getElementsByTagName("li");

    n = voci.length;

    for (i = 0; i < voci.length; i++) 
    {
        x = lista.getElementsByTagName("li")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) 
        {
            voci[i].style.display = "";
            MRIC = testo;

        } 
        else 
        {
            voci[i].style.display = "none";
            n = n-1;
        }
    }

    if (n == 0){
        gsap.to("#organico", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#organico", {display: "none"});
        }});
        num = num - 1;
        Org = 1;
    }
    else {
        gsap.set("#organico", {display: ""});
        if (Org == 1){
            gsap.fromTo("#organico", {opacity: 0}, {opacity: 1, duration: 0.2});
            Org = 0;
        }
    }


    if (num == 0){
        gsap.set("#Err", {display: ""});
        if (E == 1){
            gsap.fromTo("#Err", {opacity: 0}, {opacity: 1, duration: 0.2});
            E = 0;
        }
    }
    else {
        gsap.to("#Err", {opacity: 0, duration: 0.2, onComplete: function() {
            gsap.set("#Err", {display: "none"});
        }});
        E = 1;
    }


    if (num == 0 || filtro == ""){
        document.getElementById("sear").style.top = "210px";
    }
    else {
        document.getElementById("sear").style.backgroundColor = "#303134";
        document.getElementById("sear").style.boxShadow = "0 7px 11px 0 #5a5a5a8c";
        document.getElementById("sear").innerHTML = MRIC;
        document.getElementById("sear").style.top = "160px";
    }

}

function Vsearch()
{
    document.getElementById("Ricerca").value = MRIC;
    searchCod();
    document.getElementById("sear").style.top = "210px";
}

function search()
{
    BarraR = 1;
    document.getElementById("backsearch").style.width = "auto";
    document.getElementById("backsearch").style.right = "20px";
    document.getElementById("Canc").style.display = "";
    document.getElementById("Canc").style.right = "30px";
    document.getElementById("Ricerca").style.display = "";
    document.getElementById("lente").style.display = "none";
    document.getElementById("sear").style.display = "";
    document.getElementById("sear").style.backgroundColor = "transparent";
    document.getElementById("sear").style.boxShadow = "0 0 0 0";

    gsap.to("#backphoto", {opacity: 0, duration: 0.1, onComplete: function() {
        gsap.set("#backphoto", {display: "none"});
    }});

    gsap.to("#backdoc", {opacity: 0, duration: 0.1, onComplete: function() {
        gsap.set("#backdoc", {display: "none"});
    }});

    gsap.to("#doc", {opacity: 0, duration: 0.1, onComplete: function() {
        gsap.set("doc", {display: "none"});
    }});
}

function canc()
{
    if(click == 0)
    {
        document.getElementById("Ricerca").value = "";
        searchCod();
        click = 1;
    }
    else 
    {
        document.getElementById("backsearch").style.right = "90%";
        document.getElementById("Canc").style.display = "none";
        document.getElementById("Ricerca").style.display = "none";
        document.getElementById("lente").style.display = "";
        document.getElementById("sear").style.display = "none";
        click = 1;
        document.getElementById("sear").innerHTML = "";

        gsap.set("#backphoto", {display: ""});
        gsap.fromTo("#backphoto", {opacity: 0}, {opacity: 1, duration: 0.6});

        gsap.set("#backdoc", {display: ""});
        gsap.fromTo("#backdoc", {opacity: 0}, {opacity: 1, duration: 0.1});

        gsap.set("#doc", {display: ""});
        gsap.fromTo("#doc", {opacity: 0}, {opacity: 1, duration: 0.4});

        BarraR = 0;
    }

}


//rendere questa funzione per tutte le pagine che all'avvio imposta ad 1 e in base a quale pagina si apre modifica la variabile
function start()
{
    document.getElementById("Err").style.display = "none";
    document.getElementById("sear").style.display = "none";
    document.getElementById("Canc").style.display = "none";
    document.getElementById("Ricerca").style.display = "none";
    
    document.getElementById("backdoc").style.transform = "scale(0.00)";
    document.getElementById("doc").style.display = "none";
    document.getElementById("doc").style.transform = "scale(0.00)";
    document.getElementById("docu").style.display = "none";

    document.getElementById("Mappe").style.display = "none";
}

function not()
{
    gsap.to("#notifica", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#notifica", {display: "none"});
    }});

    document.getElementById("backdoc").style.transform = "scale(1.00)";

    document.getElementById("doc").style.transform = "scale(1.00)";

    if(BarraR == 0)
    {
        document.getElementById("backdoc").style.transition = "0.3s";
        
        gsap.set("#doc", {display: ""});
        gsap.fromTo("#doc", {opacity: 0}, {opacity: 1, duration: 0.5});
    }
}

function Photo()
{
    alert("La modalità foto non è ancora disponibile");
}

function documento()
{
    gsap.set("#docu", {display: ""});
    gsap.fromTo("#docu", {opacity: 0}, {opacity: 1, duration: 0.5});

    document.getElementById("backdoc").style.transform = "scale(0.00)";

    gsap.to("#doc", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#doc", {display: "none"});
    }});
    document.getElementById("doc").style.transform = "scale(0.00)";
}

function documentoc()
{

    document.getElementById("backdoc").style.transform = "scale(1.00)";

    document.getElementById("doc").style.transform = "scale(1.00)";

    if (BarraR == 0){
        document.getElementById("backdoc").style.transition = "0.3s";
        gsap.set("#doc", {display: ""});
        gsap.fromTo("#doc", {opacity: 0}, {opacity: 1, duration: 0.5});
    }

    gsap.to("#docu", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#docu", {display: "none"});
    }});
}



//funzione scorrimento e apertura sezioni

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110)
    {
        if (BarraR == 1){
            document.getElementById("backsearch").style.right = "90%";
            document.getElementById("Canc").style.display = "none";
            document.getElementById("Ricerca").style.display = "none";
            document.getElementById("lente").style.display = "";
            document.getElementById("sear").style.display = "none";
            document.getElementById("sear").innerHTML = "";

            gsap.set("#backphoto", {display: ""});
            gsap.fromTo("#backphoto", {opacity: 0}, {opacity: 1, duration: 0.6});

            gsap.set("#backdoc", {display: ""});
            gsap.fromTo("#backdoc", {opacity: 0}, {opacity: 1, duration: 0.1});

            gsap.set("#doc", {display: ""});
            gsap.fromTo("#doc", {opacity: 0}, {opacity: 1, duration: 0.4});

            BarraR = 0;
        }
    }


    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        document.getElementById("title").style.backgroundColor = "black";
        document.getElementById("title").style.height = "70px";
        document.getElementById("title").style.borderRadius = "0px";
        document.getElementById("logo").style.height = "40px";

        document.getElementById("sezioni").style.top = "68px";
        document.getElementById("sezioni").style.padding = "10px 0";
    } else {
        document.getElementById("title").style.backgroundColor = "#303134";
        document.getElementById("title").style.height = "100px";
        document.getElementById("title").style.borderRadius = "0px 0px 60px 60px";
        document.getElementById("logo").style.height = "70px";

        document.getElementById("sezioni").style.top = "0px";
        document.getElementById("sezioni").style.padding = "0";
    }
}

function sezioni()
{
    if (sez==0){
        document.getElementById("title").style.backgroundColor = "black";
        document.getElementById("title").style.height = "70px";
        document.getElementById("title").style.borderRadius = "0px";
        document.getElementById("logo").style.height = "40px";

        document.getElementById("sezioni").style.top = "68px";
        document.getElementById("sezioni").style.padding = "10px 0";
        
        sez = 1;
    }
    else{
        document.getElementById("title").style.backgroundColor = "#303134";
        document.getElementById("title").style.height = "100px";
        document.getElementById("title").style.borderRadius = "0px 0px 60px 60px";
        document.getElementById("logo").style.height = "70px";

        document.getElementById("sezioni").style.top = "0px";
        document.getElementById("sezioni").style.padding = "0";

        sez = 0;
    }
}

function Mapp()
{
        document.getElementById("title").style.backgroundColor = "#303134";
        document.getElementById("title").style.height = "100px";
        document.getElementById("title").style.borderRadius = "0px 0px 60px 60px";
        document.getElementById("logo").style.height = "70px";

        document.getElementById("sezioni").style.top = "0px";
        document.getElementById("sezioni").style.padding = "0";


    document.getElementById("RicercaM").style.display = "none";
    gsap.to("#Lente", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#Lente", {display: "none"});
    }});

    gsap.set("#Mappe", {display: ""});
    gsap.fromTo("#Mappe", {opacity: 0}, {opacity: 1, duration: 0.4});
}


function Lent()
{
        document.getElementById("title").style.backgroundColor = "#303134";
        document.getElementById("title").style.height = "100px";
        document.getElementById("title").style.borderRadius = "0px 0px 60px 60px";
        document.getElementById("logo").style.height = "70px";

        document.getElementById("sezioni").style.top = "0px";
        document.getElementById("sezioni").style.padding = "0";


    gsap.to("#Mappe", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#Mappe", {display: "none"});
    }});

    gsap.set("#Lente", {display: ""});
    gsap.fromTo("#Lente", {opacity: 0}, {opacity: 1, duration: 0.4});
}


//funzioni relative alla mappa

function ConfMapp()
{
    gsap.to("#NotM", {opacity: 0, duration: 0.2, onComplete: function() {
        gsap.set("#NotM", {display: "none"});
    }});

    document.getElementById("RC").style.height = "80px";
    document.getElementById("RC").style.backgroundColor = "#303134";
    document.getElementById("RicercaM").style.display = "";
}

function Risp()
{
    document.getElementById("Risposta").style.height = "30px";
}
