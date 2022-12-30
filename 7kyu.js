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


// const number = function(busStops){
//     const arr = []
//     busStops.map(a => a.reduce((a, b) => arr.push(a - b)))
//     return arr.reduce((a, b) => a + b)
// }
// console.log(number([[10,0],[3,5],[5,8]]))
// console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log(number([[0,0]]))


// const minValue = (values) => Number([...new Set(values)].sort((a, b) => a - b).join(''))
// console.log(minValue([1, 3, 1]))
// console.log(minValue([4, 8, 1, 4]))
// console.log(minValue([6, 7, 8, 7, 6, 6]))


// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     for (years; p0 < p; years++) {
//         p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years;
// }
// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// console.log(nbYear(1500000, 0.25, 1000, 2000000))


// const sumOfMinimums = (arr) => arr.reduce((p, c) => p + Math.min(...c), 0)
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))


// function XO(str) {
//     const arr = str.toLowerCase().split('')
//     return arr.filter(a => a === 'o').length === arr.filter(a => a === 'x').length
// }
// console.log(XO('xo'))
// console.log(XO("xxOo"))
// console.log(XO("Oo"))


// const mxdiflg = (a1, a2 ) => {
//     if(a1.length === 0 || a2.length === 0){
//         return -1
//     }
//     let l1 = a1.map(str => str.length)
//     let l2 = a2.map(str => str.length)
//     return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
// }
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
//     ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))


// const longest = (s1, s2) => [...new Set((s1 + s2).split(''))].sort().join('')
// console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// console.log(longest("inmanylanguages", "theresapairoffunctions"))


// const smallEnough = (a, limit) => Math.max(...a) <= limit
// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))


// const largestPairSum = (numbers) => numbers.sort((a, b) => b - a).slice(0,2).reduce((a, b) => a + b)
// console.log(largestPairSum([10,14,2,23,19]))
// console.log(largestPairSum([-10, -8, -16, -18, -19]))
// console.log(largestPairSum([1,2,3,4,6,-1,2]))


// const reverseLetter = (str) => str.replace(/[^a-z]/gi, '').split('').reverse().join('')
// console.log(reverseLetter("krishan"))
// console.log(reverseLetter("ultr53o?n"))
// console.log(reverseLetter("ab23c"))


// const evenNumbers = (array, number) => array.filter(number => number % 2 === 0).slice(-number)
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))


// const getEvenNumbers = (numbersArray) => numbersArray.filter(n => n % 2 === 0)
// console.log(getEvenNumbers([1, 3, 9]))
// console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]))
// console.log(getEvenNumbers([12, 14, 15]))


// const SequenceSum = (function() {
//     function SequenceSum() {}
//     SequenceSum.showSequence = function(count) {
//         let arr = []
//         if (count === 0) return '0=0'
//         if (count < 0) return `${count}<0`
//         for (let i = 0; i <= count; i++) {
//             arr.push(i)
//         }
//         const sum = arr.reduce((a, b) => a + b)
//         const str = arr.join('+')
//         return `${str} = ${sum}`
//     };
//     return SequenceSum;
// })();
// console.log(SequenceSum.showSequence(6))


// function DNAStrand(dna){
//     let obj = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
//     return dna.replace(/./g, x => obj[x])
// }
// console.log(DNAStrand("AAAA"))
// console.log(DNAStrand("ATTGC"))
// console.log(DNAStrand("GTAT"))


// const getCount = (str) => str.length - str.replace(/[aeiou]/gi, '').length
// console.log(getCount("abracadabra"))


// const roundToNext5 = (n) => Math.ceil(n/5)*5
// console.log(roundToNext5(3))
// console.log(roundToNext5(17))
// console.log(roundToNext5(132))


// let number = (arr) => arr.map((a, i) => `${i + 1}: ${a}`)
// console.log(number([]))
// console.log(number(["a", "b", "c"]))
