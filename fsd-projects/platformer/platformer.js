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
     toggleGrid();
    // TODO 2 - Create Platforms
createPlatform(150, 610, 110, 20, "hotpink");
createPlatform(150, 610, 40, 40, "hotpink");

createPlatform(300, 472, 230, 20, "lightgreen");
createPlatform(260, 471, 40, 160, "lightgreen");
createPlatform(1240, 200, 160, 20, "hotpink")

createPlatform(470, 340, 60, 20, "darkred");
createPlatform(520, 360, 10, 130, "lightgreen");
createPlatform(1100, 300, 50, 20, "lightgreen")

createPlatform(563, 205, 40, 20, "darkred");
createPlatform(100, 280, 100, 10, "hotpink");
createPlatform(100, 110, 10, 170, "hotpink");

createPlatform(270, 380, 150, 5, "lightblue");
createPlatform(270, 280, 150, 100, "lightblue");
createPlatform(270, 280, 150, 10, "hotpink");

createPlatform(1200, 430, 50, 20, "lightgreen");
createPlatform(700, 120, 100, 20, "darkred");
createPlatform(1000, 550, 30, 20, "lightgreen");
    // TODO 3 - Create Collectables
createCollectable("grace", 130, 230);
createCollectable("steve", 990, 300);
createCollectable("diamond", 475, 420);
createCollectable("database", 1340, 150)
    // TODO 4 - Create Cannons
createCannon("top", 410, 1000);
createCannon("bottom", 955, 3400);
createCannon("right", 400, 3200);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
