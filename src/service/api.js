import { CRM } from '../entities/class/crm';
import httpsInstance from './url';

export const useCRM = () => {
    const https = httpsInstance()

    const getCRMEsc = async () => {
        try {
            const response = await https.get("/crm-escritorio");
            const data = response.data;
            // if (data) {
            //     return data.map((item) => Associado(item));
            // } else {
            //     return null;
            // }
            console.log(data)
        } catch (error) {
            if (error.response && error.response.status) {
                throw { message: error.message, status: error.response.status };
            } else {
                throw error;
            }
        }
    };
    

    return {
        getCRMEsc,
    }
}