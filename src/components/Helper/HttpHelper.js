import axios from 'axios';
  

const httpHelper = axios.create({
    baseURL: "https://daleen-burger-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default httpHelper;