var colorSchemes = [['#A60000', '#FF0000', '#BF3030'],['#85A000', '#CCF600', '#A1B92E'],['#006363', '#009999', '#1D7373'],['#06266F', '#1240AB', '#2A4480'],['#330570', '#530FAD', '#4F2982'],['#85004B', '#CD0074', '#992667']];

var changeColors = function() {
    var schemeChoice = Math.floor(Math.random()*colorSchemes.length);
    var background = colorSchemes[schemeChoice][0];
    var main = colorSchemes[schemeChoice][1];
    var coming = colorSchemes[schemeChoice][2];

    $("body").css('background-color', background);
    $("#main-text").css('color', main);
    $("#coming-soon").css('color', coming);
}

changeColors();
