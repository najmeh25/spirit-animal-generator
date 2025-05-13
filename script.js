const spiritAnimals = [
  "the Brave Lion 🦁",
  "the Wise Owl 🦉",
  "the Playful Dolphin 🐬",
  "the Clever Fox 🦊",
  "the Calm Turtle 🐢",
  "the Powerful Bear 🐻"
];

document.getElementById("generateButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    document.getElementById("result").textContent = "Please enter your name.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
  const spiritAnimal = spiritAnimals[randomIndex];

  document.getElementById("result").textContent = `${name} - ${spiritAnimal}`;
});
