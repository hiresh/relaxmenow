
document.addEventListener("DOMContentLoaded", function () {
  //refinedUI
  const squaresContainer = document.querySelector(".container");
  const generateBtn = document.getElementById("generateBtn");
  const squareCountInput2 = document.getElementById("squareCount");
  const delayTimeInput2 = document.getElementById("delayTime");
  squareCountInput2.addEventListener("input", function () {
    if (parseInt(squareCountInput2.value) > 20) {
      squareCountInput2.value = 20;
      
    }
    if (parseInt(squareCountInput2.value) < 1) {
      squareCountInput2.value = 1;
    }
  });

  delayTimeInput2.addEventListener("input", function () {
    if (parseFloat(delayTimeInput2.value) > 15) {
      delayTimeInput2.value = 15;
    }
    if (parseFloat(delayTimeInput2.value) < 1) {
      delayTimeInput2.value = 1;
    }
  });
  function generateSquares() {
    const squareCountInput = document.getElementById("squareCount");
    const squareCount = parseInt(squareCountInput.value, 10);

    const delayTimeInput = document.getElementById("delayTime");
    const delayTime = parseFloat(delayTimeInput.value, 5) * 1000; // Convert to milliseconds
    
    squaresContainer.innerHTML = ""; // Clear existing squares

    const squares = [];
    let currentIndex = 0;
    let currentBreath = 0;

    function createSquare() {
      const square = document.createElement("div");
      square.classList.add("square");
      squaresContainer.appendChild(square);
      squares.push(square);
    }

    function showNextSquare() {
      if (currentIndex < squares.length) {
        
        squares[currentIndex].style.transitionDuration = (delayTime*1.3) + "ms";
        squares[currentIndex].classList.add("visible");
        
        setTimeout(hideCurrentSquare, delayTime);
        
        currentIndex++;
        currentBreath++;
        
      }
    }

   

    function hideCurrentSquare() {
      if (currentIndex > 0) {
        squares[currentIndex-1].style.transitionDuration = delayTime + "ms";
        squares[currentIndex - 1].classList.remove("visible");
        currentIndex=currentIndex%5;
        if(currentBreath<squareCount){
          setTimeout(showNextSquare, delayTime*1.3);
        }else{
          setTimeout(showConfetti, 3000);
          setTimeout(showConfetti, 5000);
          setTimeout(showConfetti, 7000);
          
         
        }
      }
    }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function showConfetti(){
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });
    }

    for (let i = 0; i < 5; i++) {
      console.log(squareCount);
      createSquare();
    }

    setTimeout(showNextSquare, 2000);
  }

  generateBtn.addEventListener("click", generateSquares);
});
