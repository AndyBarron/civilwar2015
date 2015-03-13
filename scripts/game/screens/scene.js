// TODO some kind of nice loading message...
define(

  ['pixi', 'engine/classes/Screen', 'engine/graphics', 'engine/input',
  'engine/geometry', 'engine/helpers', 'engine/arrays', 'game/constants'],
  function(PIXI, Screen, graphics, input,
      geometry, helpers, arrays, constants) {
	var counter = 0;
    'use strict';
	
    return function(url) {
	var dialogueCounter = 0;

      function startDialog(npc) {
		//stage.addChild(graphics);
        var self = this;
        if (!npc.dialog) return;
        self.speaker = npc;
        self.line = -1;
        self.nameBox.setText(npc.name);
        self.advanceDialog();
        // self.dialogBox.setText(npc.dialog[0]);
        // self.dialog.visible = true;
      }
	  
	  
      function advanceDialog(respIdx) {
		if(counter > 60){
		counter = 0;
        var self = this;
		sleep();
		sheep();
        if (self.responses.visible && !respIdx) return;
        self.line ++;
        if (self.line >= self.speaker.dialog.length) {
          self.endDialog();
          return;
        } // else
        var lineText = self.speaker.dialog[self.line];
        var split = lineText.split('%');
        if (split.length > 1) {
          var splitResp = split[1].split('|');
          self.resp1.setText(splitResp[0]);
          self.resp2.setText(splitResp[1]);
          self.responses.visible = true;
        } else {
          self.responses.visible = false;
        }
        var txt = split[0];
        var txtSplit = txt.split('|');
        if (txtSplit.length > 1) {
          var idx = respIdx ? respIdx-1 : self.lastRespIdx-1;
          txt = txtSplit[idx];
        }
        var txtFirst = txt[0];
        var txtLastTwo = txt.substring(txt.length-2, txt.length);
        if (txt == '#END') {
          // if we want to end the dialog
          self.endDialog();
        } else if (txtFirst == '#' && txtLastTwo == '()') {
          // if a method call is specified
          var methodName = txt.substring(1, txt.length-2);
          var method = self[methodName];
          if (typeof method === 'function') {
            method.call(self);
          } else {
            console.error("DIALOG ERROR: no method named " + methodName);
          }
		  if(dialogueCounter < 1){
			  dialogueCounter = 60;
          self.advanceDialog();
		  }
        } else {
          // if it's just regular text
          self.dialogBox.setText(txt);
          self.dialog.visible = true;
        }
      }
	  }
      function endDialog() {
        var self = this;
        self.dialog.visible = false;
        self.responses.visible = false;
        self.speaker = null;
      }
	  function testTwo() {
	  
	  console.log("OH Baby!");
	  }
	  function sleep() {
	  setTimeout(sheep,1000);

	  }
	  function sheep() {
	  console.alert("Pooooooop");

	  }
      return new Screen({
        // Screen overrides
        backgroundColor: 0x3a7216,
        init: function() {
		
		
		
          var self = this;
		  this.staging = 0;

		  self.personTalk = new Audio(
			'./assets/sounds/TalkPerson.wav');
			

          self.startDialog = startDialog;
          self.advanceDialog = advanceDialog;
          self.endDialog = endDialog;
          self.loaded = false;
          self.updated = false;
          self.line = -1;
          self.speaker = null;
          self.lastRespIdx = 0;
          console.log(url);
          $.getJSON(url, function(data) {
            console.log('got json');
            var bgData = data.background;
            var pData = data.player || {};
            var npcData = data.npcs || [];
            // background
            if (bgData) {
              var bg = graphics.createSprite(bgData.texture);
              bg.position.x = bgData.x || 0;
              bg.position.y = bgData.y || 0;
              self.stage.addChild(bg);
            }
            // player
			//ADD WALK HERE
            var pPaths = pData.frames || [
              'hat4.png',
			  'hat4walk1.png',
			  'hat4walk2.png',
              'hat4back.png',
			  'hat4backwalk1.png',
			  'hat4backwalk2.png',
              'hat4sideleft.png',
			  'hat4sidewalk1.png',
			  'hat4sidewalk2.png',
              'hat4sideright.png',
			  'hat4sidewalk3.png',
			  'hat4sidewalk4.png',
            ];
            var pTextures = pPaths.map(function(path) {
              return graphics.getTexture(path);
            });
            var player = new PIXI.MovieClip(pTextures);
            player.anchor.x = 0.5;
            player.anchor.y = 0.5;
            player.position.x = pData.x || 300 / 2;
            player.position.y = pData.y || 1500 / 2;
			player.moved = false;
			player.stepTimer = 29;
			player.stepDir = 0;
            var pScale = pData.scale || 1;
            player.scale = new PIXI.Point(pScale, pScale);
            self.stage.addChild(player);
			
					  			//ITEMS RELATED TO OPENING
			
			self.graphics = new PIXI.Graphics();

			self.graphics.beginFill(0xFFFFFF);

			// set the line style to have a width of 5 and set the color to red
			self.graphics.lineStyle(5, 0x000000);

			// draw a rectangle
			self.graphics.drawRect(100, 25, 600, 400);

			self.stage.addChild(self.graphics);
			
			self.otherText = new PIXI.Text("Welcome to A Nation Divided!",{font:"40px Arial "});
			self.otherText.position.x = 130;
			self.otherText.position.y = 50;
			self.stage.addChild(self.otherText);
			
			self.otherText3 = new PIXI.Text("The Year is 1850 and you have arrived on a Southern Plantation.",{font:"20px Arial "});
			self.otherText3.position.x =  120;
			self.otherText3.position.y = 150;
			self.stage.addChild(self.otherText3);
			
			self.otherText4 = new PIXI.Text("You are working with HARRIET TUBMAN as an UNDERGROUND RAILROAD CONDUCTOR.",{font:"14px Arial "});
			self.otherText4.position.x = 110;
			self.otherText4.position.y = 230;
			self.stage.addChild(self.otherText4);
			
			self.otherText6 = new PIXI.Text("Interact with people and gather all the information and supplies you need to escape!",{font:"16px Arial "});
			self.otherText6.position.x = 115;
			self.otherText6.position.y = 280;
			self.stage.addChild(self.otherText6);

			
			self.otherText5 = new PIXI.Text("Move with WASD or the arrows and press space to talk. Press C for Checklist!",{font:"16px Arial "});
			self.otherText5.position.x = 120;
			self.otherText5.position.y = 300;
			self.stage.addChild(self.otherText5);



			
			self.otherText2 = new PIXI.Text("Press Space to Start!",{font:"40px Arial "});
			self.otherText2.position.x = 200;
			self.otherText2.position.y = 360;
			self.stage.addChild(self.otherText2);

            self.player = player;
            // npcs
            self.npcs = [];
            // console.log(npcData);
            npcData.forEach(function(npc) {
              // TODO Sprite -> MovieClip
              var sprite = graphics.createSprite(npc.texture);
              sprite.name = npc.name;
              sprite.dialog = npc.dialog;
              sprite.anchor.x = 0.5;
              sprite.anchor.y = 0.5;
              sprite.position.x = npc.x || 0;
              sprite.position.y = npc.y || 0;
              var npcScale = npc.scale || 1;
              sprite.scale = new PIXI.Point(npcScale, npcScale);
              self.stage.addChild(sprite);
              self.npcs.push(sprite);
            });
            // dialog boxes
            var dialog = new PIXI.DisplayObjectContainer();
            var responses = new PIXI.DisplayObjectContainer();
            var dialogMarginH = 20;
            var dialogMarginV = 20;
            var dialogMessageH = 100;
            var resp1 = new PIXI.Text('Yes!', {
              fill: '#CCCCFF',
              dropShadow: true,
            });
            var resp2 = new PIXI.Text('No...', {
              fill: '#FFCCCC',
              dropShadow: true,
            });
            var nameBox = new PIXI.Text('Name', {
              fill: '#88EEDD',
              dropShadow: true,
            });
            resp1.anchor.y = resp2.anchor.y = 1.0;
            resp2.anchor.x = 1.0;
            resp1.position.y = resp2.position.y = constants.STAGE_H - dialogMarginV;
            resp1.position.x = dialogMarginH;
            resp2.position.x = constants.STAGE_W - dialogMarginH;
            var clickFunction = function() {
              var rText = this.text;
              self.lastRespIdx = this.idx;
			  if(dialogueCounter < 1){
			  dialogueCounter = 60;
              self.advanceDialog(this.idx);
			  }
            }
            resp1.interactive = resp2.interactive = true;
            resp1.buttonMode = resp2.buttonMode = true;
            resp1.click = clickFunction;
            resp2.click = clickFunction;
            resp1.idx = 1;
            resp2.idx = 2;
            responses.addChild(resp1);
            responses.addChild(resp2);
            var dialogBaseY = constants.STAGE_H - dialogMarginV -
                dialogMessageH - resp1.height;
            nameBox.anchor.y = 1.0;
            nameBox.position.x = dialogMarginH;
            nameBox.position.y = dialogBaseY;
            dialog.addChild(nameBox);
            var tm = 'Hello! I am some dialog text. There might be a lot of ' +
                'text here, so hopefully it should wrap nicely! But it ' +
                'might not. That would be sad! :-(';
            var textBox = new PIXI.Text(tm, {
              fill: 'white',
              dropShadow: true,
              wordWrap: true,
              wordWrapWidth: constants.STAGE_W - (2*dialogMarginH),
            })
            textBox.position.x = dialogMarginH;
            textBox.position.y = dialogBaseY;
            dialog.addChild(textBox);
            self.ui.addChild(dialog);
            self.ui.addChild(responses);
            dialog.visible = false;
            responses.visible = false;
            self.dialog = dialog;
            self.resp1 = resp1;
            self.resp2 = resp2;
            self.responses = responses;
            self.nameBox = nameBox;
            self.dialogBox = textBox;
          }).fail(function(_, status){
            console.error("FAILED TO LOAD JSON: " + status)
          });
		  
			
			          self.loaded = true;


          // console.log(self.player);
        },
        update: function(delta) {
		  counter++;
          var self = this;
          if (!self.loaded) return;
          var player = self.player;
		  if(dialogueCounter > 0){
			dialogueCounter = dialogueCounter - 1;
		  }
		  
		  if(this.staging==1)
		  {
          // actions that can't occur during dialog!
          if (!self.speaker) {
            // player movement
			// ADD WALK HERE
            var moveKeys = [
              constants.KEYS_DOWN,
              constants.KEYS_UP,
              constants.KEYS_LEFT,
              constants.KEYS_RIGHT,
            ];
            moveKeys.forEach(function(keys, idx) {
              if (!input.anyKeyDown(keys)){
					return;
			  }
			  //console.log("KEY PRESSED!");
              var moveH = idx > 1;
              var mult = (idx == 1 || idx == 2) ? -1 : 1;
              var coord = moveH ? 'x' : 'y';
			  //player.wasMoving = true;
              //player.gotoAndStop(idx);
			  player.stepDir = idx;
			  player.moved = true;
              player.position[coord] += constants.PLAYER_SPEED * delta * mult;
              // console.log(moveH, mult);
			  return;
            });
			
			if(player.moved){
			//console.log("STEP: " + player.stepTimer);
				player.moved = false;
				if(player.stepDir == 0){
					player.gotoAndStop(Math.floor(player.stepTimer/10));
				}else if(player.stepDir == 1){
					player.gotoAndStop(Math.floor(player.stepTimer/10) + 3);
				}else if(player.stepDir == 2){
					player.gotoAndStop(Math.floor(player.stepTimer/10) + 6);
				}else if(player.stepDir == 3){
					player.gotoAndStop(Math.floor(player.stepTimer/10) + 9);
				}
				player.stepTimer--;
			}else{
			//player.gotoAndStop(0);
			}
			if(player.stepTimer < 0){
				player.stepTimer = 29;
			}
			/*
					player.wasMoving = false;
					if(idx == 0){
						player.gotoAndStop(0);
					}else if(idx == 1){
						player.gotoAndStop(3);
					}else if(idx == 2){
						player.gotoAndStop(6);
					}else if(idx == 3){
						player.gotoAndStop(9);
					}
					
					
			if(player.wasMoving){
				if(player.stepBool){
					if(idx == 0){
						player.gotoAndStop(1);
					}else if(idx == 1){
						player.gotoAndStop(4);
					}else if(idx == 2){
						player.gotoAndStop(7);
					}else if(idx == 3){
						player.gotoAndStop(10);
					}
					player.stepBool = false;
				}else{
					if(idx == 0){
						player.gotoAndStop(2);
					}else if(idx == 1){
						player.gotoAndStop(5);
					}else if(idx == 2){
						player.gotoAndStop(8);
					}else if(idx == 3){
						player.gotoAndStop(11);
					}
					player.stepBool = true;
				}
			  }
			*/
          }
          if (self.updated) {
            // PLAYER-NPC COLLISION
            // kind of ugly... but it works (?)
            var pBounds = player.getBounds();
            self.npcs.forEach(function(npc) {
              var npcBounds = npc.getBounds();
              var overlap = geometry.getRectangleOverlap(pBounds, npcBounds, -50);
              if (overlap) {
                // console.log(overlap);
                var horizontal = overlap.width < overlap.height;
                if (horizontal) {
                  var reverse = (npcBounds.x + npcBounds.width/2.0) > 
                      (pBounds.x + pBounds.width / 2.0);
                  // console.log(reverse);
                  player.position.x += overlap.width * (reverse ? -1 : 1);
                } else {
                  var reverse = (npcBounds.y + npcBounds.height/2.0) > 
                      (pBounds.y + pBounds.height / 2.0);
                  player.position.y += overlap.height * (reverse ? -1 : 1);
                }
              }
            });
            // PLAYER-NPC DEPTH SORTING
            // pretty neato
            var dList = [player];
            self.npcs.forEach(function(npc) { dList.push(npc) });
            dList.forEach(function(child) { self.stage.removeChild(child); });
            dList.sort(helpers.spriteZSort);
            dList.forEach(function(child) { self.stage.addChild(child); });
          }
          self.centerCameraPosition(
            player.position.x,
            player.position.y,
            constants.STAGE_W,
            constants.STAGE_H
          );
          self.updated = true;
		  }
        },
        onKeyDown: function(keyCode) {
          var self = this;
          // console.log(self.loaded);
          if (!self.loaded) return;
          // console.log(keyCode);
          // console.log(constants.KEYS_INTERACT);
		  
		  
          var interacted = arrays.containsElement(constants.KEYS_INTERACT, keyCode);
		  
		  if(this.staging==0 && interacted){
		  
		  this.staging++;
		  self.stage.removeChild(self.otherText);
		  self.stage.removeChild(self.otherText2);
		  self.stage.removeChild(self.otherText3);
		  self.stage.removeChild(self.otherText4);
		  self.stage.removeChild(self.otherText5);
		  self.stage.removeChild(self.otherText6);
		  self.stage.removeChild(self.graphics);

		  
		  }

          if (interacted && !self.speaker) {
            var speaker = null;
            self.npcs.forEach(function(npc) {
              if (speaker) return;
              var pBounds = self.player.getBounds();
              var cBounds = npc.getBounds();
              if (geometry.getRectangleOverlap(pBounds, cBounds, 10)) {
                speaker = npc;
              }
            });
            if (speaker) {
              self.startDialog(speaker);
			  this.personTalk.play();
			  this.personTalk.currentTime=0;

            }
          } else if (interacted && self.speaker) {
		  			  if(dialogueCounter < 1){
			  dialogueCounter = 60;
            self.advanceDialog();
			}
          }
        },
      });
    };
  }
);