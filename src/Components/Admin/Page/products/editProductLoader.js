import axios from "axios";
import { BACKEND_URL } from "../../../../main";


export const loader = async ({params}) => {
    const {id} = params;
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/ecommerce/products/${id}`);
        console.log(params);
        return res.data;
    } catch (err) {
        console.log(err);
        return {status:false};
    }
}