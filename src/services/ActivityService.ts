import { IActivity } from "types/index";

export class ActivityService {
    static async getRandomActivity(): Promise<IActivity> {
        try {
            const response = await fetch('https://www.boredapi.com/api/activity');
            if (!response.ok) {
                throw new Error('Response error');
            }
            const data: IActivity = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with fetch random activity:', error);
            throw error;
        }
    }
}