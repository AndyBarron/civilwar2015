// TODO make this not totally crappy
// TODO make this use JSON
// TODO seriously
define(
  ['engine/graphics'],
  function(graphics){
    function LoadNPCs(NPCArray, xmlFile){

    xmlDoc = loadXMLDoc(xmlFile);
 
    var name = xmlDoc.getElementsByTagName("name");
    //console.log(name[0].childNodes[0].nodeValue);
    var x = xmlDoc.getElementsByTagName("xpos");
    //console.log(x[0].childNodes[0].nodeValue);
    var y = xmlDoc.getElementsByTagName("ypos");
    //console.log(y[0].childNodes[0].nodeValue); 
    var texture1 = xmlDoc.getElementsByTagName("main_texture");
    //console.log(texture1[0].childNodes[0].nodeValue);
    var texture2 = xmlDoc.getElementsByTagName("interact_texture");
    //console.log(texture2[0].childNodes[0].nodeValue);
    var scale = xmlDoc.getElementsByTagName("scale");
    var XMLdialogue = xmlDoc.getElementsByTagName("dialogue");


for(var i = 0; i < xmlDoc.getElementsByTagName("NPC").length;i++){
	
	var textures = [];
	textures.push(graphics.getTexture(texture1[i].childNodes[0].nodeValue));
	textures.push(graphics.getTexture(texture2[i].childNodes[0].nodeValue));
	
	var dialogue = new Object();
	var answer1 = {};
	var answer2 = {};
	
	for(var j = 0; j < XMLdialogue.length; j++){
		
		try{
		dialogue[XMLdialogue[i].childNodes[j].nodeName] = XMLdialogue[i].childNodes[j].childNodes[0].nodeValue;
		//Makes NPC.dialogue.<name> a choice for dialogue
		//NPC's always start with their <intro> (for now)
		
		answer1[XMLdialogue[i].childNodes[j].nodeName] = XMLdialogue[i].childNodes[j].attributes.getNamedItem("answer1").value;
		
		answer2[XMLdialogue[i].childNodes[j].nodeName] = XMLdialogue[i].childNodes[j].attributes.getNamedItem("answer2").value;

		
		}catch(e){}
	}
	
	 

	var NPC = {	name:name[i].childNodes[0].nodeValue, 
				x:x[i].childNodes[0].nodeValue, 
				y:y[i].childNodes[0].nodeValue, 
				texture:textures,
				scale:scale[i].childNodes[0].nodeValue,
				dialogue:dialogue,
				answer1: answer1,
				answer2: answer2
				};

	NPCArray.push(NPC);

	}
}

//helper functions

function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // ew, code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
}

function loadXMLString(txt) 
{
if (window.DOMParser)
  {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
  }
else // ew, code for IE
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt); 
  }
return xmlDoc;
}

  return LoadNPCs;
});