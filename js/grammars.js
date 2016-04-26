exports.grammars = {

    cyril: {
        origin : ["// This code was written by a computer.\n\n#patternroot#"],
        patternroot : ["#rotation##background#\n\n#process#\n\n#stroke##colorselect#\n#transforms#\n#geom#",
                       "#rotation##background#\n\n#process#\n\n#stroke##colorselect#\n\n#loop#",
                       "#rotation##background#\n\n#process#\n\n#stroke##colorselect#\n\n#tile#"],
        loop : ["#loopcount#\n#transforms#\n#geom#\nend"],
        loopcount : ["do #numrand# times"],
        tile : ["tile #nummed##audio#, #nummed##audio#, #nummed##audio#\n#transforms#\n#tilegeom#\nend"],
        rotation : ["", "rotate \n\n", "rotate #numlarge# \n\n"],
        background : ["background #color#"],
        process : ["", "", "", "", "", "fxP #numlarge##audio#", "fxK #numrand##audio#", "fxNW"],
        stroke: ["noFill\nstroke #nummed##audio#\n\n", ""],
        colorselect : ["color #color#"],
        color : ["#digit1##digit2##digit2#, #digit1##digit2##digit2#, #digit1##digit2##digit2#",
                 "#digit1##digit2##digit2##audiomultiply#, #digit1##digit2##digit2##audiomultiply#, #digit1##digit2##digit2##audiomultiply#",
                 "#colorfromlist#"],
        colorfromlist : ["white", "gray", "black", "red", "green", "blue", "cyan", "magenta", "yellow", "aliceBlue", "antiqueWhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedAlmond", "blueViolet", "burlyWood", "cadetBlue", "chartreuse", "chocolate", "coral", "cornflowerBlue", "cornsilk", "crimson", "darkBlue", "darkCyan", "darkGoldenRod", "darkGray", "darkGrey", "darkGreen", "darkKhaki", "darkMagenta", "darkOliveGreen", "darkorange", "darkOrchid", "darkRed", "darkSalmon", "darkSeaGreen", "darkSlateBlue", "darkSlateGray", "darkSlateGrey", "darkTurquoise", "darkViolet", "deepPink", "deepSkyBlue", "dimGray", "dodgerBlue", "fireBrick", "floralWhite", "forestGreen", "fuchsia", "gainsboro", "ghostWhite", "gold", "goldenRod", "grey", "greenYellow", "honeyDew", "hotPink", "indianRed", "indigo", "ivory", "khaki", "lavender", "lavenderBlush", "lawnGreen", "lemonChiffon", "lightBlue", "lightCoral", "lightCyan", "lightGoldenRodYellow", "lightGray", "lightGrey", "lightGreen", "lightPink", "lightSalmon", "lightSeaGreen", "lightSkyBlue", "lightSlateGray", "lightSlateGrey", "lightSteelBlue", "lightYellow", "lime", "limeGreen", "linen", "maroon", "mediumAquaMarine", "mediumBlue", "mediumOrchid", "mediumPurple", "mediumSeaGreen", "mediumSlateBlue", "mediumSpringGreen", "mediumTurquoise", "mediumVioletRed", "midnightBlue", "mintCream", "mistyRose", "moccasin", "navajoWhite", "navy", "oldLace", "olive", "oliveDrab", "orange", "orangeRed", "orchid", "paleGoldenRod", "paleGreen", "paleTurquoise", "paleVioletRed", "papayaWhip", "peachPuff", "peru", "pink", "plum", "powderBlue", "purple", "rosyBrown", "royalBlue", "salmon", "sandyBrown", "seaGreen", "seaShell", "sienna", "silver", "skyBlue", "slateBlue", "slateGray", "slateGrey", "snow", "springGreen", "steelBlue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "whiteSmoke", "yellowGreen"],
        digit1 : ["0","1","2"],
        digit2 : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        transforms : ["scale #nummed##audio#", "rotate #neg##numlarge##audio#", "move #neg##numsmall##audio#"],
        numtiny : ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"],
        numsmall : ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        nummed : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        numlarge : ["50", "60", "70", "100", "120", "140", "160", "200", "220", "500"],
        numrand : ["1", "2", "3", "4", "5", "10", "20", "50", "100"],
        threedigits : ["#nummed##nummed##nummed#"],
        fourdigits : ["#nummed##nummed##nummed##nummed#"],
        numrand : ["1", "2", "3", "4", "5", "10", "20", "50", "100"],
        numwave : ["#threedigits#", "#fourdigits#"],
        neg : ["", "-"],
        audio : ["", " + (#nummed# * #randaudio#)", " + (#nummed# * KICK)", " + (#nummed# * SNARE)", " + (#nummed# * HIHAT)",
                 " + (#nummed# * wave(#numwave#))"],
        audiomultiply : ["", " * #randaudio#", " * KICK", " * SNARE", " * HIHAT"],
        randaudio: ["fft(#fft#)"],
        fft: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        geom: ["box #nummed#", "box #nummed#, #nummed#, #nummed#", "peg #nummed#", "sphere #nummed#"],
        tilegeom: ["box #numtiny# + (#numtiny##audiomultiply#)", "box #numtiny# + (#numtiny##audiomultiply#), #numtiny# + (#numtiny##audiomultiply#), #numtiny# + (#numtiny##audiomultiply#)", "peg #numtiny# + (#numtiny##audiomultiply#)", "sphere #numtiny# + (#numtiny##audiomultiply#)"]
    },
}
