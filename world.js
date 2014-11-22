window.onload=function(){
    $('term').value = " Enter Country Here";
    $("lookup").onclick = search;
    //$("lookup").onmouseover = show;
}

function show(){
    var term = $('term').value;
    alert(term);
}

function search(){
    
    var term = $('term').value;
    
    /*if (term == ""){
        term = "asd";
    }*/
    if ($('all').checked){
       var all = "true";
    }
    
    if ($('xml').checked){
        var xml = "true";
    }
    //alert($('all').value);
    //alert(term);
// send a request to checking.php
/*new Ajax.Request("https://lab8-samorae101.c9.io/world.php?term="+term, {
  parameters : {term: term},
  onSuccess : successFunction,
  method : "get"
});
 
}
 
function successFunction(dataPackage){
	//alert("meh...");
   //alert(dataPackage.responseText);
   $('result').innerHTML=dataPackage.responseText
}*/

 new Ajax.Updater(
    "result",
    "https://lab8-samorae101.c9.io/world.php",
    {
      parameters : {term: term, all: all, xml: xml},
      method: "get"
    }
  );
  
}