


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

var c_2 = new Audio("piano/448541__tedagame__c-2.ogg")
var d_2 = new Audio("piano/448600__tedagame__d-2.ogg")
var f_2 = new Audio("piano/448587__tedagame__f-2.ogg")
var g_2 = new Audio("piano/448590__tedagame__g-2.ogg")
var a_2 = new Audio("piano/448571__tedagame__a-2.ogg")
 
var c_3 = new Audio("piano/448538__tedagame__c-3.ogg")
var d_3 = new Audio("piano/448601__tedagame__d-3.ogg")
var f_3 = new Audio("piano/448584__tedagame__f-3.ogg")
var g_3 = new Audio("piano/448593__tedagame__g-3.ogg")
var a_3 = new Audio("piano/448570__tedagame__a-3.ogg")

var c_4 = new Audio("piano/448539__tedagame__c-4.ogg")
var d_4 = new Audio("piano/448602__tedagame__d-4.ogg")
var f_4 = new Audio("piano/448585__tedagame__f-4.ogg")
var g_4 = new Audio("piano/448592__tedagame__g-4.ogg")
var a_4 = new Audio("piano/448577__tedagame__a-4.ogg")

var c_5 = new Audio("piano/448532__tedagame__c-5.ogg")
var d_5 = new Audio("piano/448603__tedagame__d-5.ogg")
var f_5 = new Audio("piano/448582__tedagame__f-5.ogg")
var g_5 = new Audio("piano/448599__tedagame__g-5.ogg")
var a_5 = new Audio("piano/448576__tedagame__a-5.ogg")

var notesArray = [c2,d2,e2,f2,g2,a2,b2,c3,d3,e3,f3,g3,a3,b3,c4,d4,e4,f4,g4,a4,b4,c5,d5,e5,f5,g5,a5,b5,]
var notesArrayBlack = [c_2,d_2,f_2,g_2,a_2,c_3,d_3,f_3,g_3,a_3,c_4,d_4,f_4,g_4,a_4,c_5,d_5,f_5,g_5,a_5]

var x = 0
var y = 0
// funkcie

notesArray.forEach(el => {
    document.querySelectorAll('.key')[x].addEventListener('click',() =>{
        playAudio(el)
        
    })
    x++
});
notesArrayBlack.forEach(el => {
    document.querySelectorAll('.blackkey')[y].addEventListener('click',(e) =>{
        playAudio(el)
        e.stopPropagation()
    })
    y++
});

var playAudio = (note) => {
    
    note.currentTime=0;
    note.play()
    }


 
   


    addEventListener('keyup',(e) => {
        if(e.code === 'KeyQ')playAudio(c2)
        if(e.code === 'KeyW')playAudio(d2)
        if(e.code === 'KeyE')playAudio(e2)
        if(e.code === 'KeyR')playAudio(f2)
        if(e.code === 'KeyT')playAudio(g2)
        if(e.code === 'KeyY')playAudio(a2)
        if(e.code === 'KeyU')playAudio(b2)
        if(e.code === 'KeyI')playAudio(c3)
        if(e.code === 'KeyO')playAudio(d3)
        if(e.code === 'KeyP')playAudio(e3)
        if(e.code === 'KeyA')playAudio(f3)
        if(e.code === 'KeyS')playAudio(g3)
        if(e.code === 'KeyD')playAudio(a3)
        if(e.code === 'KeyF')playAudio(b3)
        if(e.code === 'KeyG')playAudio(c4)
        if(e.code === 'KeyH')playAudio(d4)
        if(e.code === 'KeyJ')playAudio(e4)
        if(e.code === 'KeyK')playAudio(f4)
        if(e.code === 'KeyL')playAudio(g4)
        if(e.code === 'KeyZ')playAudio(a4)
        if(e.code === 'KeyX')playAudio(b4)
        if(e.code === 'KeyC')playAudio(c5)
        if(e.code === 'KeyV')playAudio(d5)
        if(e.code === 'KeyB')playAudio(e5)
        if(e.code === 'KeyN')playAudio(f5)
        if(e.code === 'KeyM')playAudio(g5)
        if(e.code === 'Comma')playAudio(a5)
        if(e.code === 'Period')playAudio(b5)

        if(e.code === 'Backquote')playAudio(c_2)
        if(e.code === 'Digit1')playAudio(d_2)
        if(e.code === 'Digit2')playAudio(f_2)
        if(e.code === 'Digit3')playAudio(g_2)
        if(e.code === 'Digit4')playAudio(a_2)
        if(e.code === 'Digit5')playAudio(c_3)
        if(e.code === 'Digit6')playAudio(d_3)
        if(e.code === 'Digit7')playAudio(f_3)
        if(e.code === 'Digit8')playAudio(g_3)
        if(e.code === 'Digit9')playAudio(a_3)
        if(e.code === 'Digit0')playAudio(c_4)
        if(e.code === 'Minus')playAudio(d_4)
        if(e.code === 'Equal')playAudio(f_4)
        if(e.code === 'BracketRight')playAudio(g_4)
        if(e.code === 'BracketLeft')playAudio(a_4)
        if(e.code === 'Semicolon')playAudio(c_5)
        if(e.code === 'Quote')playAudio(d_5)
        if(e.code === 'Backslash')playAudio(f_5)
        if(e.code === 'NumpadDivide')playAudio(g_5)
        if(e.code === 'NumpadMultiply')playAudio(a_5)
        console.log(e.code)
    })
    