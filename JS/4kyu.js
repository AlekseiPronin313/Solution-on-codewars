// function nextBigger(n) {
//     const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
//     const max = +sortedDigits(n).join('')
//     for (let i = n + 1; i <= max; i++) {
//         if (max === +sortedDigits(i).join('')) return i
//     }
//     return -1
// }
// console.log(nextBigger(12))
// console.log(nextBigger(2017))
// console.log(nextBigger(144))
// console.log(nextBigger(9))


// function formatDuration(seconds) {
//     if (seconds === 0) return "now";
//     const units = [
//         { name: "year", value: 365 * 24 * 60 * 60 },
//         { name: "day", value: 24 * 60 * 60 },
//         { name: "hour", value: 60 * 60 },
//         { name: "minute", value: 60 },
//         { name: "second", value: 1 }
//     ];
//     let result = "";
//     units.forEach((unit, index) => {
//         if (seconds >= unit.value) {
//             const value = Math.floor(seconds / unit.value);
//             seconds = seconds % unit.value;
//             result += (result === "" ? "" : (seconds === 0 ? " and " : ", "));
//             result += `${value} ${unit.name}${value > 1 ? "s" : ""}`;
//         }
//     });
//     return result;
// }
// console.log(formatDuration(0))
// console.log(formatDuration(300))
// console.log(formatDuration(900000000000))
