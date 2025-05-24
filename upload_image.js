import axios from "axios";

const CLOUD_NAME = 'dabqsctow';
const UPLOAD_PRESET = 'ecommerce';

export const uploadImagesToCloudinary = async (images) => {
    const imageUrls = [];
    for ( let i = 0; i < images.length; i++ ){
        const formData = new FormData();
        formData.append("file", images[i].file);
        formData.append("upload_preset", UPLOAD_PRESET);
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            imageUrls.push(response.data.secure_url);
        } catch (err) {
            console.log(err, `Error in uploading images at Index ${i}`);
        }
    }
    return imageUrls;
}