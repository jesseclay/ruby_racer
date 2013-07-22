$(document).ready(function () {

  
  var tracks = ['#player1_strip', '#player2_strip'];
  var playerKeys = [65,76];
  var trackLength = 70;
  for (var i = 0; i < tracks.length; i++) {
    for (var j = 0; j < trackLength; j++) {
      $(tracks[i]).append("<td>|</td>");
      $(tracks[i]).append("<td> </td>");
    }
    $(tracks[i]).append("<td class='finish'>=</td>");
  }

  var raceOver = false;

  function drivePlayer(player) {
    var current = $(player).find('.active');
    current.next().addClass('active');
    current.removeClass('active');
  }

  function finished() {
    if ($('.finish').hasClass('active')) {
      var winning_track = $('.finish.active');
      winning_track.parent().append('WINNER');
      $("tr td:last:not('.active')").append('LOSER');
      raceOver = true;
      // this.parent().append('')
      return true;
    }
    return false;
  }

  // Move player on keyup
  $(document).on('keyup', function(e){
    if (raceOver === false) {
      for (var i = 0; i < tracks.length; i++){
        if (playerKeys[i] === e.keyCode){
          drivePlayer(tracks[i]);
        }
      }
      if (finished()) {
        // console.log('woot!');
      }
    }
  });


});
