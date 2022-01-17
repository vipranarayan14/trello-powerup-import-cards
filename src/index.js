const { TrelloPowerUp } = window;

const onBoardButtonClick = (t, opts) => {
  alert("Import Cards");
};

TrelloPowerUp.initialize({
  "board-buttons": () => {
    return [
      {
        text: "Import Cards",
        callback: onBoardButtonClick,
      },
    ];
  },
});
