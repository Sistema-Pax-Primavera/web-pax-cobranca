import { CRM } from '../entities/class/crm';
import httpsInstance from './url';

export const useCRM = () => {
    const https = httpsInstance()

    const getCRMEsc = async () => {
        return https.post("/crm-escritorio");
    };

    return {
        getCRMEsc,
    }
}