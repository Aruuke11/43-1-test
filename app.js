
// задание 5
const xhr = new XMLHttpRequest();
xhr.open("GET", "../data/test-json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        console.log(responseData);
    }
};
xhr.send();

//  ЗАДАНИЕ 4

const colorBlock = document.getElementById("colorBlock");

colorBlock.addEventListener("click", () => {
    colorBlock.classList.toggle("bg-color");
});




// задание 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}
count();




// задание 2

const second = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}
second();

// задание 1

const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345"))
console.log(containsOnlyDigits("12a45"));


