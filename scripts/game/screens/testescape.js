define(
  ['pixi', 'engine/classes/Screen', 'engine/graphics', 'engine/geometry'],
function(PIXI, Screen, Images, Collisions) {

	function graphnode(sprite,name,adjacent){
		this.sprite = sprite;
		this.name = name;
		this.adjacent = adjacent;
		this.touching = function(pos){
		console.log(pos);
			if(Collisions.doRectanglesOverlap(this.sprite.getBounds(), pos, 0)){
			console.log("TRUE FOR " + name);
				return true;
			}
			console.log("FALSE FOR " + name);
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
			for(var key in adjacent){
				if(adjacent[key] == node){
					return true;
				}
			}
			return false;
		}
	}

	var SampleMiniGame = new Screen({
		init: function(){
				var backMap = Images.getTexture("map.png");
				var back = new PIXI.Sprite(backMap);
				this.stage.addChild(back);
				var markTexture = [];
			    markTexture.push(Images.getTexture("node.png"));
			    markTexture.push(Images.getTexture("node_player.png"));
			    markTexture.push(Images.getTexture("node_enemy.png"));
			    markTexture.push(Images.getTexture("node_escape.png"));

				this.graph = [];
				this.playernode = 10;
				this.enemynode = 11;
				this.moves = 100;
			  //this.graph[this.playernode].setvis();
				arrData = [];
					$.ajax({
						type: "GET",
						url: "../../../data/escapegame.csv",
						dataType: "text",
						success: function(data) {readNodes(data);}
					 });
				//var arrData = [];
				self = this;
				function readNodes(data){
				//console.log(arrData);
					nodeLines = data.split("\n");
					//console.log(nodeLines[1]);
					nodeLines.forEach(function(line){
						var pieces = eval(line);
						//console.log(pieces);
						arrData.push(pieces);
						//console.log(arrData);
					});
				
				//console.log(arrData);
				

			  
			  //console.log(strData);
			  
			  for(var key in arrData){
				  //alert(arrData[key][2]);
				  var tempnode = new graphnode(new PIXI.MovieClip(markTexture), arrData[key][1],[]);
				  self.stage.addChild(tempnode.sprite);
				  tempnode.sprite.position.x = arrData[key][2];
				  tempnode.sprite.position.y = arrData[key][3];
				  
				  this.answerText1 = new PIXI.Text(arrData[key][0]);
				  this.answerText1.position.x = tempnode.sprite.position.x;
				  this.answerText1.position.y = tempnode.sprite.position.y;
				  self.stage.addChild(this.answerText1);
				  
				  self.graph.push(tempnode);
			  }
			  for(var adj in arrData){
				  //alert(arrData[adj][3]);
				  console.log(arrData[adj]);
				  var adjArr = arrData[adj][4].split(',');
				  for(var adjNode in adjArr){
					self.graph[adj].adjacent.push(self.graph[parseInt(adjArr[adjNode]) - 1]);
				  }
			  }
			  self.graph[self.playernode].setvis();
			  self.graph[0].setescape();
			  self.graph[27].setescape();
			  self.graph[31].setescape();
			  self.graph[39].setescape();
			  self.graph[43].setescape();
			  self.playerturn = true;
			  self.switchtimer = 120;
			  }
		  },
		  update: function(delta)
		  {
			  if(this.switchtimer < 1){
					this.switchtimer = 120;
					if(this.playerturn){
						this.graph[this.enemynode].setinvis();
						this.graph[this.playernode].setvis();
					}else{
						this.graph[this.playernode].setinvis();
						this.graph[this.enemynode].setenemy();
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
			
		  },
		  onMouseDown: function(point)
		  {
			if(this.playerturn){
				//this.graph[this.playernode].setvis();
				for(var i = 0; i < this.graph.length; i++){
				//console.log("checking node " + i);
					if(this.graph[i].touching(point) && this.graph[this.playernode].isAdj(this.graph[i]) && this.moves > 0){
						this.playerturn = false;
						console.log("MOVING TO NODE " + i);
						this.graph[this.playernode].setinvis();
						this.graph[i].setvis();
						this.playernode = i;
						this.moves = this.moves - 1;
						break;
					}
				}
				if (this.playernode == 0 || this.playernode == 27 || this.playernode == 31 || this.playernode == 39 || this.playernode == 43 ){
					alert("you win!");
					this.graph[this.playernode].setinvis();
					this.changeScreen(TestWorldScreen);
					this.playernode = 0;
				}
					if (this.enemynode == this.playernode){
						alert("you lose!");
						this.graph[this.playernode].setinvis();
						this.changeScreen(TestWorldScreen);
						this.playernode = 0;
					}
			}else{
				for(var i = 0; i < this.graph.length; i++){
					//console.log("checking node " + i);
					if(this.graph[i].touching(point) && this.graph[this.enemynode].isAdj(this.graph[i]) && i != 0 && i != 27 && i != 31 && i != 39 && i != 43){
						this.playerturn = true;
						console.log("MOVING ENEMY TO NODE " + i);
						this.graph[this.enemynode].setinvis();
						this.graph[i].setenemy();
						this.enemynode = i;
						//this.moves = this.moves - 1;
					}
				}
				if (this.enemynode == this.playernode){
					alert("you lose!");
					this.graph[this.playernode].setinvis();
					this.changeScreen(TestWorldScreen);
					this.playernode = 0;
				}
			}
		  }
	});
	  return SampleMiniGame;
  }
);