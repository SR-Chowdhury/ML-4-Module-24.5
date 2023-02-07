let arr = [10, 20, 30, 40];
for (let i =0; i<arr.length; i++) {
    const n = arr[i];
    console.log(n);
}

/**
 * We can do the same things by 'for of' loop
 */
let numbers = [10, 20, 30, 40];
for (const number of numbers) {
    console.log(number);
}


/**
 * Examle : Matched Products
 */

let phones = [
    {brand: 'iPhone', modal: "11"},
    {brand: 'samsung', modal: "z-flip"},
    {brand: 'iphone', modal: "13 pro Max"},
    {brand: 'Oppo', modal: "A13"},
    {brand: 'Redmi', modal: "MI25"},
];

let matched = [];

function matchedPhone(phones, searchItem) {
    for (const phone of phones) {
        if (phone.brand.toLowerCase().includes(searchItem.toLowerCase())) {
            matched.push(phone);
        }
    }
    return matched;
}

console.log(matchedPhone(phones, 'iphone'));
