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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();
    // TODO 2 - Create Platforms
createPlatform(200, 610, 100, 20, "hotpink");

createPlatform(400, 472, 80, 20, "lightgreen");

createPlatform(600, 340, 60, 20, "darkred");

createPlatform(863, 205, 40, 20, "lightgreen");

createPlatform(500, 0, 20, 310, "lightblue");

createPlatform(1200, 590, 20, 20, "hotpink");
    // TODO 3 - Create Collectables
createCollectable("grace", 530, 340)
createCollectable("steve", 1060, 100)
createCollectable("diamond", 780, 170, 0.000251, 0);
    // TODO 4 - Create Cannons
createCannon("top", 410, 1550);
createCannon("bottom", 1150, 2300);
createCannon("right", 400, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
