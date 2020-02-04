<template>
  <div class="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div id="toptriangle">
    </div>
    <div class="navbar" id="navbar">   
        <div class="dropdown">
            <a id="vuenative" href="#"><button class="dropbtn"><i class="fa fa-fw fa-gamepad"></i>Upcoming Games</button></a>
        </div>
        <div class="dropdown">
            <button class="dropbtn"><i class="fa fa-fw fa-mobile-phone"></i>Development</button>
            <div class="dropdown-content">
                <a id="information" target="_blank" href="https://play.nativescript.org/">NativeScript Playground</a>
                <a id="statistics" target="_blank" href="https://trello.com/b/">Trello Board</a>
                <a id="statistics" target="_blank" href="https://nativescript-vue.org/en/docs/introduction/">Documentation</a>
            </div>
        </div>
        <div class="dropdown">
            <a target="_blank" href="https://nativescript-vue.org/en/docs/introduction"><button class="dropbtn" action="none"><i class="fa fa-fw fa-connectdevelop"></i>IGDB</button></a>
            <div class="dropdown-content">
                <a target="_blank" href="https://api-docs.igdb.com/#about">IGDB API Docs</a>
                <a target="_blank" href="https://github.com/igdb/node-apicalypse">Apicalypse GitHub</a>
            </div>
        </div>
    </div>
    <div class="body-wrap visibility-main">
        <h1>LaunchZone</h1>
        <p>Placeholder for contents to be loaded regarding new game releases.</p>
        <ul>
            <li>API key - <b>f8xxxxxxxxxxxxxxxxxxxxxxxxxxxx2d</b></li>
            <p>To be used when making requests from the IGDB database, see <a target="_blank" href="https://api-docs.igdb.com/#about">IGDB link</a> above for more.</p>
        </ul>
    </div>
  </div>
</template>

<style lang="scss">
    html, body, .home{
        margin:0;
        padding:0;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
    }
    .body-wrap{
        display:block;
        margin:0 auto;
        width:100%;
        max-width: 920px !important;
        padding: 20px;
        margin-top:175px;
        position: relative;
        min-height:750px;
        border-radius:10px;
        /* :) */
    }
    
    @media only screen and (max-width:920px){
        .body-wrap{border-radius:0px;}}
    .visibility-main{
        color:#353535;
        text-shadow: 0px 5px 5px #35353535;
        text-align:center;
        background-color:#ffffffaa;
        box-shadow: 0px 5px 10px #00000080;
    }
    .visibility-main ul{
        width:60%;
        margin: auto;
        text-align:left;
    }
    .visibility-main > * a{
        text-decoration: underline;
        color:inherit;

    }
    .fa{
        font-size: 75px !important;
        text-shadow: 2px 5px 5px #00000050;
        display:block !important;
        margin:0 auto;
        margin-bottom: 20px;
        transition-duration: 0.35s;
    }
    body{
        background-color:#353535;
    }
    #toptriangle{
        background-image:linear-gradient(50deg,#fa0,#f60);
        box-shadow: inset 0px 0px 50px #353535, 0px 0px 50px #00000050;
        position: absolute;
        min-width: 400vw;
        min-height:400vh;
        left:-250%;
        top:-250%;
        transform: rotate(-45deg) rotateY(40deg);
        transition-duration: 0.35s;
        animation: leftin 1.75s 1;
    }
    @keyframes leftin {
        0%{left: -350%;}
        100%{left: -250%;}
        
    }
    .navbar {
        top:0;
        position:fixed;
        z-index: 10;
        width: 100%;
        background-color: #353535;
        overflow:visible;
        text-align: center;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .dropbtn {
        background-color:#ff8900;
        color: #353535;
        padding: 16px;
        width:200px;
        font-size: 16px;
        border: none;
        transition-duration: 0.25s;
    }
    .dropdown {
        position: relative;
        text-align: center;
        display: inline-block;
        margin:0;
        padding:0;
        z-index: 1001 !important;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        right:0px;
        left:0px;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1000 !important;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #ddd;}
    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {background-color: #ff6f00; color:white;}
    .dropdown:hover .fa {color: white;}
    @media only screen and (max-width:600px){
        .fa{
            display: none !important;
        }
        .dropdown{
            display: block;
            width: max-content;
            margin: 0 auto;
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }
    }
</style>
<script>

</script>