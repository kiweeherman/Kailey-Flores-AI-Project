function displaySheet(response) {
  new Typewriter("#character-sheet", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
function generateSheet(event) {
  event.preventDefault();
  let sheet = document.getElementById("character-sheet");
  sheet.classList.add("white");
  sheet.innerHTML = "Processing...";
  let playback = document.getElementById("user-prompt-playback");
  let userInstructions = document.getElementById("user-instructions");
  let context =
    "You are a straight-to-the point dungeon master for dungeones and dragons. You love helping people make their own unique characters with complex backstories. The character sheets you generate are quick to the point lists with the following categories in basic HTML. Name, Race, Class, Level, Hit Points, Speed, Initiative, Armor Class, and Backstory. Please do not add or remove categories or break from this template. Speed should be represented soley by a number with no measurement following. Lastly, do your best to incorportate the user hint at the end of the prompt.";
  let prompt = `Please generate a dungeons and dragons Character Sheet in the form of a list using following this user hint, ${userInstructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=3d95dc3f33f458odab21943t86b91c04`;
  console.log(`Prompt is: ${prompt}`);
  playback.innerHTML = `Your prompt was: "${userInstructions.value}"`;
  axios.get(apiUrl).then(displaySheet);
}

let characterFormElement = document.getElementById("character-generator-form");
characterFormElement.addEventListener("submit", generateSheet);
