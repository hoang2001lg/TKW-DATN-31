import { PackagesType } from "../Type/Packages";
import instance from "./instance";
export const addpack = (packages:PackagesType)=>{
    const url = '/packagess';
    return instance.post(url,packages);
}
export const listpack = ()=>{
    const url = '/packagess';
    return instance.get(url);
}
export const readpack = (id: any) => {
    const url = `/packagess/${id}`;
    return instance.get(url);
}  
export const removepack = (id: number)=>{
    const url = `/packagess/${id}`;
    return instance.delete(url);
}
export const updatepack = (packages: any) => {
    const url = `/packagess/${packages.id}`;
    return instance.put(url,packages);
}