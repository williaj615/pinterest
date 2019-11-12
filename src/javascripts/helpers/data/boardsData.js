import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((board) => {
        boards.push(demBoards[board]);
      });
      resolve(boards);
      // console.log(boards);
    })
    .catch((error) => reject(error));
});


export default { getAllBoards };
