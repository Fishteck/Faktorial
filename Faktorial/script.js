
const faktorial = num => {
    if (num === 1) {
        return 1;
    } else {
        return num * faktorial(num - 1);
    }
};
console.log(faktorial(4))