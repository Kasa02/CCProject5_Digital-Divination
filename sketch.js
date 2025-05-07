let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", getAdvice);

let catBtn = document.getElementById("catBtn");
catBtn.addEventListener("click", showCat);

async function getAdvice() {
    try {
        console.log("entered getAdvice function");

        let q1 = document.getElementById("q1").value.trim();
        let q2 = document.getElementById("q2").value.trim();
        let q3 = document.getElementById("q3").value.trim();

        if (!q1 || !q2 || !q3) {
            alert("Please answer all the questions first.");
            return;
        }

        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        console.log(data);

        let adviceText = data.slip.advice;
        console.log(adviceText);

        let adviceElem = document.getElementById("advice");
        adviceElem.textContent = "✨ Mi just dropped a message: " + adviceText;
    } catch (error) {
        console.log(error);
        let adviceElem = document.getElementById("advice");
        adviceElem.textContent = "Sorry, the system is down. Please try again later.";
    }
}



function getRandomStatusCode() {
    const codes = [200, 201, 202, 204, 301, 302, 400, 401, 403, 404, 500, 503];
    return codes[Math.floor(Math.random() * codes.length)];
}

function showCat() {
    let statusCode = getRandomStatusCode();
    console.log("Selected status code:", statusCode);

    let imgUrl = `https://http.cat/${statusCode}`;
    let catImg = document.getElementById("catImg");
    catImg.src = imgUrl;
    catImg.style.display = "block";
}

window.onload = function () {
    const path = 'image/';

    const eyesOpen = new Image();
    eyesOpen.src = path + 'image0-closeEyes.png';

    const eyesClose = new Image();
    eyesClose.src = path + 'image0-removebg-preview.png';

    const catImg = document.getElementById('cat');

    function swapImage(img, graphic) {
        img.src = graphic;
    }

    catImg.onmouseover = function () {
        swapImage(this, eyesOpen.src);
    };

    catImg.onmouseout = function () {
        swapImage(this, eyesClose.src);
    };
};
