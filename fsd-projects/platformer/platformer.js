$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform( 400, 275, 50, 50, "blue");
    createPlatform(550, 350, 50, 50, "blue");
    createPlatform(520, 250, 50, 50, "blue");
    createPlatform(650, 310, 50, 50, "blue");
    createPlatform(900, 710, 50, 50, "blue");
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1300,250);
    createCollectable("steve", 1100, 450);
    createCollectable("kennedi", 920, 675);
    
    // TODO 4 - Create Cannons
     createCannon("left", 200, 700);
     createCannon("bottom", 650, 700);
     createCannon("top", 110, 700);
     createCannon("top", 600, 700);
     createConnon("top", 100, 700);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
