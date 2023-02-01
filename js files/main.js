// const container = document.getElementById('.container')
// const btn = document.getElementsByClassName('button')
// btn[0].addEventListener('click', function(){

// })
let input = document.querySelector("input")
function EnableSend() {
    console.log(input.value);
  document.write(
    `<h1 id="hi" style="background-color:red; text-align:center; display:flex; flex-direction: column;
     align-items: center; justify-content: center;">Thank You<button id="btn">hi</button></h1>`
  );
  btn.addEventListener("click",function(){
    document.write(`<h1>${input.value}</h1>`)
    document.getElementById('hi').style.display="none"
  })
}
