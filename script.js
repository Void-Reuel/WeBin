//variabili

let pages; //pagina aperta


//variabili scorrimento

let BarraR = 0; //indica se la barra di ricerca è aperta

//variabili barra di ricerca

let MRIC; //
let Mris; //
let n; //
let num; //
var input; //
var filtro; //
var lista; //
var voci; //
var x; //
var i; //
var testo; //
let click = 1; //
let Pla = 0; //
let Vet = 0; //
let Car = 0; //
let Ind = 0; //
let Org = 0; //
let E = 0; //
let SezT = 0; //bottone sezioni cliccato





//codice scorrimento

window.onload = function() {

    document.getElementById("SezRicerca").style.background = "#303134";

    var position = document.documentElement.scrollTop || document.body.scrollTop;

    window.onscroll = function() {
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll > position && scroll > 30) {

            //azioni che accadono solamente al momento in cui la parra di ricerca è chiusa
            if (BarraR == 0)
            {

                document.getElementById("sezionitop").style.top = "10px";

                document.getElementById("logotop").style.top = "-90px";

                document.getElementById("SearchB").style.right = "-70px";

            }

            //cio che succede quando si scorre con la barra di ricerca aperta
            if (BarraR == 1)
            {
                document.getElementById("sezionitop").style.top = "-90px";

                document.getElementById("sear").style.top = "0px";
                document.getElementById("spazio").style.height = "80px";

                document.getElementById("search").style.top = "0px";
                document.getElementById("search").style.width = "100%";
                document.getElementById("search").style.borderRadius = "0px";

            }

            document.getElementById("PhotoB").style.right = "-70px";
            document.getElementById("SezB").style.right = "-70px";

        } else {

            if (BarraR == 0){

                document.getElementById("sezionitop").style.top = "-90px";

                document.getElementById("logotop").style.top = "10px";

                document.getElementById("SearchB").style.right = "20px";
                
            }

            if (BarraR == 1)
            {

                document.getElementById("sezionitop").style.top = "-90px";

                document.getElementById("sear").style.top = "10px";

                document.getElementById("search").style.top = "10px";
                document.getElementById("search").style.width = "80%";
                document.getElementById("search").style.borderRadius = "40px";

            }

            document.getElementById("PhotoB").style.right = "20px";
            document.getElementById("SezB").style.right = "20px";

        }
        position = scroll;
    };

};

function SezB()
{
    document.getElementById("sezionitop").style.top = "10px";

    document.getElementById("logotop").style.top = "-90px";

    if (BarraR == 1)
    {

        document.getElementById("search").style.top = "60px";
        document.getElementById("sear").style.top = "60px";

        document.getElementById("spazio").style.height = "130px";
    }

    document.getElementById("SezB").style.right = "-70px";

    SezT = 1;
}




//codice dedicato alla sezione di ricerca bidone

//questo serve per permettere di aprire la barra di ricerca ed utilizzarla
function BarrS()
{

    document.getElementById("SearchB").style.right = "-70px";

    document.getElementById("search").style.top = "10px";
    document.getElementById("sear").style.top = "10px";
    
    document.getElementById("logotop").style.top = "-90px";
    document.getElementById("sezionitop").style.top = "-90px";

    document.getElementById("PhotoB").style.bottom = "20px";
    document.getElementById("SezB").style.bottom = "100px";
    document.getElementById("SezB").style.right = "20px";

    BarraR = 1;

}


//bottone per cancellare
function canc() 
{
    if(click == 0)
    {
        document.getElementById("Ricerca").value = "";
        click = 2;
        searchCod();
    }
    else 
    {
        document.getElementById("search").style.top = "-90px";
        document.getElementById("sear").style.top = "-90px";

        document.getElementById("logotop").style.top = "10px";

        document.getElementById("SearchB").style.right = "20px";

        document.getElementById("PhotoB").style.bottom = "100px";
        document.getElementById("SezB").style.bottom = "180px";

        document.getElementById("search").style.width = "80%";
        document.getElementById("search").style.borderRadius = "40px";

        document.getElementById("sezionitop").style.top = "-90px";

        document.getElementById("spazio").style.height = "80px";

        document.getElementById("SezB").style.right = "20px";

        BarraR = 0;

        click = 1;
    }
}


function Photo()
{
    alert("La modalità foto non è ancora disponibile");
}



function searchCod()
{
    if (click != 2)
    {
        click = 0;
    }

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

    //nessun risultato

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

    //suggerimenti ricerca


        if (num == 0 || filtro == ""){
            document.getElementById("sear").style.top = "10px";
            document.getElementById("spazio").style.height = "80px";
            document.getElementById("SezB").style.right = "20px";
            document.getElementById("sezionitop").style.top = "-90px";
            document.getElementById("search").style.top = "10px";
        }
        else {
            document.getElementById("sear").innerHTML = MRIC;
            document.getElementById("sear").style.top = "70px";
            document.getElementById("spazio").style.height = "130px";
            document.getElementById("SezB").style.right = "20px";
            document.getElementById("sezionitop").style.top = "-90px";
            document.getElementById("search").style.top = "10px";
        }


}


//quando si clicca sul consiglio
function Vsearch()
{
    document.getElementById("Ricerca").value = MRIC;
    searchCod();
    document.getElementById("spazio").style.height = "80px";
    document.getElementById("sear").style.top = "10px";
}
