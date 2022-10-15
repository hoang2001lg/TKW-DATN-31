
import { Receptionists } from "../Type/receptionists";
import instance from "./instance";
export const addReceptionist = (reception:Receptionists)=>{
    const url = '/receptionist';
    return instance.post(url,reception);
}
export const listReceptionist = ()=>{
    const url = '/receptionist';
    return instance.get(url);
}
export const readReceptionist = (id: any) => {
    const url = `/receptionist/${id}`;
    return instance.get(url);
}  
export const removeReceptionist = (id: number)=>{
    const url = `/receptionist/${id}`;
    return instance.delete(url);
}
export const updateReceptionist = (reception: any) => {
    const url = `/receptionist/${reception.id}`;
    return instance.put(url,reception);
}