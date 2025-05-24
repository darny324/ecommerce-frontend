import axios from 'axios';

export const loader = async ({request}) => {
    const searchParams = new URL(request.url).searchParams;
    const category = searchParams.get('category');
    const sortBy = searchParams.get('sortBy');
    try {
        let url = 'http://localhost:5000/api/v1/ecommerce/products?';
        if ( category ){
            url += `category=${category}`;
        }
        if ( sortBy ){
            let sort;
            switch ( sortBy ){
                case 'default': sort = 'name'; break;
                case 'latest': sort = 'arrivedDate'; break;
                case 'highest rated': sort = 'ratings'; break;
                default: sort = 'name'; break;
            }
            url += `&${sortBy=sort}`;
        }
        const res = await axios.get(url);
        return res.data;
    } catch (err){
        console.log(err, "Error in getting products");
        return;
    }
}