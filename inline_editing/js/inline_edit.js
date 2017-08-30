function start() {
    "use strict";
    document.getElementById("input_text").innerHTML = '<div class="start" onclick="changeInput()" alt="Wpisz tekst i naciśnij ENTER">Wprowadź tekst</div>';
    //alert("start");
}

function changeInput() {
    "use strict";
    document.getElementById("input_text").innerHTML = '<input type="text" id="pole_tekstowe" autofocus onkeyup="txtToParagraph(event)" alt="Wpisz tekst i nacisnij ENTER">';
}

function txtToParagraph(event) {
    "use strict";
    var key = event.keyCode,
        txt = "",
        txt_pie = "",
        i = 0;
        
    txt = document.getElementsByTagName("input")[0].value;
             
    if (key === 13) {
        
        if (txt.length <= 27) {
            document.getElementById("input_text").innerHTML = '<p>' + txt + '</p>';
        } else {
            for (i = 0; i <= txt.length; i += 1) {
                txt_pie += txt.charAt(i);
                document.getElementById("input_text").innerHTML = '<div><p>' + txt_pie + '</p></div>';
                if ((i + 1) % 27 === 0) {
                    //alert("jestem w warunku modulo!!!")
                    txt_pie += '<br>';
                }
            }
        }
    }
    
}

window.onload = start;