const bears = [
   
];

const getBears = () => {
    return bears;
};

const addBear = (newBear) => {
    bears.push(newBear);
};

export default { getBears, addBear };