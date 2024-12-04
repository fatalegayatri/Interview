// create a function for getting sum of given array 
const arr = [1, 3, 4, "bc", "5"];
const getSum = (arr) => {
    const result = arr.reduce((acc, cou) => {
        if (Number.isNaN(+cou)) {
            return acc + 0;

        }
        else {
            return acc + +cou;
        }
    })
}


// create a function for get over count of given number;
const getOver = (num) => {
    const division = num / 6;
    const module = num % 6;
    return (console.log(division.toFixed(0) + "." + module));

}