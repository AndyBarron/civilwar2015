define(
  ['./scene', 'game/screens/testMini', 'game/screens/testescape', 'lib/pixi'],
  function(scene, ShipScreen, EscapeScreen, nextscene) {
	
	var famousarray = ["Test", "Jerk"];
	var paperarray = ["0", "Dog", "Salamander"];
	var count = 0;
	var overallcount = 0;
	var papercount = 0;
	var mapcount = 0;
	var gossipcount = 0;
	var canteencount = 0;
	var clothescount = 0;
	var newspapercount = 0;
    var hubScene = scene('data/scenes/hub.json');
	hubScene.music = new Audio('./assets/music/town_music.ogg');
	hubScene.music.loop = true;
	hubScene.music.play();
    hubScene.startEscapeGame = function() { 
	
	if(overallcount > 13){
		
		this.changeScreen(EscapeScreen);
	  }
    };
    hubScene.startShipGame = function() {
      //alert(ShipScreen);
	  hubScene.music.pause();
	  ShipScreen.music.play();
      this.changeScreen(ShipScreen);
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
console.log(papercount);
//console.log(famousarray[i]);
alert("Passenger " + papercount + "/5 Found!");
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
console.log(papercount);
//console.log(famousarray[i]);
alert("Passenger " + papercount + "/5 Found!");
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
console.log(papercount);
//console.log(famousarray[i]);
alert("Passenger " + papercount + "/5 Found!");
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
console.log(papercount);
//console.log(famousarray[i]);
alert("Passenger " + papercount + "/5 Found!");
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
console.log(papercount);
//console.log(famousarray[i]);
alert("Passenger " + papercount + "/5 Found!");
}
    };
	hubScene.food1 = function() {
	var obj = "Food One";

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

	famousarray.push("Food One");
console.log(count);
//console.log(famousarray[i]);
alert("Food Supplies " + count + "/3 Found!");
}
    };
	hubScene.food2 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Food Two";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Food Two");
console.log(count);
console.log(famousarray[i]);
alert("Food Supplies " + count + "/3 Found!");
}
    };
hubScene.food3 = function() {
	
	 var i = famousarray.length;
	 var nocontains = true;
	 obj = "Food Three";
    while (i--) {
       if (famousarray[i] === obj) {
	   nocontains = false;
       }
    }
    if(nocontains){
	count++;
	overallcount++;

	famousarray.push("Food Three");
console.log(count);
console.log(famousarray[i]);
alert("Food Supplies " + count + "/3 Found!");
}
    };
hubScene.map = function() {
	
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
	mapcount++;
	famousarray.push("Map");
console.log(overallcount);
console.log(famousarray[i]);
alert("You have been given the local map!");
}
};

hubScene.clothes = function() {
	
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
	clothescount++;
	famousarray.push("Clothes");
console.log(overallcount);
console.log(famousarray[i]);
alert("You have been given a set of clothes for the passengers!");
}
};

hubScene.tree = function() {
	
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
console.log(overallcount);
console.log(famousarray[i]);
alert("You have found the canteen under the tree!");
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
console.log(overallcount);
console.log(famousarray[i]);
alert("You have read about what is going on in the Newspaper!");
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

hubScene.test = function() {
	

alert("Checklist for Escape!\nPassengers: " + papercount + "/5\nFood: " + count + "/3\nMap:" + mapcount + "/1\nClothes: " + clothescount + "/1\nCanteen: " + canteencount + "/1\nGossip: " + gossipcount + "/2\nNewspaper: " + newspapercount + "/1");
};





    return hubScene;
  }
);