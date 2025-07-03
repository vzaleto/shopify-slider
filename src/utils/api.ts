import axios from "axios";

const api = async () =>{
    const response = await axios.get('http://localhost:4001/api')
    return response
}