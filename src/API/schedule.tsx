import { ScheduleType } from "../Type/ScheduleType";
import instance from "./instance";
export const addsche = (schedule:ScheduleType)=>{
    const url = '/schedules';
    return instance.post(url,schedule);
}
export const listsche = ()=>{
    const url = '/schedules';
    return instance.get(url);
}
export const readsche = (id: any) => {
    const url = `/schedules/${id}`;
    return instance.get(url);
}  
export const removesche = (id: number)=>{
    const url = `/schedules/${id}`;
    return instance.delete(url);
}
export const updatesche = (schedule: any) => {
    const url = `/schedules/${schedule.id}`;
    return instance.put(url,schedule);
}