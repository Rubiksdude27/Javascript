javascript:
alert('wake up');
alert('Hello, you here');
alert('okay your awake');
const play = confirm('you want to play this game?');
if (play == true) {
  x = 'okay was clicked';
} else {
  x = 'cancel was clicked';
}
alert(x);
if (x == 'okay was clicked') {
  const y = prompt("What is the answer to this riddle, what runs around your yard but doesn't move?");
  if (y == 'a fence') {
    alert('correct');
    var level2 = true;
  } else {
    var level2 = false;
  }
  if (level2 == true) {
    const z = prompt('What is tall when its young and short when its old?');
    if (z == 'a candle') {
      alert('correct');
      var level3 = true;
    } else {
      var level3 = false;
    }
  }
}
