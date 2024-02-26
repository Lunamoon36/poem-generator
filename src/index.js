function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let = instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "773b1fb672t5o4902c27a62f4db0b82a";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value},`;
  let context =
    "You are a poem expert and love to write short poems. Please generate a four line poem in basic HTML. Please separate the sentences onto new lines. Please ensure to follow the user instructions. Please do not include a title. Please sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning ";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
