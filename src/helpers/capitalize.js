const capitalizeFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
const capitalizeEveryWord = (str) => str.split(" ").map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join(" ");

export { capitalizeFirst, capitalizeEveryWord }