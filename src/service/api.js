import { CRM } from '../entities/class/crm';
import httpsInstance from './url';

export const useCRM = () => {
    const https = httpsInstance()

    const getCRMEsc = async () => {
        try {
            const response = await https.get("/crm-escritorio");
            const data = response.data;
            if (data && Array.isArray(data)) {
                // Mapear os dados para a classe CRM
                const crmData = data.map(item => {
                    return new CRM(item);
                });
                // Retorna os dados mapeados
                return crmData;
            } else {
                return null;
            }
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