import instance from './instance';

export const listCoach = () => {
    const url = `/Coachs`;
    return instance.get(url)
}
export const addCoach = (coach: any) => {
    const url = `/Coachs`;
    return instance.post(url,coach);
}
export const removeCoach = (id: any) => {
    const url = `/Coachs/${id}`;
    return instance.delete(url);
}
export const readCoach = (id: any) => {
    const url = `/Coachs/${id}`;
    return instance.get(url);
}
export const updateCoach = (coach: any) => {
    const url = `/Coachs/${coach.id}`;
    return instance.put(url, coach);
}