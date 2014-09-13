define(['./base'], function(engine){

  var Input = new Object();

  Input.on = false;
  Input.keys = {};
  Input.mouse = { x:0, y:0, down:false };

  Input.keyPressListeners = [];
  Input.mousePressListeners = [];

  Input.keyAnchor = document;
  Input.mouseAnchor = document;

  Input.init = function(options)
  {

    if(Input.on == true)
    {
      throw "Input already initialized!";
      return false;
    }

    if(exists(options))
    {
      if(exists(options.mouseAnchor))
        Input.mouseAnchor = options.mouseAnchor;

      if(exists(options.keyAnchor))
        Input.keyAnchor = options.keyAnchor;
    }

    var keyObj = Input.keyAnchor;
    var mouseObj = Input.mouseAnchor;

    $(keyObj).keydown(Input.keyPress);
    $(keyObj).keyup(Input.keyRelease);
    $(mouseObj).mousedown(Input.mousePress);
    $(mouseObj).mouseup(Input.mouseRelease);
    $(mouseObj).mousemove(Input.mouseMove);

    // if we want to disable context menu
    // this may or may not enable right-click functionality
    // $(mouseObject).bind('contextmenu', function(e) { return false; });

    return true;
  }

  Input.keyPress = function(e) {
    var code = e.which;

    if ( Input.isKeyUp(code) ) 
    {
      Input.keys[code] = true;
      engine.logInput("key press " + code);

      for(var i = 0; i < Input.keyPressListeners.length; i++)
      {
        Input.keyPressListeners[i].call(null,code);
      }
    }

  };

  Input.keyRelease = function(e) {
    var code = e.which;

    if ( Input.isKeyDown(code) ) 
    {
      delete Input.keys[code];
      engine.logInput("key release " + code);
    }
  };

  Input.mouseMove = function(e){
    Input.mouse.x = e.offsetX;
    Input.mouse.y = e.offsetY;
    // debug("mouse move (" + Input.mouse.x + "," + Input.mouse.y +")");
  }

  Input.mousePress = function(e) {
    if ( e.which != 1 ) return;

    var coords = {x: e.offsetX, y: e.offsetY};

    engine.logInput("mouse press (" + coords.x + "," + coords.y + ")");

    for(var i = 0; i < Input.mousePressListeners.length; i++)
    {
      Input.mousePressListeners[i].call(null,coords);
    }

    Input.mouse.down = true;
  }

  Input.mouseRelease = function(e) {
    if ( e.which != 1 ) return;

    var coords = {x: e.offsetX, y: e.offsetY};

    engine.logInput("mouse release (" + coords.x + "," + coords.y + ")");

    // for(var i = 0; i < Input.mousePressListeners.length; i++)
    // {
    //  Input.mousePressListeners[i].call(null,coords);
    // }

    Input.mouse.down = false;
  }

  Input.isKeyDown = function(code)
  {
    return exists(Input.keys[code]);
  }

  Input.anyKeyDown = function(codes)
  {
    for(var i = 0; i < codes.length; i++)
    {
      if (Input.isKeyDown(codes[i]))
      {
        return true
      }
    }
    return false;
  }

  Input.isKeyUp = function(code)
  {
    return !Input.isKeyDown(code);
  }

  Input.areKeysUp = function(codes)
  {
    return !Input.areKeysUp(codes);
  }

  return Input;
});