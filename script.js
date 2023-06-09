<html>


    <head>
        <title>
            WeBin
        </title>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Staatliches">

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

        <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>

    </head>


    <body style="margin:0; background-color: #dfdfdf;" onload="start()"></body>

        <div id="body">

            <div class="all" id="all">


                <!--

                    Logo


                    Colore sfondo alternativo: #202124

                -->


                <div id="sezioni">

                    <button type="button0" class="button0" onclick="Lent()"><i class="fa-solid fa-magnifying-glass fa-lg" style="color: #f5f5f5;  margin: 0 10px "></i></button>
                    <button type="button0" class="button0" onclick="Mapp()"><i class="fa-solid fa-location-dot fa-lg" style="color: #f5f5f5; margin: 0 10px "></i></button>

                </div>

                <div id="title" onclick="sezioni()">

                    <img id="logo" style="padding:15px" src="Photos/LOGO.png">

                </div>




                <!--

                    Tutta la sezione di ricerca

                -->


                    <div id="Lente">

                        <!--

                            Barra di ricerca

                            inserire su tutto classe shadow per l'ombra

                        -->

                        <div class="searchM" id="sear" onclick="Vsearch()"></div>

                        <div id="backphoto"></div>

                        <div id="backdoc"></div>

                        <div id="backsearch"></div>

                        <button type="button3" class="button3" id="backphoto" onclick="Photo()">
                            <i class="fa-solid fa-camera fa-2xl" style="color: #dfdfdf;"></i>
                        </button>

                        <button type="button4" class="button4" id="doc" onclick="documento()">
                            <i class="fa-solid fa-envelope fa-2xl" style="color: #dfdfdf;"></i>
                        </button>

                        <input type="text" class="search" onkeyup="searchCod()" placeholder="Cerca" id="Ricerca">

                        <button type="button1" class="button1" id="lente" onclick="search()">
                            <i class="fa-solid fa-magnifying-glass fa-2xl" style="color: #dfdfdf;"></i>
                        </button>

                        <button type="button2" class="button2" id="Canc" onclick="canc()">
                            <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #dfdfdf;"></i>
                        </button>

                        


                        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                        <!--

                            Messaggio di avviso

                        -->


                        
                        <div id="notifica" class="notifica">
                            Si avvisa che gli elenchi non sono ancora completi
                            <br><br>
                            è consigliabile consultare le regole del proprio comune 
                            per sapere dove buttare gli oggetti classificati come "speciali"
                            <br>
                            <br>
                            <div id="notificaC" class="notificaC" onclick="not()">
                                Conferma
                            </div>
                        </div>

                        <div id="docu" class="notifica">
                            <div id="lax" onclick="documentoc()">
                                <i class="fa-solid fa-xmark fa-lg" style="color: #dfdfdf"></i>
                            </div>
                            <br>
                            gli elenchi non sono ancora completi
                            <br> 
                            ma puoi dare il tuo aiuto inviando ciò che sai 
                            (oggetti e dove vanno buttati) alla mail sottostante

                            <br>
                            <br>

                            <div id="invia" class="notificaC">
                                <a href= "mailto:we.bin.help@gmail.com">
                                    <font color="white">
                                        Invia
                                    </font>
                                </a>
                            </div>

                        </div>

                        <!--

                            Bidoni

                        -->

                        <br>
                        <div class="flex-container">

                            <div class="column" id="plastica">

                                <div class="content-container shadow"> 
                                    Plastica 
                                    <br>
                                    <img src="Photos/Plastica.png" height="60%">
                                </div>

                                <div class="content-containerE shadow"> 
                                    <ul id="elenco1">
                                        <li>Bottiglie di plastica</li>
                                        <li>Flaconi di detersivi</li>
                                        <li>Piatti di plastica</li>
                                        <li>Bicchieri di plastica</li>
                                        <li>Busta di plastica</li>
                                        <li>Busta per pasta</li>
                                        <li>Busta per riso</li>
                                        <li>Busta per biscotti</li>
                                        <li>Imballaggi in plastica</li>
                                        <li>Imballaggi per capi d'abbigliamento</li>
                                        <li>Rete per la frutta e verdura</li>
                                        <li>Confezione per sottilette</li>
                                        <li>Vachetta per salumi</li>
                                        <li>Vaschetta per formaggi</li>
                                        <li>Vaschetta del gelato</li>
                                        <li>Vassoio per dolcini</li>
                                        <li>Blister trasparenti preformati</li>
                                        <li>Vaschetta portauova</li>
                                        <li>Vaschette per ortofrutta</li>
                                        <li>Bustina per merendina</li>
                                        <li>Cellofan</li>
                                        <li>Imballaggi trasparenti</li>
                                        <li>Vasetti creme</li>
                                        <li>Vasetti salse</li>
                                        <li>Lattine</li>
                                    </ul>
                                </div>

                            </div>

                            <div class="column" id="vetro">

                                <div class="content-container shadow">
                                    Vetro 
                                    <br>
                                    <img src="Photos/Vetro.png" height="60%">
                                </div>

                                <div class="content-containerE shadow">
                                    <ul id="elenco2">
                                        <li>Barattoli di vetro</li>
                                        <li>Bottigliette di vetro</li>
                                        <li>Bottiglie di vetro</li>
                                        <li>Vasetti di vetro</li>
                                    </ul>
                                </div>

                            </div>

                            <div class="column" id="carta">

                                <div class="content-container shadow">
                                    Carta 
                                    <br>
                                    <img src="Photos/Carta.png" height="60%">
                                </div>

                                <div class="content-containerE shadow"> 
                                    <ul id="elenco3">
                                        <li>Carta (nell'indifferenziato se sporco)</li>
                                        <li>Cartone della pizza (nell'indifferenziato se sporco)</li>
                                        <li>Quaderni</li>
                                        <li>Giornali</li>
                                        <li>Libri</li>
                                        <li>Scatole delle scape</li>
                                        <li>Scatole per alimenti</li>
                                        <li>Carta da pacchi</li>
                                        <li>Confezioni in tetrapack</li>
                                        <li>Cartoni per bevande</li>
                                        <li>Fogli di carta</li>
                                        <li>Scatole</li>
                                    </ul>
                                </div>

                            </div>

                            <div class="column" id="indifferenziato">

                                <div class="content-container shadow">
                                    Indifferenziato
                                    <br>
                                    <img src="Photos/Indifferenziato.png" height="60%">
                                </div>

                                <div class="content-containerE shadow"> 
                                    <ul id="elenco4">
                                        <li>Gomma</li>
                                        <li>Stracci</li>
                                        <li>Ceramica</li>
                                        <li>Porcellana</li>
                                        <li>Cristallo</li>
                                        <li>Terracotta</li>
                                        <li>Carta Carbone</li>
                                        <li>Carta Oleata</li>
                                        <li>Pannolini e Assorbenti</li>
                                        <li>CD e DVD</li>
                                        <li>Penne e Pennarelli</li>
                                        <li>Sacchi per aspirapolvere</li>
                                        <li>Spazzolini</li>
                                        <li>Rasoi in plastica</li>
                                        <li>Collant</li>
                                        <li>Posate in plastica</li>
                                        <li>Reuel</li>
                                        <li>Lettiere per animali domestici</li>
                                        <li>Magliette</li>
                                    </ul>
                                </div>
                            
                            </div>

                            <div class="column" id="organico">
                                
                                <div class="content-container shadow"> 
                                    Organico 
                                    <br>
                                    <img src="Photos/Organico.png" height="60%">
                                </div>

                                <div class="content-containerE shadow">
                                    <ul id="elenco5">
                                        <li>Avanzi di cibo</li>
                                        <li>Caffè</li>
                                        <li>Carta da cucina bianca</li>
                                        <li>Tovaglioli di carta</li>
                                        <li>Fiori secchi e recisi</li>
                                        <li>Filtri di the, tisane</li>
                                        <li>Pezzetti di legno, paglia, segatura, cenere di legna spenta</li>
                                        <li>Piatti, bicchieri, posate biodegradabili e compostabili</li>
                                        <li>Sfalci d'erba</li>
                                        <li>Potature siepi</li>
                                        <li>Ramaglie</li>
                                        <li>Foglie</li>
                                        <li>Terriccio</li>
                                        <li>Cortecce</li>
                                        <li>Piante domestiche</li>
                                        <li>Fazzoletti</li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>


                        <!--

                            Errore

                        -->

                        <div class="Errore" id="Err">
                            Nessun risultato
                        </div>


                        <br><br><br><br><br><br>

                    </div>
                
                
                <!--


                    tutta la sezione per la mappa


                -->


                    <div id="Mappe">

                        <br><br><br><br><br><br><br>

                        <div id="RC" class="RicercaMap">

                            <div id="NotM" class="notificaM">
                                Ad ora la mappa potrebbe essere vuota
                                <br><br>
                                A breve verranno introdotti in questa schermata i punti di raccolta per ogni comune
                                <br><br>
                                (Questa schermata è ancora una beta)
                                <br>
                                <br>
                                <div id="NotMc" class="notificaC" onclick="ConfMapp()">
                                    Conferma
                                </div>
                            </div>

                            <input type="text" class="searchMAP" onkeyup="Risp()" placeholder="Cerca" id="RicercaM">

                        </div>  
                        <div id="Risposta" class="RispMAP">
                        </div>  

                        <br>
                        <br>
                        
                        <div class="SMap">

                            <br>

                            trova i punti di raccolta
                            <br> più vicini a te

                            <br><br>

                            <div class="google-maps">
                                <iframe src="https://www.google.com/maps/embed?........." frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>

                        </div>

                    </div>



            </div>

        </div>

    </body>

</html>
