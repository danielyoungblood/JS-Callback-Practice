function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  //this will handle moving the character with the character keys
  function moveWithArrowKeys(left, bottom) {
    let x = left;
    let y = bottom;
    element.style.left = x + "px";
    element.style.bottom = y + "px";

    //took code from the moveCharacter function and used it directly in setInterval function, this is referred to as inline function
    setInterval(function () {
      let direction = null;
      if (direction === "west") {
        x = x - 1;
      }
      if (direction === "north") {
        y = y + 1;
      }
      if (direction === "east") {
        x = x + 1;
      }
      if (direction === "south") {
        y = y - 1;
      }
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
    });

    //adding one more event listener to stop the character when the user releases a key
    document.addEventListener("keyup", function (keyBoardEventParameter) {
      direction = null;
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
