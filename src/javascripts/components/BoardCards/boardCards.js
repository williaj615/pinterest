const printBoardCard = (board) => {
  let domString = '';
  if (board.id) {
    domString += `<div class="card boardCard">
    <h5 class="title">${board.name}</h5>
      <div class="card-body">
      <button id="${board.id}" class="btn btn-primary chosen-board">Click Me</button>
      <button href="#" class="btn btn-primary deleteBoard" id="board-${board.id}">Delete</button>
    </div>
</div>`;
  }
  return domString;
};

export default { printBoardCard };
