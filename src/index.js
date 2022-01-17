const { TrelloPowerUp } = window;

TrelloPowerUp.initialize({
  "board-buttons": () => {
    console.log("Hello ".repeat(5));

    return [];
  },
});
