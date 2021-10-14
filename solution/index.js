module.exports = function (Homework) {

    function promisify(callback, ...args) {
        return new Promise(function(resolve, reject){ callback(...args, resolve)});
    }

    return async (array, fn, initialValue, cb) => {
        let result = initialValue;

        while (true) {
            let arrayLength = await promisify(array.length);
            let stop = await promisify(equal, arrayLength, 0);
            if (!stop) {
                let popVal = await promisify(array.pop);
                result = await promisify(fn, result, popVal, 0, array);
            } else {
                break;
            }
        }

        cb(result);
    }
}