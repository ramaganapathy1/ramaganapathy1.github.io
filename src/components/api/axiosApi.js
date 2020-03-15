import axios from "axios";

export default axios.create({
    baseURL:"http://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID bmDzue1ffMEQZ4lPNEVS8IGgMAz6UkB7rZzlO_HC-GA'
    }
})