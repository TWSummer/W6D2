const View = require("./ttt-view");// require appropriate file
const Game = require("../../solution\ 4/game");// require appropriate file

$( () => {
  const game = new Game();
  const $el = $(".ttt");
  const view = new View(game, $el);
  view.setupBoard();
  view.bindEvents();
});
