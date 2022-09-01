/* helper function to sleep customized time */
const sleep = (time: number) => {
    return new Promise(res => {
        setTimeout(() => {
            res(null);
        }, time);
    });
};

export default sleep;