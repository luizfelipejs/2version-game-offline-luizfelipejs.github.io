const renderScreen = (state, context) => {
  context.fillStyle = "white";
  context.clearRect(0, 0, 50, 50);

  state.players.map((player) => {
    context.fillStyle = "black";
    context.fillRect(player.x, player.y, 1, 1);
  });

  state.fruits.map((fruit) => {
    context.fillStyle = "green";
    context.fillRect(fruit.x, fruit.y, 1, 1);
  });

  requestAnimationFrame(() => renderScreen(state, context));
};

export default renderScreen;
