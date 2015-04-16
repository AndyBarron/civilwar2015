define(
  ['pixi', 'engine/classes/Screen', 'engine/graphics', 'engine/geometry'],
function(PIXI, Screen, Images, Collisions) {
	function getHubScreen() {
		return require('game/screens/GameHub');
	}
	function graphnode(num, sprite,name,adjacent){
		this.sprite = sprite;
		this.name = name;
		this.adjacent = adjacent;
		this.num = num;
		this.touching = function(pos){
		//console.log(pos);
			if(Collisions.doRectanglesOverlap(this.sprite.getBounds(), pos, 0)){
			//console.log("TRUE FOR " + name);
				return true;
			}
			//console.log("FALSE FOR " + name);
			return false;
		}
		this.toString = function(){
			return this.name;
		}
		this.setinvis = function(){
			this.sprite.gotoAndStop(0);
		}
		this.setvis = function(){
			this.sprite.gotoAndStop(1);
		}
		this.setenemy = function(){
			this.sprite.gotoAndStop(2);
		}
		this.setescape = function(){
			this.sprite.gotoAndStop(3);
		}
		this.isAdj = function(node){
		//console.log("COMPARE: " + node);
		//console.log(adjacent);
			for(var key in adjacent){
				if(adjacent[key].num == node){
					return true;
				}
			}
			return false;
		}
	}
	function enemyTurn(self){
		var temp_adj = [];
		//console.log("ENEMY AT " + self.enemynode);
		self.graph[self.enemynode].adjacent.forEach(function(node){
			temp_adj.push(node.num);
			});
		var new_num = Math.floor(Math.random() * temp_adj.length);
		self.playerturn = true;
		self.graph[self.enemynode].setinvis();
		self.enemynode = temp_adj[new_num] - 1;
		//console.log("ENEMY MOVING TO " + self.enemynode);
		self.graph[self.enemynode].setenemy();
		if(self.enemynode == self.playernode){
			alert("You were caught!");
			self.graph[self.playernode].setinvis();
			resetGame(self);
			self.changeScreen(getHubScreen());
		}
	}
	
	function resetGame(self){
		self.playernode = 10;
		self.graph[self.enemynode].setinvis();
		self.enemynode = 21;
		self.graph[self.playernode].setvis();
		self.moves = 100;
		self.graph[0].setescape();
	    self.graph[27].setescape();
	    self.graph[31].setescape();
	    self.graph[40].setescape();
	    self.graph[43].setescape();
		self.switchtimer = 70;
		self.playerturn = true;
	}//might need to change switchtimer

	var SampleMiniGame = new Screen({
		init: function(){
				var backMap = Images.getTexture("escapemap.png");
				var back = new PIXI.Sprite(backMap);
				this.stage.addChild(back);
				var markTexture = [];
			    markTexture.push(Images.getTexture("node.png"));
			    markTexture.push(Images.getTexture("node_player.png"));
			    markTexture.push(Images.getTexture("node_enemy.png"));
			    markTexture.push(Images.getTexture("node_escape.png"));

				this.graph = [];
				this.playernode = 10;
				this.enemynode = 21;
				this.moves = 100;
				this.graphtext = new PIXI.Text("Click a node to get started!", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 200
				});
				this.graphtext.position.x = 560;
				this.graphtext.position.y = 400;
				this.stage.addChild(this.graphtext);
				this.statictext = new PIXI.Text("The Underground Railroad", {
				font : "36px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 200
				});
				this.statictext.position.x = 560;
				this.statictext.position.y = 10;
				this.stage.addChild(this.statictext);
				this.statictext2 = new PIXI.Text("Post-1850: The Fugitive Slave Act is in effect", {
				font : "30px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 200
				});
				this.statictext2.position.x = 560;
				this.statictext2.position.y = 140;
				this.stage.addChild(this.statictext2);
				this.turntext = new PIXI.Text("Player's Turn", {
				font : "24px Arial",
				fill : "blue",
				wordWrap : true,
				wordWrapWidth : 200
				});
				this.turntext.position.x = 560;
				this.turntext.position.y = 480;
				this.stage.addChild(this.turntext);					
			  //this.graph[this.playernode].setvis();
				arrData = [];
					/*$.ajax({
						type: "GET",
						url: "./../../../data/escapegame.csv",
						dataType: "text",
						success: function(data) {readNodes(data);}
					 });*/
				//var arrData = [];
				self = this;
				readNodes("data goes here");
				function readNodes(data){
				//console.log(arrData);
					//nodeLines = data.split("\n");
					
					
					//We're back to this ugliness because evidently javascript isn't a fan of loading CSVs
					nodeLines = [[1,"San Antonio, Texas",37,570,"2,3",2],
[2,"Austin, Texas",50,517,"1,4",0],
[3,"Houston, Texas",90,535,"1,4",0],
[4,"Alexandria, Lousiana",150,495,"2,3,5,7",0],
[5,"Baton Rouge, Lousiana",200,510,"4,6,7,11",0],
[6,"New Orleans, Lousiana",210,535,"5",2],
[7,"Jackson, Mississippi",205,450,"4,5,8,10",0],
[8,"Little Rock, Arkansas",185,390,"7,9,15,16",1],
[9,"Birmingham, Alabama",270,415,"8,10,16,17",1],
[10,"Montgomery, Alabama",270,450,"7,9,11,17",0],
[11,"Tallahassee, Florida",285,500,"5,10,12",0],
[12,"St. Augustine, Florida",385,510,"11,13,18",0],
[13,"Lakeland, Florida",395,555,"12,14",0],
[14,"Everglades, Flordia",420,585,"13",2],
[15,"Springfield, Missouri",158,330,"8,19",0],
[16,"Nashville, Tennessee",260,370,"8,9,20",0],
[17,"Atlanta, Georgia",339,444,"9,10,18,22",0],
[18,"Savannah, Georgia",395,465,"12,17,23",0],
[19,"Saint Louis, Missouri",185,320,"15,27,30",0],
[20,"Louisiville, Kentucky",270,335,"16,21,34",0],
[21,"Roanoke, Virginia",388,333,"20,22,24,35,36",1],
[22,"Columbia, South Carolina",383,405,"17,21,23",0],
[23,"Charleston, South Carolina",425,415,"18,22,25,43",4],
[24,"Raleigh, North Carolina",429,349,"21,25,36",0],
[25,"Jacksonville, North Carolina",458,368,"23,24",0],
[26,"Des Moines, Iowa",140,230,"27,28",0],
[27,"Springfield, Illinois",198,263,"19,26,29",0],
[28,"Madison, Wisconsin",200,190,"26,29",2],
[29,"Chicago, Illinois",220,240,"27,28,30",0],
[30,"Indianapolis, Indiana",260,296,"19,29,34",0],
[31,"Cincinnati, Ohio",314,243,"32,33,37",0],
[32,"Detroit, Michigan",270,205,"31",2],
[33,"Columbus, Ohio",305,270,"31,35,34",0],
[34,"Cleveland, Ohio",298,303,"30,20,33,35",0],
[35,"Charleston, West Virginia",383,285,"33,34,37,21",0],
[36,"Richmond, Virginia",440,298,"21,24,38",0],
[37,"Pittsburgh, Pennysylvania",390,230,"31,35,39,38",0],
[38,"Annapolis, Marland",435,255,"36,37,39",0],
[39,"Philadelphia, Pennysylvania",455,225,"37,38,42,40",0],
[40,"Rochester, New York",470,165,"39,43,44,41",0],
[41,"Albany, New York",410,145,"40",2],
[42,"New York, New York",490,190,"39,43",0],
[43,"Boston, Massachusetts",525,145,"40,42,23,44",0],
[44,"Montpelier, Vermont",500,110,"40,43",2]];
					
					
					
					//console.log(nodeLines[1]);
					nodeLines.forEach(function(line){
					//console.log(line);
						var pieces = eval(line);
						//console.log(pieces);
						arrData.push(pieces);
						//console.log(arrData);
					});
				
				//console.log(arrData);
				

			  
			  //console.log(strData);
			  
			  for(var key in arrData){
				  //alert(arrData[key][2]);
				  var tempnode = new graphnode(arrData[key][0],new PIXI.MovieClip(markTexture), arrData[key][1],[]);
				  self.stage.addChild(tempnode.sprite);
				  tempnode.sprite.position.x = arrData[key][2];
				  tempnode.sprite.position.y = arrData[key][3];
				  tempnode.sprite.setInteractive(true);
				  tempnode.sprite.num = tempnode.num;
				  tempnode.sprite.mousedown = function(mouseData){
					  //console.log(self);
					  //console.log(this.num);
					  //self.graph[self.playernode].isAdj(this.num);
					  if(self.playerturn){
								if(self.graph[self.playernode].isAdj(this.num) && self.moves > 0){
								self.playerturn = false;
								self.graph[self.playernode].setinvis();
								self.graph[this.num - 1].setvis();
								self.playernode = this.num - 1;
								self.graphtext.setText(self.graph[self.playernode].name);
								self.moves = self.moves - 1;
								//break;
							}
							if (self.playernode == 0 || self.playernode == 27 || self.playernode == 31 || self.playernode == 39 || self.playernode == 43 ){
							alert("You won by escaping!");
							self.graph[self.playernode].setescape();
							resetGame(self);
							self.changeScreen(getHubScreen());
							}
							if(self.moves < 1){
								alert("You ran out of moves!");
								self.graph[self.playernode].setinvis();
								resetGame(self);
								self.changeScreen(getHubScreen());
							}
							if(self.enemynode == self.playernode){
								alert("You were caught!");
								self.graph[self.playernode].setinvis();
								resetGame(self);
								self.changeScreen(getHubScreen());
							}
						}
				  }
				  
				  //Adds numbers to nodes for debugging
				  /*this.answerText1 = new PIXI.Text(arrData[key][0]);
				  this.answerText1.position.x = tempnode.sprite.position.x;
				  this.answerText1.position.y = tempnode.sprite.position.y;
				  self.stage.addChild(this.answerText1);*/
				  
				  self.graph.push(tempnode);
			  }
			  for(var adj in arrData){
				  //alert(arrData[adj][3]);
				  //console.log(arrData[adj]);
				  var adjArr = arrData[adj][4].split(',');
				  for(var adjNode in adjArr){
					self.graph[adj].adjacent.push(self.graph[parseInt(adjArr[adjNode]) - 1]);
				  }
			  }
			  self.graph[self.playernode].setvis();
			  self.graph[0].setescape();
			  self.graph[27].setescape();
			  self.graph[31].setescape();
			  self.graph[40].setescape();
			  self.graph[43].setescape();
			  self.playerturn = true;
			  self.switchtimer = 70;
			  }
		  },
		  update: function(delta)
		  {
			  if(this.switchtimer < 1){
					this.switchtimer = 70;
					if(this.playerturn){
						this.turntext.setText("Player's Turn");
						this.turntext.setStyle({font : "24px Arial",fill:"blue"});
						this.graph[this.enemynode].setinvis();
						if (this.enemynode == 0 || this.enemynode == 27 || this.enemynode == 31 || this.enemynode == 39 || this.enemynode == 43 ){
							this.graph[this.enemynode].setescape();
						}
						this.graph[this.playernode].setvis();
					}else{
						this.turntext.setText("Enemy's Turn");
						this.turntext.setStyle({font : "24px Arial",fill:"orange"});
						this.graph[this.playernode].setinvis();
						this.graph[this.enemynode].setenemy();
						enemyTurn(this);
					}
				}else{
					this.switchtimer = this.switchtimer - 1;
				}
		  },
		  onKeyDown: function(keyCode)
		  {
			/*if (arrayContains(KEYS_EXIT,keyCode))
			{
			  this.changeScreen(TestWorldScreen);
			}*/
			this.changeScreen(getHubScreen());
			
		  },
		  onMouseDown: function(point)
		  {
		  //console.log(this.stage.getMousePosition);
		  }
	});
	  return SampleMiniGame;
  }
);