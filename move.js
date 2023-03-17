function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  //this will handle moving the character with the character keys
  function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;

    //took code from the moveCharacter function and used it directly in setInterval function, this is referred to as inline function
    setInterval(function () {
      console.log("moveWithArrowKeys - setInterval, direction: " + direction);

      //in lines 23-34, we are changing the value of variables x or y depending on the value of the variable direction
      if (direction === "west") {
        //if the direction variable contains the value "west"
        x = x - 1; //then set the variable of the value x to the current value of x-1
      }
      if (direction === "north") {
        //if the direction variable contains the value "north"
        y = y + 1; //then set the variable of the value y to the current value of y+1
      }
      if (direction === "east") {
        //if the direction variable contains the value "east"
        x = x + 1; //then set the variable of the value x to the current value of x+1
      }
      if (direction === "south") {
        //if the direction variable contains the value "south"
        y = y - 1; //then set the variable of the value y to the current value of y-1
      }

      element.style.left = x + "px"; //this determines where the element is on the screen according to its x postion
      element.style.bottom = y + "px"; //this deteremins where the element is on the screen according to its y postion

      //console.log() is a Javascript function that already exists in Javascript, what is custom and changes is what is
      //between the () which gets printed to the console window in the browser
      console.log("moveWithArrowKeys - setInterval: x= " + x + ", y= " + y);

      console.log(
        "moveWithArrowKeys - setInterval: element.style.left=" +
          element.style.left +
          ", element.style.bottom=" +
          element.style.bottom
      );
    }, 1);

    //we are adding an inline function to handle the event when either the left arrow key, right arrow key, up arrow key, or down arrow key is pressed
    //in other words we are adding event listener for the "keydown" event
    //this is what changed direction of the character when user presses down on the arrow keys
    document.addEventListener("keydown", function (keyBoardEventParameter) {
      if (keyBoardEventParameter.repeat) return; //this line will imediately exit the function if the same arrow key is pressed twice

      if (keyBoardEventParameter.key === "ArrowLeft") {
        direction = "west";
      }

      if (keyBoardEventParameter.key === "ArrowUp") {
        direction = "north";
      }

      if (keyBoardEventParameter.key === "ArrowRight") {
        direction = "east";
      }

      if (keyBoardEventParameter.key === "ArrowDown") {
        direction = "south";
      }
      callback(direction);
    });

    console.log("document.addEventListene, direction: " + direction);

    //adding one more event listener to stop the character when the user releases a key
    document.addEventListener("keyup", function (keyBoardEventParameter) {
      direction = null;
      callback(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
