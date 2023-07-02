let callbacks = [];

export const subscribe = (callback) => {
    if (typeof callback !== 'function') {
        
        return;
    }
    console.log("subscribing");
    callbacks.push(callback);
}

export const fire = () => {
    callbacks.forEach((callback) => callback());
}