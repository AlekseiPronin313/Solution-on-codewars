// const positiveSum = (arr) => arr.filter(x => x >= 0).reduce((a, c) => a + c, 0)
// console.log(positiveSum([1,-2,3,4,5]))
// console.log(positiveSum([-1,-2,-3,-4,-5]))
// console.log(positiveSum([]))


// const combat = (health, damage) => health >= damage? health - damage : 0
// console.log(combat(92, 8))
// console.log(combat(20, 30))


// const check = (a, x) => a.includes(x)
// console.log(check([101, 45, 75, 105, 99, 107], 107))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))


// const areaOrPerimeter = (l , w) => l === w ? l * w : (l + w) * 2
// console.log(areaOrPerimeter(3,  3))
// console.log(areaOrPerimeter(6, 10))


// const checkForFactor = (base, factor) =>  base % factor  === 0
// console.log(checkForFactor(63,7))
// console.log(checkForFactor(2453,5))


// const litres = (time) => Math.floor(time * 0.5)
// console.log(litres(2))
// console.log(litres(11.8))


// const smash = (words) =>  words.join(' ')
// console.log(smash(["hello", "world"]))
// console.log(smash([]))


// function between(a, b) {
//     const arr = []
//    for (let i = a; i <= b; i++) {
//        arr.push(i)
//    }
//    return arr
// }
// console.log(between(1, 4))
// console.log(between(-2, 2))


// function findNeedle(haystack) {
//     const a = []
//     haystack.map((s, i) => {
//         return s === "needle" ? a.push(`found the needle at position ${i}`) : undefined
//     })
//     return a.join('')
// }
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


// const doubleChar = (str) => str.split("").map(c => c + c).join("");
// console.log(doubleChar("1337"))
// console.log(doubleChar("abcd"))
// console.log(doubleChar("%^&*("))


// const problem = (x) => typeof x === "number" ? x * 50 + 6 : "Error"
// console.log(problem(1))
// console.log(problem("hello"))
// console.log(problem(1.2))


// const nameShuffler = (str) => str.split(' ').reverse().join(' ')
// console.log(nameShuffler('Mary jeggins'))


// const basicOp = (operation, value1, value2) => eval(value1 + operation + value2)
// console.log(basicOp('+', 4, 7))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('-', 15, 18))


// const abbrevName = (name) => name.split(' ').map(a => a[0].toUpperCase()).join('.')
// console.log(abbrevName("Sam Harris"))
// console.log(abbrevName("P favuzzi"))


// const index = (array, n) => array[n] === undefined ? -1 : Math.pow(array[n], n)
// console.log(index([1, 2],3))
// console.log(index([1, 2, 3, 4],2))
// console.log(index([1,1,1,1,1,1,1,1,1,2], 9))


// const findAverage = (array) => array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length
// console.log(findAverage([1,1,1]))
// console.log(findAverage([1,2,3]))
// console.log(findAverage([1,2,3,4]))


// const hero = (bullets, dragons) => bullets/2 >= dragons
// console.log(hero(10, 5))
// console.log(hero(7, 4))
// console.log(hero(0, 1))


// const enough = (cap, on, wait) =>  (wait + on) >= cap ? on + wait - cap : 0
// console.log(enough(10, 5, 5))
// console.log(enough(100, 60, 50))
// console.log(enough(20, 5, 5))


// const findDifference = (a, b) => Math.abs((a.reduce((a, b) => (a * b))) - (b.reduce((a, b) => (a * b))))
// console.log(findDifference([3, 2, 5], [1, 4, 4]))
// console.log(findDifference([9, 7, 2], [5, 2, 2]))
// console.log(findDifference([15, 20, 25], [10, 30, 25]))


// const arr = N => {
//     const a = []
//     for (let i = 0; i < N; i++ ) {
//         a.push(i)
//     }
//    return a
// }
// console.log(arr(4))
// console.log(arr())


// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length
// }
// const array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  null ,
//     false, false, true,  true ];
// console.log(countSheeps(array1))


