export const promiseDelay = (time = 1000) => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
)