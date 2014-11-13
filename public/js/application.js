window.updateHiscore = function() {
  $.get('/hiscores', function(data){
    if (data && data.length > 0) {
      var html = [];
      $.each(data, function(index, hiscore) {
        html.push("<li>" +
                  "<span class='score'>" + hiscore.score + "</span>" +
                  "<span class='player'>" + hiscore.name + "</span>" +
                  "</li>");
      })
      $('.hiscore ol').html(html.join(''));
    } else {
      $('.hiscore ol').html("<li class='no-data'>No data yet :)</li>");
    }
  });
};

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  $('.new-button').click(function(){
    var name = $('.game-start .name').val();
    if (name == '') {
      alert('Please input your name!');
      $('.game-start .name').focus();
      return;
    }
    window.player = name;
    $('.above-game .player').html('Hello, ' + name + '!');
    $('.game-start').hide();
    gameManager.restart();
    gameManager.inputManager.listen()
  });

  $('.game-start .name').keydown(function(e){
    if (e.keyCode == 13 && $('.game-start .name').val() != '') {
      $('.new-button').click();
    }
  });

  window.updateHiscore();
});
