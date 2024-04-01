function generateSheet(event) {
  event.preventDefault();

  new Typewriter("#character-sheet", {
    strings:
      "Name: <br>Race: <br>Class: <br>Level: <br>Hit Points: <br>Speed: <br>Initiative: <br>Armor Class: <br>Backstory:",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let characterFormElement = document.getElementById("character-generator-form");
characterFormElement.addEventListener("submit", generateSheet);
