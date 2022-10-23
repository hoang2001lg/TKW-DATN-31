import { ContactType } from "../Type/Contact";
import instance from "./instance";
export const addcontact = (contact:ContactType)=>{
    const url = '/contacts';
    return instance.post(url,contact);
}
export const listcontact = ()=>{
    const url = '/contacts';
    return instance.get(url);
}
export const readcontact = (id: any) => {
    const url = `/contacts/${id}`;
    return instance.get(url);
}  
export const removecontact = (id: number)=>{
    const url = `/contacts/${id}`;
    return instance.delete(url);
}
export const updatecontact = (contact: any) => {
    const url = `/contacts/${contact.id}`;
    return instance.put(url,contact);
}