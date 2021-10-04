const makeAllCaps = (arr) => {
    return new Promise((reslove, reject) => {
        if (arr.find(val => typeof val === 'number')) {
            reject("have number!")
        }
        else {
            reslove(arr.map(val => val.toUpperCase()))
        }
    })
}
const sortWords = (arr) => {
    return new Promise((reslove, reject) => {
        if (arr.find(val => typeof val === 'number')) {
            reject("have number!")
        }
        else reslove(arr.sort((a, b) => a.localeCompare(b)));
    })
}
const runBoth = (arr) => {
    makeAllCaps(arr).then(res => sortWords(res))
        .then(res => {
            console.log(res);
        })
        .catch(() => {
            console.log("number alert")
        })
}
runBoth([1,2,3])
runBoth(["rawi","ahmed"])