// const summation = function (num) {
//     const arr = []
//     for (let i = 0; i < num; i++) {
//         arr.push(i + 1)
//     }
//     return arr.reduce((a, b) => a + b)
// }
// console.log(summation(1))
// console.log(summation(2))
// console.log(summation(8))


// function bmi(weight, height) {
//     const num = weight / Math.pow(height, 2)
//     if (num <= 18.5) {
//         return "Underweight"
//     } else if (num <= 25) {
//         return "Normal"
//     } else if (num <= 30) {
//         return "Overweight"
//     } else if (num > 30) {
//         return "Obese"
//     }
// }
// console.log(bmi(80, 1.80))


// const quarterOf = (month) => Math.ceil(month / 3)
// console.log(quarterOf(3))
// console.log(quarterOf(8))
// console.log(quarterOf(11))


// const removeExclamationMarks = (s) => s.replace(/!/g, '')
// console.log(removeExclamationMarks("Hello! World!"))


// function points(games) {
//     let sum = 0
//     games.map(a => {
//         if (a[0] > a[2]) {
//             sum += 3
//         } else if (a[0] === a[2]) {
//             sum +=1
//         }
//     })
//     return sum
// }
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
// console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))


// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!"
//     } else if (p1 === 'rock' && p2 === 'scissors') {
//         return 'Player 1 won!'
//     } else if (p1 === 'scissors' && p2 === 'paper') {
//         return 'Player 1 won!'
//     } else if (p1 === 'paper' && p2 === 'rock') {
//         return 'Player 1 won!'
//     } else {
//         return 'Player 2 won!'
//     }
// };
// console.log(rps('rock', 'scissors'))
// console.log(rps('scissors', 'rock'))
// console.log(rps('rock', 'rock'))
// console.log(rps('scissors', 'rock'))


// const sumStr = (a,b) => String(Number(a) + Number(b))
// console.log(sumStr("4","5"))
// console.log(sumStr("","5"))
// console.log(sumStr("",""))
// console.log(sumStr("-5","2"))


// const areYouPlayingBanjo = (name) => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
// console.log(areYouPlayingBanjo("Adam"))
// console.log(areYouPlayingBanjo("Ringo"))
// console.log(areYouPlayingBanjo("rolf"))


// const repeatStr = (n, s) => s.repeat(n)
// console.log(repeatStr(3, "*"))
// console.log(repeatStr(5, "#"))
// console.log(repeatStr(2, "ha "))


// function updateLight(current) {
//   if (current === "green") {
//       return "yellow"
//   } else if (current === "yellow") {
//       return "red"
//   } else if (current === "red") {
//       return "green"
//   }
// }
// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))


// const min = (list) => Math.min(...list)
// const max = (list) => Math.max(...list)
// console.log(min([-52, 56, 30, 29, -54, 0, -110]))
// console.log(max([4,6,2,1,9,63,-134,566]))


// const invert = (array) => array.map(n => -n)
// console.log(invert([1,2,3,4,5]))
// console.log(invert([1,-2,3,-4,5]))
// console.log(invert([]))
// console.log(invert([0]))


// function paperwork(n, m) {
//  if (n < 0 || m < 0) {
//      return 0
//  } else {
//      return n * m
//  }
// }
// console.log(paperwork(5,5))
// console.log(paperwork(-5,5))
// console.log(paperwork(5,-5))


// const booleanToString = (b) => String(b)
// console.log(booleanToString(true))
// console.log(booleanToString(false))


// const countSheep = (num) => {
//     if (num > 0) {
//         const arr = []
//         for (let i = 0; i < num; i++) {
//             arr.push(`${i + 1} sheep...`)
//         }
//         return arr.join('')
//     } else {
//         return ''
//     }
// }
// console.log(countSheep(0))
// console.log(countSheep(3))


// const century = year => {
//    return Math.ceil(year/100)
// }
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(87))


// const digitize = n => Array.from(n.toString(), Number).reverse()
// console.log(digitize(35231))


// const strCount = (str, letter) => str.split('').filter((s) => s.toLowerCase() == letter.toLowerCase()).length
// console.log(strCount('Hello', 'L'))


