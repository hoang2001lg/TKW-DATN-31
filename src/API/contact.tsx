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