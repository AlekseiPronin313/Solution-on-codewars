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
