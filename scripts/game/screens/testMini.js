define(
  ['pixi', 'engine/classes/Screen', 'engine/graphics', 'engine/geometry'],
function(PIXI, Screen, Images, Collisions) {
console.log("GETHERE");
				function enemy_ship(sprite, name, question, answer){
					this.sprite = sprite;
					this.name = name;
					this.question = question;
					this.answer = answer;
					this.isCorrect = function(ans){
						if(ans == answer){
							return true;
						}else{
							return false;
						}
					}
				}
	var SampleMiniGame = new Screen({
		init: function(){
				//Need to declare a "ship" type to match questions, answers, and sprites
			  //Need to initialize a question box, an answer box, our ship, and start the enemies
			//var backMap = Images.getTexture("map.png");
			//var back = new PIXI.Sprite(backMap);
			//this.stage.addChild(back);
			//var this.enemySet = [];
			this.questions = [];
			this.num_questions = 0;
			this.answers = [];
			this.playerShip = new enemy_ship(Images.getTexture("node.png"),"Player","","Q");
			this.playerLives = 2;
			this.round = 1;
			this.enemies = 3;
			this.yCoord = 0;
			this.isActiveEnemy = false;
			var enemyTexture = [];
			enemyTexture.push(Images.getTexture("node.png"));
			//Array of questions, randomly chosen, 3 lives per round, round length increases
			//Keys A and B 65 and 66
		  },
		  update: function(delta)
		  {
		  //Need to make the ships update their position, stopping once they hit a threshold
		  //We should also include logic here to update points, end the game, or spawn enemies
			if(this.enemies < 1){
				if(this.round > 3){
					this.changeScreen(TestWorldScreen);
				}else{
					this.round = this.round + 1;
					this.enemies = this.round * 3;
				}
			}
			if(this.isActiveEnemy == false){
				this.isActiveEnemy = true;
				this.randomIndex = Math.floor(Math.random() * this.num_questions) + 1;
				this.enemy = new enemy_ship(new PIXI.MovieClip(enemyTexture),"Enemy",this.questions[this.randomIndex],this.answers[this.randomIndex]);
				this.stage.addChild(enemy.sprite);
				enemy.sprite.position.x = -100;
				this.yCoord = Math.floor(Math.random() * constants.STAGE_H) + 1;
				enemy.sprite.position.y = this.yCoord;
				this.stage.addChild(this.enemy);
			}
			/*if(this.isActiveEnemy == true){
				if(this.enemy.sprite.position.x < 200){
					this.enemy.sprite.position.x++;
				}
			}*/
		  },
		  onKeyDown: function(keyCode)
		  {
		  //Need to add code to take in a key A, B, C, or D, and check it against the answer to the currently selected question
			if (arrayContains(KEYS_EXIT,keyCode))
			{
			  this.changeScreen(TestWorldScreen);
			}
		  },
		  onMouseDown: function(point)
		  {
		  //We can use the mouse to select enemies

		  }
	});
	console.log("WTFMATE");
	  return SampleMiniGame;
  }
);