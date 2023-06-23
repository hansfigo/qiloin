import { v4 as uuidv4 } from 'uuid';


import { writable } from 'svelte/store';
export const user = writable([
    {
        id: 123,
        email: 'test@example.com',
        password: 'secret'
    }
]);
 const create = (newUser : any) => {
    const userExist = find({ email: newUser.email})
    if(userExist) {
       return false;
    }
    user.update((u) => [...u, newUser]);
    return newUser;
};
export const remove = (id : any) => {
    user.update((u) => u.filter((u) => u.id !== id));
};
export const find = (obj : any) => {
    let existingUser;
    user.subscribe((value) => {
        if (value) {
            if (obj.email) {
                existingUser = value.find((item) => item.email === obj.email);
            } else {
                existingUser = value.find((item) => item.id === obj.id);
            }
        }
    });
    return existingUser;
};

export const getUserByEmail = async (email : string) => {
    const existingUser = find({
        email: email
    });
    if (!existingUser) return Promise.resolve(null);
    return Promise.resolve(existingUser);
};

export const getUserById = async (id : any) => {
    const existingUser = find({ id: id });
    if (!existingUser) return Promise.resolve(null);
    return Promise.resolve(existingUser);
};

export const createSession = (email : any,password : any) => {
    const session = {
        id: uuidv4(),
        email,
        password
    };
    const response = create(session);
    if(!response) {
        return Promise.resolve(null);
    }
    return Promise.resolve(response);
};