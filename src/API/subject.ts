import { TypeSubject } from "../Type/TypeSubject";
import instance from "./instance";

export const listSubject = () => {
    const url = `/subjects`;
    return instance.get(url);
}
export const removeSubject = (id: number) => {
    const url = `/subjects/${id}`;
    return instance.delete(url);
}
export const addSubject = (subject: TypeSubject) => {
    const url = `/subjects`;
    return instance.post(url, subject);
}
export const readSubject = (id: any) => {
    const url = `/subjects/${id}`;
    return instance.get(url);
}
export const updateSubject = (subject: TypeSubject) => {
    const url = `subjects/${subject.id}`
    return instance.put(url, subject)
}