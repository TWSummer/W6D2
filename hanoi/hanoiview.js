class HanoiView {
  constructor(game,$el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.installClickHandlers();
  }

  setupTowers(){
    for(let i = 0; i < 3 ; i++){
      const $ul=$('<ul></ul>');
      $ul.data("id", i+1);
      this.el.append($ul);
    }
    const $ul = $('ul').eq(0);
    for (let i = 0; i < 3; i++) {
      const $li=$('<li></li>');
      $li.data("id",i+1);
      $li.addClass(`disc${i+1}`);
      $ul.append($li);
    }
  }

  render() {

  }

  installClickHandlers() {
    const $uls = $('ul');
    $uls.each((index, ul) => {
      const $ul = $('ul');
      $ul.on("click", this.clickTower.bind(this));
    });
  }

  clickTower(event) {
    const $target = $(event.currentTarget);
    if (this.click) {
      $target.css("border-bottom-color","#000");
      this.click = null;

    } else {
      this.click = $target.data("id");
      console.log($target);
      $target.css("border-bottom-color","#f00");
    }
  }
}

module.exports = HanoiView;
