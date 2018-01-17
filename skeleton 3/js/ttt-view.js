class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    const userClick = (event) => {
      const $currentTarget = $(event.currentTarget);
      this.makeMove($currentTarget);
    };
    $('li').on("click", userClick);
  }

  makeMove($square) {
    if ($square.text() === "") {
      $square.text(this.game.currentPlayer);
      $square.css("background-color", "#fff");
      this.game.playMove([$square.data("row"),$square.data("col")]);
      if (this.game.isOver()) {
        // alert(`Game over. ${this.game.winner()} wins!`);
        this.endGame();
      }
    } else {
      alert("Invalid move! Try again.");
    }
  }

  endGame() {
    const $li = $('li');
    const winner = this.game.winner();
    $li.each((index, li) => {
      li = $(li);
      if (li.text() === winner){
        li.css("background-color","#0f0");
        li.css("color","#fff");
      }else{
        li.css("background-color","#fff");
        li.css("color","#f00");
      }
    });
    if (winner){
      const h2 = $('<h2></h2>');
      h2.text(`You win, ${winner}!`);
      h2.css("text-align","center");
      this.el.append(h2);
    }else{
      const h2 = $('<h2></h2>');
      h2.text(`It's a draw!`);
      h2.css("text-align","center");
      this.el.append(h2);
    }
  }

  setupBoard() {
    let $ul=$('<ul></ul>');
    this.el.append($ul);
    for(let i = 0 ; i<9 ; i++){
      const $li = $('<li></li>');
      $li.data("row", Math.floor(i/3));
      $li.data("col", i % 3);
      $ul.append($li);
    }
  }
}

module.exports = View;
