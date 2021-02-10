var notesArray = ['c2','d2','e2','f2','g2','b2','c3','d3','e3','f3','g3','b3','c4','d4','e4','f4','g4','b4','c5','d5','e5','f5','g5','b5',]
var docasnarray = ['c2','d2']
var c2='c2'

var c2 = new Audio("piano/448547__tedagame__c2.ogg")
var d2 = new Audio("piano/448607__tedagame__d2.ogg")
var e2 = new Audio("piano/448615__tedagame__e2.ogg")
var f2 = new Audio("piano/448588__tedagame__f2.ogg")
var g2 = new Audio("piano/448558__tedagame__g2.ogg")
var a2 = new Audio("piano/448563__tedagame__a2.ogg")
var b2 = new Audio("piano/448569__tedagame__b2.ogg")

var c3 = new Audio("piano/448546__tedagame__c3.ogg")
var d3 = new Audio("piano/448608__tedagame__d3.ogg")
var e3 = new Audio("piano/448614__tedagame__e3.ogg")
var f3 = new Audio("piano/448589__tedagame__f3.ogg")
var g3 = new Audio("piano/448559__tedagame__g3.ogg")
var a3 = new Audio("piano/448562__tedagame__a3.ogg")
var b3 = new Audio("piano/448568__tedagame__b3.ogg")

var c4 = new Audio("piano/448549__tedagame__c4.ogg")
var d4 = new Audio("piano/448609__tedagame__d4.ogg")
var e4 = new Audio("piano/448613__tedagame__e4.ogg")
var f4 = new Audio("piano/448595__tedagame__f4.ogg")
var g4 = new Audio("piano/448552__tedagame__g4.ogg")
var a4 = new Audio("piano/448561__tedagame__a4.ogg")
var b4 = new Audio("piano/448536__tedagame__b4.ogg")

var c5 = new Audio("piano/448548__tedagame__c5.ogg")
var d5 = new Audio("piano/448619__tedagame__d5.ogg")
var e5 = new Audio("piano/448612__tedagame__e5.ogg")
var f5 = new Audio("piano/448594__tedagame__f5.ogg")
var g5 = new Audio("piano/448553__tedagame__g5.ogg")
var a5 = new Audio("piano/448560__tedagame__a5.ogg")
var b5 = new Audio("piano/448537__tedagame__b5.ogg")


// funkcie
var mute = (param) => {
    console.log(param)
    }
var playAudio = (note) => {
    if(note === 'c2'){
        c2.currentTime=0;
        c2.play()
    }
    if(note === 'd2'){
        d2.currentTime=0;
        d2.play()
    }
    if(note === 'e2'){
        e2.currentTime=0;
        e2.play()
    }
    if(note === 'f2'){
        f2.currentTime=0;
        f2.play()
    }
    if(note === 'g2'){
        g2.currentTime=0;
        g2.play()
    }
    if(note === 'a2'){
        a2.currentTime=0;
        a2.play()
    }
    if(note === 'b2'){
        b2.currentTime=0;
        b2.play()
    }
    if(note === 'c3'){
        c3.currentTime=0;
        c3.play()
    }
    if(note === 'd3'){
        d3.currentTime=0;
        d3.play()
    }
    if(note === 'e3'){
        e3.currentTime=0;
        e3.play()
    }
    if(note === 'f3'){
        f3.currentTime=0;
        f3.play()
    }
    if(note === 'g3'){
        g3.currentTime=0;
        g3.play()
    }
    if(note === 'a3'){
        a3.currentTime=0;
        a3.play()
    }
    if(note === 'b3'){
        b3.currentTime=0;
        b3.play()
    }
    if(note === 'c4'){
        c4.currentTime=0;
        c4.play()
    }
    if(note === 'd4'){
        d4.currentTime=0;
        d4.play()
    }
    if(note === 'e4'){
        e4.currentTime=0;
        e4.play()
    }
    if(note === 'f4'){
        f4.currentTime=0;
        f4.play()
    }
    if(note === 'g4'){
        g4.currentTime=0;
        g4.play()
    }
    if(note === 'a4'){
        a4.currentTime=0;
        a4.play()
    }
    if(note === 'b4'){
        b4.currentTime=0;
        b4.play()
    }
    if(note === 'c5'){
        c5.currentTime=0;
        c5.play()
    }
    if(note === 'd5'){
        d5.currentTime=0;
        d5.play()
    }
    if(note === 'e5'){
        e5.currentTime=0;
        e5.play()
    }
    if(note === 'f5'){
        f5.currentTime=0;
        f5.play()
    }
    if(note === 'g5'){
        g5.currentTime=0;
        g5.play()
    }
    if(note === 'a5'){
        a5.currentTime=0;
        a5.play()
    }
    if(note === 'b5'){
        b5.currentTime=0;
        b5.play()
    }
}






$(document).ready(() => { /// WHITEKEYS
    $(".whitekey1").click(() =>{
        playAudio('c2')
            })
    $(".whitekey2").click(() =>{
        playAudio('d2')
            })  
    $(".whitekey3").click(() =>{
        playAudio('e2')
            })
    $(".whitekey4").click(() =>{
        playAudio('f2')
            })   
    $(".whitekey5").click(() =>{
        playAudio('g2')
            })
    $(".whitekey6").click(() =>{
        playAudio('a2')
            })  
    $(".whitekey7").click(() =>{
        playAudio('b2')
            })  
    $(".whitekey8").click(() =>{
        playAudio('c3')
            })
    $(".whitekey9").click(() =>{
        playAudio('d3')
            })  
    $(".whitekey10").click(() =>{
        playAudio('e3')
            })
    $(".whitekey11").click(() =>{
        playAudio('f3')
            })   
    $(".whitekey12").click(() =>{
        playAudio('g3')
            })
    $(".whitekey13").click(() =>{
        playAudio('a3')
            })  
    $(".whitekey14").click(() =>{
        playAudio('b3')
            })  
    $(".whitekey15").click(() =>{
        playAudio('c4')
            })
    $(".whitekey16").click(() =>{
        playAudio('d4')
            })  
    $(".whitekey17").click(() =>{
        playAudio('e4')
            })
    $(".whitekey18").click(() =>{
        playAudio('f4')
            })   
    $(".whitekey19").click(() =>{
        playAudio('g4')
            })
    $(".whitekey20").click(() =>{
        playAudio('a4')
            })  
    $(".whitekey21").click(() =>{
        playAudio('b4')
            }) 
    $(".whitekey22").click(() =>{
        playAudio('c5')
            })
    $(".whitekey23").click(() =>{
        playAudio('d5')
            })  
    $(".whitekey24").click(() =>{
        playAudio('e5')
            })
    $(".whitekey25").click(() =>{
        playAudio('f5')
            })   
    $(".whitekey26").click(() =>{
        playAudio('g5')
            })
    $(".whitekey27").click(() =>{
        playAudio('a5')
            })  
    $(".whitekey28").click(() =>{
        playAudio('b5')
            })
                
})