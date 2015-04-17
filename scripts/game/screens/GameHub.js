define(
  ['./scene', 'game/screens/testMini', 'game/screens/testescape', 'lib/pixi'],
  function(scene, ShipScreen, EscapeScreen, nextscene) {
	
	var famousarray = ["Test", "Jerk"];
	var paperarray = ["0", "Dog", "Salamander"];
	var count = 0;
	var overallcount = 17;
	var papercount = 0;
	var officercount = 0;
    var hubScene = scene('data/scenes/hub.json?blah=blahblah');
	hubScene.music = new Audio('./assets/music/town_music.ogg');
	hubScene.music.loop = true;
	hubScene.music.play();
    hubScene.startEscapeGame = function() { 
	
    };
    hubScene.startShipGame = function() {
      //alert(ShipScreen);
	  if(overallcount > 15){
		
		hubScene.music.pause();
		ShipScreen.music.play();
		this.changeScreen(ShipScreen);

		
	  }

    };
	hubScene.paper1 = function() {
	var obj = "1";

	 var i = paperarray.length;
	 var nocontains = true;
    for (i=0;i<paperarray.length;i++) {
		//console.log(famousarray[i]);
       if (paperarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	papercount++;
	overallcount++;
	paperarray.push(obj);
	console.log("Paper 1 Found");
	hubScene.time();
//console.log(famousarray[i]);
	alert("Old Newspaper " + papercount + "/5 Found!");
}
    };
	hubScene.paper2 = function() {
	var obj = "2";

	 var i = paperarray.length;
	 var nocontains = true;
    for (i=0;i<paperarray.length;i++) {
		//console.log(famousarray[i]);
       if (paperarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	papercount++;
	overallcount++;
	paperarray.push(obj);
	console.log("Paper 2 Found");
	hubScene.time();
//console.log(famousarray[i]);
alert("Old Newspaper " + papercount + "/5 Found!");
}
    };
	hubScene.paper3 = function() {
	var obj = "3";

	 var i = paperarray.length;
	 var nocontains = true;
    for (i=0;i<paperarray.length;i++) {
		//console.log(famousarray[i]);
       if (paperarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	papercount++;
	overallcount++;

	paperarray.push(obj);
	console.log("Paper 3 Found");
	hubScene.time();
//console.log(famousarray[i]);
alert("Old Newspaper " + papercount + "/5 Found!");
}
    };
	hubScene.paper4 = function() {
	var obj = "4";

	 var i = paperarray.length;
	 var nocontains = true;
    for (i=0;i<paperarray.length;i++) {
		//console.log(famousarray[i]);
       if (paperarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	papercount++;
	overallcount++;

	paperarray.push(obj);
	console.log("Paper 4 Found");
	hubScene.time();
//console.log(famousarray[i]);
alert("Old Newspaper " + papercount + "/5 Found!");
}
    };
	hubScene.paper5 = function() {
	var obj = "5";

	 var i = paperarray.length;
	 var nocontains = true;
    for (i=0;i<paperarray.length;i++) {
		//console.log(famousarray[i]);
       if (paperarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	papercount++;
	overallcount++;

	paperarray.push(obj);
	console.log("Paper 5 Found");
	hubScene.time();
//console.log(famousarray[i]);
alert("Old Newspaper " + papercount + "/5 Found!");
}
    };
	hubScene.customer1 = function() {
	var obj = "Customer One";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer One");
	console.log("Soldier 1 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer2 = function() {
	var obj = "Customer Two";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Two");
	console.log("Soldier 2 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer3 = function() {
	var obj = "Customer Three";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Three");
	console.log("Soldier 3 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer4 = function() {
	var obj = "Customer Four";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Four");
	console.log("Soldier 4 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };
	
	hubScene.customer5 = function() {
	var obj = "Customer Five";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Five");
	console.log("Soldier 5 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer6 = function() {
	var obj = "Customer Six";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Six");
	console.log("Soldier 6 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };
	
	hubScene.customer7 = function() {
	var obj = "Customer Seven";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Seven");
	console.log("Soldier 7 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer8 = function() {
	var obj = "Customer Eight";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Eight");
	console.log("Soldier 8 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer9 = function() {
	var obj = "Customer Nine";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Nine");
	console.log("Soldier 9 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };

	hubScene.customer10 = function() {
	var obj = "Customer Ten";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		//console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Ten");
	console.log("Soldier 10 Itentified");
	hubScene.time();
//console.log(famousarray[i]);
alert("Soldier " + count + "/10 Identified!");
}
    };
	
	hubScene.customer11 = function() {
	var obj = "Customer Eleven";

	 var i = famousarray.length;
	 var nocontains = true;
    for (i=0;i<famousarray.length;i++) {
		console.log(famousarray[i]);
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Customer Eleven");
console.log(count);
//console.log(famousarray[i]);
alert("Paper " + count + "/11 Delivered!");
}
    };

//BREAKKKKKKKK
	hubScene.naval1 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Food Two";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	officercount++;
	overallcount++;

	famousarray.push("Food Two");
	console.log("Naval Officer 1 Relayed To");
	hubScene.time();
alert("Naval Officers " + officercount + "/4 Reported To!");
}
    };
hubScene.naval2 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Food Three";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	officercount++;
	overallcount++;

	famousarray.push("Food Three");
	console.log("Naval Officer 2 Relayed To");
	hubScene.time();
alert("Naval Officers " + count + "/4 Reported To!");
}
    };
hubScene.naval3 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Map";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	officercount++;
	famousarray.push("Map");
	console.log("Naval Officer 3 Relayed To");
	hubScene.time();
alert("Naval Officers " + officercount + "/4 Reported To!");
}
};

hubScene.naval4 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Clothes";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	officercount++;
	famousarray.push("Clothes");
	console.log("Naval Officer 4 Relayed To");
	hubScene.time();
alert("Naval Officers " + officercount + "/4 Reported To!");

}
};

hubScene.naval5 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Tree";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	canteencount++;
	famousarray.push("Tree");
	console.log("Naval Officer 5 Relayed To");
	hubScene.time();
alert("Naval Officers " + count + "/5 Reported To!");
}
};

hubScene.newspaper = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Newspaper";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	newspapercount++;
	famousarray.push("Newspaper");
	console.log("Naval Officer 5 Relayed To");
	hubScene.time();
alert("Naval Officers " + count + "/5 Reported To!");

}
};

hubScene.gossip1 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Gossip 1";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	gossipcount++;
	famousarray.push("Gossip 1");
console.log(overallcount);
console.log(famousarray[i]);
alert("You heard about what happened up in the town North. This will help you plan your escape!");
}
};

hubScene.gossip2 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Gossip 2";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	overallcount++;
	gossipcount++;
	famousarray.push("Gossip 2");
console.log(overallcount);
console.log(famousarray[i]);
alert("You heard about what happened to the stationmaster.  This should help you plan your escape!");
}
};

hubScene.strupdate = function() {
hubScene.teststr = "Orders from General McClellan!:\nSoldiers Identified: " + count + "/10\nNewspaper Found: "+papercount+"/5\nOfficers Talked To: " + officercount + "/4";
//alert("Orders from General McClellan!:\nSoldiers Identified: " + count + "/10\nNewspaper Found: "+papercount+"/5\nOfficers Talked To: " + officercount + "/4");
};
hubScene.time = function() {

var d = new Date();
var curr_hour = d.getHours();
var curr_minute = d.getMinutes();
var curr_seconds = d.getSeconds();

console.log(curr_hour + ":" + curr_minute + ":" + curr_seconds);

};



    return hubScene;
  }
);