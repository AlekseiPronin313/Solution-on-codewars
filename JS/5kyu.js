// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
// console.log(incrementString("fo99obar99"))
// console.log(incrementString("foo"))
// console.log(incrementString('1'))


// const domainName = (url) => url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)/)[1].split('.')[0];
// console.log(domainName("http://google.com"));
// console.log(domainName("http://google.co.jp"));


// function incrementString (str) {
//     return str.replace(/(\d*)$/, function (match) {
//         if (match === '') return '1'
//         let number = String(parseInt(match, 10) +1)
//         return match.length > number.length ? '0'.repeat(match.length - number.length) + number : number
//     })
// }
// console.log(incrementString("foobar000"))
// console.log(incrementString("foo"))
// console.log(incrementString("1"))
// console.log(incrementString("009"))
// console.log(incrementString("fo99obar99"))
