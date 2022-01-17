const { TrelloPowerUp } = window;

const importModalUrl = new URL("import.html", import.meta.url).toString();

const onBoardButtonClick = (t, opts) => {
  return t.modal({
    url: importModalUrl,
    fullscreen: false,
    title: "Import cards",
  });
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
