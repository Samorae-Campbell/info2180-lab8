{"filter":false,"title":"world.js","tooltip":"/world.js","undoManager":{"mark":44,"position":44,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":["window.onload=function(){","    $('term').value = \" Enter Country Here\";","    $(\"lookup\").onclick = search;","    //$(\"lookup\").onmouseover = show;","}","","function show(){","    var term = $('term').value;","    alert(term);","}","","function search(){","    ","    var term = $('term').value;","    ","    /*if (term == \"\"){","        term = \"asd\";","    }*/","    if ($('all').checked){","       var all = \"true\";","    }","    ","    if ($('xml').checked){","        var xml = \"true\";","    }","    //alert($('all').value);","    //alert(term);","// send a request to checking.php","/*new Ajax.Request(\"https://lab8-samorae101.c9.io/world.php?term=\"+term, {","  parameters : {term: term},","  onSuccess : successFunction,","  method : \"get\"","});"," ","}"," ","function successFunction(dataPackage){","\t//alert(\"meh...\");","   //alert(dataPackage.responseText);","   $('result').innerHTML=dataPackage.responseText","}*/",""," new Ajax.Updater(","    \"result\",","    \"https://lab8-samorae101.c9.io/world.php\",","    {","      parameters : {term: term, all: all, xml: xml},","      method: \"get\"","    }","  );","  ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":31},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":11},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"remove","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":5},"end":{"row":45,"column":44},"action":"remove","lines":["https://lab8-samorae101.c9.io/world.php"]},{"start":{"row":45,"column":5},"end":{"row":45,"column":68},"action":"insert","lines":["https://info2180-lab8-samorae101-1.c9.io/world.php?term=jamaica"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":67},"end":{"row":45,"column":68},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":66},"end":{"row":45,"column":67},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":65},"end":{"row":45,"column":66},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":64},"end":{"row":45,"column":65},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":63},"end":{"row":45,"column":64},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":62},"end":{"row":45,"column":63},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":61},"end":{"row":45,"column":62},"action":"remove","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":60},"end":{"row":45,"column":61},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":59},"end":{"row":45,"column":60},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":58},"end":{"row":45,"column":59},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":57},"end":{"row":45,"column":58},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":56},"end":{"row":45,"column":57},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":55},"end":{"row":45,"column":56},"action":"remove","lines":["?"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":5},"end":{"row":45,"column":46},"action":"remove","lines":["https://info2180-lab8-samorae101-1.c9.io/"]}]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":45,"column":5},"end":{"row":45,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7476,"mode":"ace/mode/javascript"}},"timestamp":1416665369682,"hash":"68b1cd746f37c9cf759dce864eca6df6caf12ecd"}