// const humanYearsCatYearsDogYears = (humanYears) => {
//     const arr= []
//     if (humanYears == 1) {
//         const year = humanYears * 1
//         const cot = 15
//         const dog = 15
//         arr.push(year, cot , dog)
//     } else if (humanYears == 2) {
//         const year = humanYears * 1
//         const cot = 9 + 15
//         const dog = 9 + 15
//         arr.push(year, cot , dog)
//     } else if (humanYears >= 3) {
//         const year = humanYears
//         const cot = (humanYears - 2) * 4 + 9 + 15
//         const dog = (humanYears - 2) * 5 + 9 + 15
//         arr.push(year, cot , dog)
//     }
//     return arr
// }
// console.log(humanYearsCatYearsDogYears(1))
// console.log(humanYearsCatYearsDogYears(2))
// console.log(humanYearsCatYearsDogYears(3))
// console.log(humanYearsCatYearsDogYears(10))


// function rentalCarCost(d) {
//     if (d >= 7) {
//         return d * 40 - 50
//     } else if (d >= 3) {
//         return d * 40 - 20
//     } else {
//         return d * 40
//     }
// }
// console.log(rentalCarCost(2))
// console.log(rentalCarCost(4))
// console.log(rentalCarCost(8))

// const opposite = number => number * -1
// console.log(opposite(12))


// const cockroachSpeed = (s) => Math.floor(s * 100000 / 3600)
// console.log(cockroachSpeed(1.08))


// function countPositivesSumNegatives(input) {
//     return input && input.length ?
//         [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }
// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// let actual = countPositivesSumNegatives(testData);
// console.log(actual)


// const DNAtoRNA = (dna) => dna.split('').map(n => n === 'T' ? 'U' : n).join('')
// console.log(DNAtoRNA("TTTT"))
// console.log(DNAtoRNA("GCAT"))
// console.log(DNAtoRNA("GACCGCCGCC"))


// const mouthSize = (animal) => animal.toLowerCase() === "alligator" ? "small" : "wide"
// console.log(mouthSize("ant bear"))
// console.log(mouthSize("alligator"))


// const correct = (string) => string.replace(/1/gi, 'I').replace(/0/gi, 'O').replace(/5/gi, 'S')
// console.log(correct("L0ND0N"))
// console.log(correct("DUBL1N"))
// console.log(correct("51NGAP0RE"))


// const hello = (name) => `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
// console.log(hello(''))
// console.log(hello())
// console.log(hello('aleX'))


// const reverse = (string) => string.split(' ').reverse().join(' ')
// console.log(reverse('I am an expert at this'))
// console.log(reverse(''))
// console.log(reverse('CodeWars'))


// const laLigaGoals = 43
// const championsLeagueGoals = 10
// const copaDelReyGoals = 5
// const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals
// console.log(totalGoals)


// const square = (n) => Math.pow(n, 2)
// console.log(square(3))


// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals
// console.log(goals(3, 2 ,3))


// const binToDec = (bin) => parseInt(bin, 2)
// console.log(binToDec("1001001"))


// const getChar = (c) =>  String.fromCharCode(c)
// console.log(getChar(55))


// const Kata = {
//     getVolumeOfCuboid : (length, width, height) => length * width * height
// }
// console.log(Kata.getVolumeOfCuboid(1,2,2))


// function rainAmount(mm){
//     if (mm >= 40) {
//         return "Your plant has had more than enough water for today!"
//     } else  {
//         return `You need to give your plant ${Math.abs(mm - 40)}mm of water`
//     }
// }
// console.log(rainAmount(100))
// console.log(rainAmount(39))


// const toBinary = (n) => Number(n.toString(2))
// console.log(toBinary(1))
// console.log(toBinary(14))


// const hexToDec = (hexString) => parseInt(hexString, 16)
// console.log(hexToDec("a"))
// console.log(hexToDec("FF"))
// console.log(hexToDec("-C"))


// const reverseList = (list) => list.reverse()
// console.log(reverseList([1,2,3,4]))
// console.log(reverseList([3,1,5,4]))


// const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
// console.log(hoopCount(3))
// console.log(hoopCount(11))


// const apple = (x) => Math.pow(x, 2) >= 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
// console.log(apple('50'))
// console.log(apple(4))


