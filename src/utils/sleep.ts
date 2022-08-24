const sleep = (time: number) => {
    return new Promise(res => {
        setTimeout(() => {
            res(null);
        }, time);
    });
};

export default sleep;