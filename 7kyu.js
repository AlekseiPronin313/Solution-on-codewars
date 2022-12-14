// function sortByLength (array) {
//     return array.sort((a, b) => a.length - b.length)};
// sortByLength(["Beg", "Life", "I", "To"])


// const addBinary = (a,b) => (a + b).toString(2)
// console.log(addBinary(4,2))


// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }
// console.log(isIsogram("isogramm"))
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram(""))


// const friend = friends => friends.filter(friend => friend.length === 4);
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))


// const isSquare = n => Number.isInteger(Math.sqrt(n))
// console.log(isSquare(25))
// console.log(isSquare(26))
// console.log(isSquare(0))
// console.log(isSquare(4))


// function findShort(s) {
//     const arr = []
//     s.split(' ').filter((t) => arr.push(Number(t.length)))
//     return Math.min(...arr)
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// const getMiddle = (s) => s.substr((s.length - 1) / 2, 2 - s.length % 2)
// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))
// console.log(getMiddle('A'))


// const squareDigits = (num) => Number(Array.from(num.toString(), Number).map((a) => Math.pow(a, 2)).join(''))
// console.log(squareDigits(3212))
// console.log(squareDigits(2112))
// console.log(squareDigits(0))


// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)
// console.log(binaryArrayToNumber([0,0,1,1]))


// const reverseWords = (str) => str.split(' ').map(a => a.split('').reverse().join('')).join(' ')
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// console.log(reverseWords('apple'))
// console.log(reverseWords('a b c d'))


// function highAndLow(numbers) {
//   const num = numbers.split(' ')
//   return `${Math.max(...num)} ${Math.min(...num)}`
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// console.log(highAndLow("1 2 3"))


// const filter_list = (l) => l.filter(n => typeof n === 'number')
// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))


// function getDivisorsCnt(n){
//   const arr = []
//    for (let i = 0; i <= n; i++) {
//       if (Number.isInteger(n / i) === true) {
//          arr.push(i)
//       }
//    }
//    return arr.length
// }
// console.log(getDivisorsCnt(1))
// console.log(getDivisorsCnt(10))
// console.log(getDivisorsCnt(54))


// function sumTwoSmallestNumbers(numbers) {
//     const num = numbers.sort((a, b) => a - b)
//     return num[0] + num[1]
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))


// function minMax(arr){
//     const a = []
//     a.push(Math.min(...arr))
//     a.push(Math.max(...arr))
//     return a
// }
// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([5]))


// const validatePIN = (pin) => pin.replace(/\D/g, '') === pin && (pin.length === 4 || pin.length === 6)
// console.log(validatePIN("1234"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("-1.234"))


// const accum = (s) => s.split('').map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1)).join('-')
// console.log(accum("ZpglnRxqenU"))
// console.log(accum("cwAt"))
// console.log(accum("abcd"))


// const capitals = (word) => {
//         const arr = []
//         word.split('')
//         .map((s, i) => {
//         if (s !== s.toLowerCase()) {
//             return arr.push(i)
//         }
//     })
//     return arr
// }
// console.log(capitals('CodEWaRs'))


// const isTriangle = (a,b,c) => (a + b > c) && (a + c > b) && (b + c > a)
// console.log(isTriangle(1,2,2))
// console.log(isTriangle(7,2,2))


// const stray = (numbers) => numbers.reduce((a, b) => a ^ b)
// console.log(stray([1, 1, 2]))
// console.log(stray([1, 2, 2]))
// console.log(stray([3, 3, 3, 4]))


// const sumDigits = (number) => Math.abs(number).toString().split('').reduce((a, b) => a + +b, 0)
// console.log(sumDigits(10))
// console.log(sumDigits(99))
// console.log(sumDigits(-32))


// const getSum = ( a,b ) => {
//     const min = Math.min(a, b)
//     const max = Math.max(a, b)
//     let num = 0
//     for (let i = min; i <= max; i++) {
//         num += i
//     }
//     return num
// }
// console.log(getSum(-1,0))
// console.log(getSum(0,-1))
// console.log(getSum(3,3))
// console.log(getSum(-1,2))


// const oddOrEven = (array) =>  array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even"
// console.log(oddOrEven([0, 1, 2]))
// console.log(oddOrEven([0]))
// console.log(oddOrEven([0, -1, -5]))


// function arithmetic(a, b, operator){
//     if (operator === 'add') {
//         return a + b
//     } else if (operator === 'subtract') {
//         return a - b
//     } else if (operator === 'multiply') {
//         return a * b
//     } else  if (operator === 'divide') {
//         return a / b
//     }
// }
// console.log(arithmetic(1, 2, "add"))
// console.log(arithmetic(8, 2, "subtract"))
// console.log(arithmetic(5, 2, "multiply"))
// console.log(arithmetic(8, 2, "divide"))


// const solution = (nums) => nums === null ? [] : nums.sort((a, b) => a - b)
// console.log(solution([1,2,3,10,5]))
// console.log(solution(null))
// console.log(solution([]))
// console.log(solution([20, 2, 10]))
