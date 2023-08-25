

document.getElementById('genaretor-btn').addEventListener('click',function(){
    const lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const specialCharsArray = ['!', '@', '#', '$', '%','&', '*'];
   
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
    const letter = lettersArray[Math.floor(Math.random() * lettersArray.length)]
    const letter1 = lettersArray[Math.floor(Math.random() * lettersArray.length)].toUpperCase()
    const letter3 = lettersArray[Math.floor(Math.random() * lettersArray.length)]
    const specialChars = specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]
    const numbers = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    const numbers1 = numbersArray[Math.floor(Math.random() * numbersArray.length)]

    const password = `${letter}${numbers1}${letter1}${numbers}${specialChars}${letter3}`
    const displayPassowrd = document.getElementById('displayPassowrd')
    displayPassowrd.value = password

    // Copied button
    document.getElementById('copyBtn').addEventListener('click',function(){
        let passwordCopy = document.getElementById('displayPassowrd')
        passwordCopy.select()
        document.execCommand("copy");
        this.innerText = 'copied!'
        passwordCopy.value = ''
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
          }, 1200);
    })

})

