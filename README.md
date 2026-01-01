<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para ti ❤️</title>
    <link rel="stylesheet" href="NavStyle.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600&family=Indie+Flower&display=swap" rel="stylesheet">
</head>
<body>

    <audio id="audio-principal" loop><source src="cancion1.mp3" type="audio/mpeg"></audio>
    <audio id="audio-stories" loop><source src="cancion2.mp3" type="audio/mpeg"></audio>
    <audio id="audio-carta" loop><source src="cancion3.mp3" type="audio/mpeg"></audio>

    <div class="aurora-realista"></div>

    <div class="nav-container">
        <button class="menu-toggle" onclick="toggleMenu()">❤️ Menú</button>
        <div class="nav-options" id="nav-options">
            <button onclick="cambiarSeccion('principal')">Inicio 🏠</button>
            <button onclick="cambiarSeccion('stories')">Stories 📸</button>
            <button onclick="cambiarSeccion('carta')">Carta 📜</button>
        </div>
    </div>

    <section id="sec-principal" class="seccion activa">
        <div class="texto-central">
            <h1 class="titulo-principal">Recap 2025</h1>
            <p class="subtitulo">Por más momentos a tu lado</p>
            <p class="fecha-inicio">Desde el 29 de marzo de 2022</p>
        </div>

        <div class="nubes-de-fotos">
            <img src="1.jpg" class="foto-blur p1">
            <img src="2.jpg" class="foto-blur p2">
            <img src="3.jpg" class="foto-blur p3">
            <img src="4.jpg" class="foto-blur p4">
            <img src="5.jpg" class="foto-blur p5">
            <img src="6.jpg" class="foto-blur p6">
            <img src="7.jpg" class="foto-blur p7">
            <img src="8.jpg" class="foto-blur p8">
            <img src="9.jpg" class="foto-blur p9">
            
            <img src="10.jpg" class="foto-blur p2"> 
            <img src="11.jpg" class="foto-blur p4"> 
            <img src="12.jpg" class="foto-blur p6"> 
            <img src="13.jpg" class="foto-blur p8"> 
            <img src="14.jpg" class="foto-blur p1"> 
            <img src="15.jpg" class="foto-blur p3"> 
            <img src="16.jpg" class="foto-blur p5"> 
            <img src="17.jpg" class="foto-blur p7"> 
        </div>
    </section>

    <section id="sec-stories" class="seccion">
        <div class="decoracion-stories">
            <div class="heart-bg h1">❤️</div>
            <div class="heart-bg h2">✨</div>
            <div class="heart-bg h3">❤️</div>
            <div class="heart-bg h4">✨</div>
            <div class="heart-bg h5">❤️</div>
        </div>

        <div class="stories-scroll-container">
            <div class="stories-header"><h2> Gracias por: </h2></div>
            <div class="feed-container">
                
                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="1.jpg" onerror="this.onerror=null; this.src='1.JPG'; this.onerror=function(){this.src='1.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Me acompañas a todas lados</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="2.jpg" onerror="this.onerror=null; this.src='2.JPG'; this.onerror=function(){this.src='2.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Tus sonrisas que me alegran la vida</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="3.jpg" onerror="this.onerror=null; this.src='3.JPG'; this.onerror=function(){this.src='3.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Compatir momentos juntos</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="4.jpg" onerror="this.onerror=null; this.src='4.JPG'; this.onerror=function(){this.src='4.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Entrenar en las buenas y malas</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="5.jpg" onerror="this.onerror=null; this.src='5.JPG'; this.onerror=function(){this.src='5.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Ser parte de mi vida y mi familia</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="7.jpg" onerror="this.onerror=null; this.src='7.JPG'; this.onerror=function(){this.src='7.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Cambiarme como tu maniqui</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="8.jpg" onerror="this.onerror=null; this.src='8.JPG'; this.onerror=function(){this.src='8.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Por acompañarme a los viajes</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="9.jpg" onerror="this.onerror=null; this.src='9.JPG'; this.onerror=function(){this.src='9.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Comvertirte en más que mi novia, sino en mi vida</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="10.jpg" onerror="this.onerror=null; this.src='10.JPG'; this.onerror=function(){this.src='10.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Seguirme en mis ideas locas</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="11.jpg" onerror="this.onerror=null; this.src='11.JPG'; this.onerror=function(){this.src='11.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Por pedirme y empezar la historia</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="12.jpg" onerror="this.onerror=null; this.src='12.JPG'; this.onerror=function(){this.src='12.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Ser parte especial en todo</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="13.jpg" onerror="this.onerror=null; this.src='13.JPG'; this.onerror=function(){this.src='13.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Darme la oportunidad de ser tu familia</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="14.jpg" onerror="this.onerror=null; this.src='14.JPG'; this.onerror=function(){this.src='14.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Los bellos momentos que compartimos</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="15.jpg" onerror="this.onerror=null; this.src='15.JPG'; this.onerror=function(){this.src='15.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Los detalles que tienes conmigo</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="16.jpg" onerror="this.onerror=null; this.src='16.JPG'; this.onerror=function(){this.src='16.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Ir a todos lados conmigo</p></div>
                </div>

                <div class="insta-post">
                    <div class="post-header"><img src="6.jpg" class="avatar"><span class="username">Samy_Carlos.2912</span></div>
                    <img src="17.jpg" onerror="this.onerror=null; this.src='17.JPG'; this.onerror=function(){this.src='17.png'}" class="post-image">
                    <div class="post-footer"><div class="icons">❤️ 💬 ✈️</div><p class="caption">Por un 2026 mejor.</p></div>
                </div>
                
                <div class="espacio-final"></div>
            </div>
        </div>
    </section>
    <section id="sec-carta" class="seccion">
        <div class="decoracion-carta-bg"></div>
        <div class="carta-scroll-container">
            <div class="papel-real">
                <div class="sello">❤️</div>
                <h2 class="saludo-carta">Hola mi vida</h2>
                <div class="contenido-texto">
                    <p>
                        Muchas gracias por este año lleno de aventuras, risas
                        y bellos momentos que compartimos juntos, de verdad
                        no tengo palabras para demostrarte lo tan importante
                        que eres para mi. 
                    </p>
                    <p>
                        Quizas no soy el mejor haciendo detalles o manualidades,
                        pero te prometo dar todo lo mejor de mi para cumplir con
                        la persona que te mereces y más.
                
                    </p>
                    <p>
                        De verdad, gracias por todo y espero tener un 2026 mucho
                        mejor. 
                    </p>
                </div>
                <div class="firma">Firma tu ingeniero,<br> Carlitos ❤️</div>
            </div>
        </div>
    </section>
    <script src="Navidad.js"></script>
</body>
</html>
