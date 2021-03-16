import axios from 'axios';
import React from 'react';

const httpHelper = axios.create({
    baseURL: "https://daleen-burger-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default httpHelper;