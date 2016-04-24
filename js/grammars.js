exports.grammars = {

    basic: {
        origin : ["// This code was written by a computer.\n\n#pattern#"],
        pattern : ["#rotation##background#\n#process#\n\n#colorselect#\n#transforms#\n#geom#"],
        rotation : ["", "rotate \n\n", "rotate #numlarge# \n\n"],
        background : ["background #color#"],
        process : ["fxP #numlarge#", "fxK #numrand#", "fxNW"],
        colorselect : ["color #color#"],
        color : ["black", "red", "green", "blue", "yellow", "magenta", "cyan"],
        transforms : ["scale #nummed#", "rotate #neg##numlarge#", "move #neg##numsmall#"],
        numsmall : ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        nummed : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        numlarge : ["50", "60", "70", "100", "120", "140", "160", "200", "220", "500"],
        numrand : ["1", "2", "3", "4", "5", "10", "20", "50", "100"],
        neg : ["", "-"],
        geom: ["box #nummed#", "box #nummed#, #nummed#, #nummed#", "peg #nummed#", "sphere #nummed#"]
    },

    complex: {
        origin : ["// This code was written by a computer.\n\n#pattern#"],
        pattern : ["#rotation##background#\n#process#\n\n#colorselect#\n#transforms#\n#geom#"],
        rotation : ["", "rotate \n\n", "rotate #numlarge# \n\n"],
        background : ["background #color#"],
        process : ["fxP #numlarge##audio#", "fxK #numrand##audio#", "fxNW"],
        colorselect : ["color #color#"],
        color : ["black", "red", "green", "blue", "yellow", "magenta", "cyan"],
        transforms : ["scale #nummed##audio#", "rotate #neg##numlarge##audio#", "move #neg##numsmall##audio#"],
        numsmall : ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        nummed : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        numlarge : ["50", "60", "70", "100", "120", "140", "160", "200", "220", "500"],
        numrand : ["1", "2", "3", "4", "5", "10", "20", "50", "100"],
        neg : ["", "-"],
        audio : ["", " * #randaudio#"],
        randaudio: ["fft(#fft#)"],
        fft: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        geom: ["box #nummed#", "box #nummed#, #nummed#, #nummed#", "peg #nummed#", "sphere #nummed#"]
    },

    ludicrous: {
        origin : ["This will be a ludicrous pattern."],
    }
}
