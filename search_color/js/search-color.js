var table_color_name = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood",
                        "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
                        "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
                        "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite",
                        "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo",
                        "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
                        "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
                        "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
                        "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
                        "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink",
                        "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna",
                        "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
                        "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen" ];

function filterItems(query) {
    'use strict';
    return table_color_name.filter(function(el) { 
        return el.toUpperCase().indexOf( query.toUpperCase() ) > -1; 
    });
}

function scFunction() {
    'use strict';

    var filtr, input, color, color_name, ul, li, bingo, zmiana_wybranego_koloru, i;
        
    input = document.getElementById("inputColor");
    filtr = input.value.toUpperCase();
    
    color_name = "";
    color = filterItems(filtr);
        
    for (i = 0; i < color.length; i += 1) {
        color_name += '<li id="' + color[i].toUpperCase() + '" style= background-color:' + color[i] + '>' + color[i] + '</li>';
    }
    
    document.getElementById("lists_color").innerHTML = color_name;
      
    document.getElementById("selected").addEventListener("click", function(event) {
	    event.preventDefault();
        bingo = document.getElementById("inputColor").value.toUpperCase();
        
        if ( document.getElementById("lists_color").childNodes.length === 1 ) {
            document.getElementsByTagName('li')[0].style.background = "#00C000";
        } else { 
            for ( i = 0; i < document.getElementById("lists_color").childNodes.length; i+=1 ) {
                if (document.getElementById("lists_color").childNodes[i].id === bingo) {
                    document.getElementsByTagName('li')[i].style.background = "#00C000";
                }
            }
        }
    });
}

function resetSearch() {
    'use strict';
    var list_to_clear = document.getElementById("lists_color");
        
    while (list_to_clear.firstChild) {
        list_to_clear.removeChild(list_to_clear.firstChild);
    }
}