// const boolToWord = ( bool ) => bool? 'Yes' : 'No'
// console.log(boolToWord(true))
// console.log(boolToWord(false))


// const preFizz = (n) => {
//     const num = []
//     for (let i = 1; i <= n; i++) {
//         num.push(i)
//     }
//     return num
// }
// console.log(preFizz(1))
// console.log(preFizz(3))
// console.log(preFizz(7))


// const addLength = (str) => str.split(' ').map(a => a + ' ' + a.length)
// console.log(addLength('apple ban'))
// console.log(addLength('you will win'))


// const distinct = (a) => [...new Set(a)]
// console.log(distinct([1, 1, 2]))


// function findMultiples(integer, limit) {
//     const arr = []
//     for (let i = integer; i <= limit; i += integer) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(findMultiples(5, 25))
// console.log(findMultiples(1, 2))
// console.log(findMultiples(11, 54))


// const stringToNumber = (str) => Number(str)
// console.log(stringToNumber("1234"))
// console.log(stringToNumber("-7"))


// const printArray = (array) => array.join(',')
// console.log(printArray([2,4,5,2]))


// const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// console.log(animal({name:"dog",legs:4,color:"white"}))
// console.log(animal({name:"rabbit",legs:4,color:"gray"}))


// const check = (a,x) => a.some(s => s === x);
// console.log(check([66, 101], 66))
// console.log(check(['t', 'e', 's', 't'], 'e'))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))


// const derive = (coefficient,exponent) => `${coefficient * exponent}x^${exponent - 1}`
// console.log(derive(7,8))
// console.log(derive(5,9))


// const dutyFree = (normPrice, discount, hol) => (Math.floor(hol / (normPrice * discount/100)))
// console.log(dutyFree(12, 50, 1000))
// console.log(dutyFree(17, 10, 500))
// console.log(dutyFree(24, 35, 3000))


// const spEng = (sentence) => /english/i.test(sentence)
// console.log(spEng("english"))
// console.log(spEng("egnlish"))


// const mergeArrays = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
// console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
// console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))


// const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// console.log(usdcny(15))
// console.log(usdcny(7592))


// const shortcut = (string) => string.replace(/[aeiou]/g, '')
// console.log(shortcut('hello'))
// console.log(shortcut('how are you today?'))
// console.log(shortcut("HELLO"))


// const replace = (s) => s.replace(/[aeiou]/gi, '!')
// console.log(replace("Hi!"))
// console.log(replace("!Hi! Hi!"))
// console.log(replace("aeiou"))


// function calculator(a,b,sign) {
//     try
//     { return eval(a+sign+b); }
//     catch(e)
//     { return "unknown value"; }
// }
// console.log(calculator(1,2,"-"))
// console.log(calculator(6,2,"$"))
// console.log(calculator(6,"h","*"))


// "use strict";
// const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b)
// console.log(flattenAndSort([]))
// console.log(flattenAndSort([[], []]))
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))


// const findAverage = (nums) => (nums.reduce((a, b) => a + b) ) / nums.length
// console.log(findAverage([1]))
// console.log(findAverage([1, 3, 5, 7]))


// function pipeFix(numbers){
//     const arr = []
//     const min = Math.min(...numbers)
//     const max = Math.max(...numbers)
//     for (let i = min; i <= max; i++) {
//        arr.push(i)
//     }
//     return arr
// }
// console.log(pipeFix([1,2,3,5,6,8,9]))
// console.log(pipeFix([1,2,3,12]))
// console.log(pipeFix([-1,4]))


// const stringClean = (s) => s.replace(/[0-9]/g, '')
// console.log(stringClean("! !"))
// console.log(stringClean("123456789"))
// console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"))


// const howManyLightsabersDoYouOwn = (name) => name === "Zach" ? 18 : 0
// console.log(howManyLightsabersDoYouOwn())
// console.log(howManyLightsabersDoYouOwn('Adam'))
// console.log(howManyLightsabersDoYouOwn("Zach"))


// const take = (arr, n) => arr.slice(0, n)
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3))


// const squareSum = (numbers) => numbers.reduce((sum,num) => sum + (num * num), 0);
// console.log(squareSum([1,2]))
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))


