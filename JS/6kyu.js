// const wave = str => [...str].map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1)).filter(x => x != str)
// console.log(wave("hello"))


// const findUniq = (arr) => +arr.filter(s => arr.indexOf(s) === arr.lastIndexOf(s))
// console.log(findUniq([ 1, 0, 0 ]))
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))


// const arrayDiff = (a, b) => a.filter((n)=> b.indexOf(n)== -1)
// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2,2], [2]))
// console.log(arrayDiff([1,2,2], []))
// console.log(arrayDiff([], [1,2]))
// console.log(arrayDiff([1,2,2], [1]))


// function tribonacci(signature,n){
//    for (let i = 0; i < n-3; i++) {
//        signature.push(signature.slice(i).reduce((a, b) => a + b))
//    }
//    return signature.slice(0, n)
// }
// console.log(tribonacci([1,1,2], 10))
// console.log(tribonacci([1,1,1], 0))
// console.log(tribonacci([1,1,1], 1))


// const uniqueInOrder= (iterable) => {
//     const arr = []
//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] != iterable[i+1]) {
//             arr.push(iterable[i])
//         }
//     }
//     return arr
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))


// function deleteNth(arr,n){
//     const arrey = []
//     return arr.filter((x) => (arrey[x] = ~~arrey[x] + 1) <= n)
// }
// console.log(deleteNth([20,37,20,21], 1))
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))


// function expandedForm(num) {
//     return String(num)
//         .split('')
//         .reverse()
//         .map((a, i) => a * Math.pow(10, i))
//         .filter(a => a > 0)
//         .reverse()
//         .join(' + ')
// }
// console.log(expandedForm(2))
// console.log(expandedForm(12))
// console.log(expandedForm(123))
// console.log(expandedForm(1202))
// console.log(expandedForm(12024))


// function doTest(array){
//     let number = 0
//     let names = {};
//     array.forEach(item => {
//         names[item] = (names[item] || 0) + 1;
//     });
//     Object.entries(names).map(([key, value]) => {
//          if (value % 2 != 0) {
//                 return number = Number(key)
//          }
//      })
//     return number
// }
// console.log(doTest([0,1,0,1,1]))


// const countSmileys = (arr) => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// console.log(countSmileys([':D',':~)',';~D',':)']))
// console.log(countSmileys([':)',':(',':D',':O',':;']))
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))


// const order = (words) => words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')
// console.log(order("is2 Thi1s T4est 3a"))
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// console.log(order(""))


// function towerBuilder(nFloors) {
//     const arr = []
//     for (let i = 0; i < nFloors; i++) {
//         arr.push(" ".repeat(nFloors - i - 1)
//             + "*".repeat(2 * i + 1)
//             + " ".repeat(nFloors - i - 1))
//     }
//     return arr
// }
// console.log(towerBuilder(1))
// console.log(towerBuilder(2))
// console.log(towerBuilder(3))


// function persistence(num) {
//     let counter = 0
//         while (num.toString().length > 1) {
//             num = num.toString().split('').reduce((a, b) => a * b, 1)
//             counter++
//         }
//         return counter
// }
// console.log(persistence(39))
// console.log(persistence(4))
// console.log(persistence(999))


// function count (string) {
//     return string.split('').reduce((a, b) => {
//         a[b] = (a[b]||0) + 1;
//         return a;
//     },{});
// }
// console.log(count("aba"))
// console.log(count(""))


// const high = (x) => {
//     let arr = x.split(' ').map((s) => [...s].reduce((sum, s) => sum + s.charCodeAt() - 96, 0))
//
//     return x.split(' ')[arr.indexOf(Math.max(...arr))]
// }
// console.log(high('man i need a taxi up to ubud'))
// console.log(high('take me to semynak'))
// console.log(high('aaa b'))


// const solution = (string) => string.replace(/([A-Z])/g, " $1")
// console.log(solution('camelCasing'))
// console.log(solution('camelCasingTest'))


// function likes(names) {
//     if (names.length === 0) {
//         return 'no one likes this'
//     } else if (names.length === 1) {
//         return `${names} likes this`
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
// }
// console.log(likes(['Peter']))
// console.log(likes([]))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))


// function sortArray(array) {
//     const sort = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? sort.shift() : x);
// }
// console.log(sortArray([]))
// console.log(sortArray([5, 3, 2, 8, 1, 4]))
// console.log(sortArray([5, 3, 1, 8, 0]))


// const dashatize = num => Math.abs(num).toString().split(/([13579])/g).filter(Boolean).join('-');
// console.log(dashatize(974302))
// console.log(dashatize(0))
// console.log(dashatize(NaN))


// function findOutlier(int){
//     let even = int.filter(a => a % 2 == 0)
//     let odd = int.filter(a => a % 2 !== 0)
//     return even.length == 1? even[0] : odd[0]
// }
// console.log(findOutlier([1, 2, 3]))
// console.log(findOutlier([2,6,8,10,3]))
// console.log(findOutlier([1,1,0,1,1]))


// const numberFormat = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// console.log(numberFormat(100000))
// console.log(numberFormat(5678545))


// function solution(num){
//     let roman = ""
//     const romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
//     const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//     for (let i = 0; i < number.length; i++) {
//         while (num >= number[i]) {
//             roman += romanNumeral[i]
//             num -= number[i]
//         }
//     }
//     return roman
// }
// console.log(solution(solution(5)))
// console.log(solution(solution(19)))


// const spinWords = string => string.replace(/\w{5,}/g, w => w.split('').reverse().join(''))
// console.log(spinWords("Welcome"))
// console.log(spinWords("Seriously this is the last one"))


// const solution = (string) => string.replace(/([A-Z])/g, ' $1')
// console.log(solution('camelCasing'))


// const spinWords = (string) => string.split(' ').map(text => text.length >= 5 ? [...text].reverse().join('') : text).join(' ')
// console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors"))

// const count = string => [...string].reduce((obg, latter) => (obg[latter] = (obg[latter] || 0) +1, obg), {})
// console.log(count(''))
// console.log(count('aA'))
// console.log(count('abda'))


// const countSmileys = (arr) => arr.filter(item => /[:;][-~]?[)D]/.test(item)).length
// console.log(countSmileys([':)',':(',':D',':O',':;']))
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
