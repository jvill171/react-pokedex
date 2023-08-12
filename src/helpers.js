  
/** shuffleSplit() takes in an array, shuffles its contents,
 * and returns an array of 2 half-size arrays built from the shuffled array
 * */
const shuffleSplit = (arr) => {
    const arrMid = Math.floor(arr.length / 2); // Midpoint of array
    const shuffledArr = arr.slice(); //Create a copy of received array
    
    // Gett a random index from 0 to max
    function getRandIdx(max) {
        return Math.floor(Math.random() * max);
    }

    // Starting at idx = arr.length, swap a arr[randIdx] with arr[currIdx]
    // Then reduce the max idx by 1 until reaching first element in arr
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = getRandIdx(i + 1);
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    // Split the shuffled array into 2 arrays to be returned
    const arr1 = shuffledArr.slice(0, arrMid);
    const arr2 = shuffledArr.slice(arrMid);

    return [arr1, arr2];
}

export {shuffleSplit}