// const include = (arr, item) => arr.includes(item)
// console.log(include([1,2,3,4], 3))
// console.log(include([1,2,4,5], 3))
// console.log(include([], 3))


// const findLongest = (array) => array.reduce((a, b) => (String(b).length > String(a).length ? b : a))
// console.log(findLongest([1, 10, 100]))
// console.log(findLongest([9000, 8, 800]))
// console.log(findLongest([8, 900, 500]))


// const lowercaseCount = (str) => str.length - str.replace(/[a-z]/g, '').length
// console.log(lowercaseCount("abc"))
// console.log(lowercaseCount(""))
// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))


// const noBoringZeros = (n) => +`${n}`.replace(/0+$/,'')
// console.log(noBoringZeros(1450))
// console.log(noBoringZeros(-1050))
// console.log(noBoringZeros(0))


// const validateCode = (code) => String(code).split('')[0] <= 3
// console.log(validateCode(123))
// console.log(validateCode(258))
// console.log(validateCode(9532))


// const twoDecimalPlaces = (n) => +n.toFixed(2)
// console.log(twoDecimalPlaces(4.659725356))


// const getAge = (inputString) => +inputString[0]
// console.log(getAge("4 years old"))


// const isPalindrome = (x) => x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
// console.log(isPalindrome("a"))
// console.log(isPalindrome('aba'))
// console.log(isPalindrome("hello"))


// function gooseFilter (birds) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(e => !~geese.indexOf(e))
// }
//
// console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))


// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b)
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))


// const sum = (numbers) => numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b)
// console.log(sum([]))
// console.log(sum([1, 5.2, 4, 0, -1]))


// const reverseWords = (str) => str.split(' ').reverse().join(' ')
// console.log(reverseWords("yoda doesn't speak like this"))
// console.log(reverseWords("row row row your boat"))


// const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`
// console.log(bonusTime(10000, true))
// console.log(bonusTime(60000, false))


// const addExtra = ( listOfNumbers ) => [...listOfNumbers, 13]
// console.log(addExtra([1,2,3]))
// console.log(addExtra([]))


// const monkeyCount = (n) => Array.from({length : n}, (_, i) => i + 1)
// console.log(monkeyCount(5))
// console.log(monkeyCount(9))


// const sumArray = array => array ? array.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
// console.log(sumArray([6, 2, 1, 8, 10]))
// console.log(sumArray([3, 5]))
// console.log(sumArray([null]))
// console.log(sumArray([ 0, 1, 6, 10, 10 ]))


// const squareOrSquareRoot = (array) =>  array.map(a => Number.isInteger(Math.sqrt(a)) ? Math.sqrt(a) : a ** 2)
// console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))


// const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);
// console.log(divisibleBy([1,2,3,4,5,6], 2))
// console.log(divisibleBy([0], 4))
// console.log(divisibleBy([1, 3, 5], 2))


// const oddCount = (n) => Math.floor(n / 2)
// console.log(oddCount(15))


// const defineSuit = (card) => {
//     if(card.includes('♥')) return 'hearts'
//     if(card.includes('♦')) return 'diamonds'
//     if(card.includes('♣')) return 'clubs'
//     if(card.includes('♠')) return 'spades'
// }
// console.log(defineSuit('3♣'))


// const remove = (string) => string.replace(/!+$/, '')
// console.log(remove("Hi!"))
// console.log(remove("Hi! Hi!!!"))


// function sameCase(a, b){
//     if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)) {
//         return -1;
//     }
//     if ((a === a.toUpperCase() && b === b.toUpperCase()) ||
//         (a === a.toLowerCase() && b === b.toLowerCase())) {
//         return 1;
//     }
//     return 0;
// }
// console.log(sameCase('C', 'B'))
// console.log(sameCase('A', 's'))
// console.log(sameCase('H', ':'))


// function multiTable(number) {
//     let table = ''
//     for (let i = 1; i <= 10; i++) {
//        table += `${i} * ${number} = ${i * number}`
//         if (i < 10) {
//             table += '\n'
//         }
//     }
//     return table
// }
// console.log(multiTable(5))


