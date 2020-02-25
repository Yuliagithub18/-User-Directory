import axios from "axios";

const URL = "https://randomuser.me/api/?results="

export default {
    search: function (numResults) {
        return axios.get(URL + numResults);
    }
}