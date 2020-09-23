const keyBoardListnner = () => {
  const observers = [];

  const subscribe = (observer) => {
    observers.push(observer);
  };

  const notifyAll = (command) => {
    console.log(`Notificando ${observers.length} observadores`);
    for (const observerFunction of observers) {
      observerFunction(command);
    }
  };

  document.addEventListener("keydown", (event) =>
    notifyAll({
      playerID: "player1",
      key: event.key,
    })
  );

  return {
    subscribe,
  };
};
export default keyBoardListnner;
