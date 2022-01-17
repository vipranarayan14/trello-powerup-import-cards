const { TrelloPowerUp } = window;

const onBoardButtonClick = (t, opts) => {
  alert("Board button clicked");

  return t.modal({
    // the url to load for the iframe
    url: new URL("import.html", import.meta.url),
    // whether the modal should stretch to take up the whole screen
    fullscreen: true,
    // optional function to be called if user closes modal (via `X` or escape, etc)
    callback: () => console.log("Goodbye."),
    // optional title for header chrome
    title: "Import cards",
    // optional action buttons for header chrome
    // max 3, up to 1 on right side
    actions: [
      {
        icon: new URL("icon.png", import.meta.url),
        url: "https://google.com",
        alt: "Leftmost",
        position: "left",
      },
    ],
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
