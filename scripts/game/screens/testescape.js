define(
  ['pixi', 'engine/classes/Screen', 'engine/graphics', 'engine/geometry'],
function(PIXI, Screen, Images, Collisions) {
	function getHubScreen() {
		return require('game/screens/GameHub');
	}
	
	this.backMap = Images.getTexture("blankmap.png");
	this.backMap2 = Images.getTexture("southcarolina.png");
	this.backMap3 = Images.getTexture("mississippi.png");
	this.backMap4 = Images.getTexture("florida.png");
	this.backMap5 = Images.getTexture("alabama.png");
	this.backMap6 = Images.getTexture("georgia.png");
	this.backMap7 = Images.getTexture("louisiana.png");
	this.backMap8 = Images.getTexture("texas.png");
	this.backMap9 = Images.getTexture("virginia.png");
	this.backMap10 = Images.getTexture("arkansas.png");
	this.backMap11 = Images.getTexture("tennessee.png");
	this.backMap12 = Images.getTexture("north carolina.png");
	this.statictext = new PIXI.Text("After Lincoln is elected, the states seceed one by one (click on state as they seceed)", {
				font : "36px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
	this.statictext.position.x = 100;
	this.statictext.position.y = 10;

	this.staging = 0;
	this.back = new PIXI.Sprite(backMap);
	


	var SampleMiniGame = new Screen({
		init: function(){

				back.height = 600;
				back.width = 800;

				this.stage.addChild(back);


				this.stage.addChild(statictext);
					/*$.ajax({
						type: "GET",
						url: "./../../../data/escapegame.csv",
						dataType: "text",
						success: function(data) {readNodes(data);}
					 });*/
				//var arrData = [];
				self = this;
		  },
		  update: function(delta)
		  {
		  },
		  onKeyDown: function(keyCode)
		  {
			/*if (arrayContains(KEYS_EXIT,keyCode))
			{
			  this.changeScreen(TestWorldScreen);
			}*/
			//this.changeScreen(getHubScreen());
			
		  },
		  onMouseDown: function(point)
		  {
		  //console.log(this.stage.getMousePosition);

		  if(staging==10){
		  back.texture = backMap12;
		  staging++;
		  this.statictext12 = new PIXI.Text("North Carolina", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 4000
				});
		  this.statictext12.position.x = 25;
	      this.statictext12.position.y = 500;

		  this.stage.addChild(this.statictext12);
		  this.statictext25 = new PIXI.Text("Confederacy wins Battle of Bull Run!", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 4000
				});
		  this.statictext25.position.x = 200;
	      this.statictext25.position.y = 350;

		  this.stage.addChild(this.statictext25);


		  }
		  if(staging==9){
		  back.texture = backMap11;
		  staging++;
		  this.statictext11 = new PIXI.Text("Tennessee", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext11.position.x = 25;
	      this.statictext11.position.y = 470;

		  this.stage.addChild(this.statictext11);

		  }
		  if(staging==8){
		  back.texture = backMap10;
		  staging++;
		  this.statictext10 = new PIXI.Text("Arkansas", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext10.position.x = 25;
	      this.statictext10.position.y = 440;

		  this.stage.addChild(this.statictext10);

		  }
		  if(staging==7){
		  back.texture = backMap9;
		  staging++;
		  this.statictext9 = new PIXI.Text("Virginia", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext9.position.x = 25;
	      this.statictext9.position.y = 410;

		  this.stage.addChild(this.statictext9);
		  this.statictext24 = new PIXI.Text("Lee becomes General of Confederacy", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 4000
				});
		  this.statictext24.position.x = 200;
	      this.statictext24.position.y = 300;

		  this.stage.addChild(this.statictext24);



		  }
		  if(staging==6){
		  back.texture = backMap8;
		  staging++;
		  this.statictext8 = new PIXI.Text("Texas", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext8.position.x = 25;
	      this.statictext8.position.y = 380;

		  this.stage.addChild(this.statictext8);
		  
		  this.statictext23 = new PIXI.Text("Fort Sumter Attacked! War Begins!", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 4000
				});
		  this.statictext23.position.x = 200;
	      this.statictext23.position.y = 250;

		  this.stage.addChild(this.statictext23);


		  }
		  if(staging==5){
		  back.texture = backMap7;
		  staging++;
		  this.statictext7 = new PIXI.Text("Louisiana", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext7.position.x = 25;
	      this.statictext7.position.y = 350;

		  this.stage.addChild(this.statictext7);

		  }
		  if(staging==4){
		  back.texture = backMap6;
		  staging++;
		  this.statictext6 = new PIXI.Text("Georgia", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext6.position.x = 25;
	      this.statictext6.position.y = 320;

		  this.stage.addChild(this.statictext6);

		  }
		  if(staging==3){
		  back.texture = backMap5;
		  staging++;
		  this.statictext5 = new PIXI.Text("Alabama", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext5.position.x = 25;
	      this.statictext5.position.y = 290;

		  this.stage.addChild(this.statictext5);

		  }
		  if(staging==2){
		  back.texture = backMap4;
		  staging++;
		  this.statictext4 = new PIXI.Text("Florida", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext4.position.x = 25;
	      this.statictext4.position.y = 260;

		  this.stage.addChild(this.statictext4);

		  }
		  if(staging==1){
		  back.texture = backMap3;
		  staging++;
		  this.statictext3 = new PIXI.Text("Mississippi", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext3.position.x = 25;
	      this.statictext3.position.y = 230;

		  this.stage.addChild(this.statictext3);

		  }
		  if(staging==0){
		  back.texture = backMap2;
		  this.statictext2 = new PIXI.Text("South Carolina", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 400
				});
		  this.statictext2.position.x = 25;
	      this.statictext2.position.y = 200;

		  this.stage.addChild(this.statictext2);
		  staging++;
		  this.statictext22 = new PIXI.Text("Jefferson Davis becomes President of Confederacy", {
				font : "24px Arial",
				fill : "black",
				wordWrap : true,
				wordWrapWidth : 4000
				});
		  this.statictext22.position.x = 200;
	      this.statictext22.position.y = 200;

		  this.stage.addChild(this.statictext22);

		  }
		  
		  }
	});
	  return SampleMiniGame;
  }
);