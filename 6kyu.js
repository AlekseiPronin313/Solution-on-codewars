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
