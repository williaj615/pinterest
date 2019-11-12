
import './boards.scss';
import utilities from '../../helpers/utilities';
import boardsData from '../../helpers/data/boardsData';
import boardCards from '../BoardCards/boardCards';

const getBoardsByUid = (uid) => {
  boardsData.getAllBoards(uid)
    .then((boards) => {
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardCards.printBoardCard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards-container', domString);
    })
    .catch((error) => console.error(error));
};

export default { getBoardsByUid };
