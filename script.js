let height = document.getElementById("height")
let weight = document.getElementById("weight")
let form = document.getElementById("form")
let text = document.getElementById("hasil")
let ket = document.getElementById("keterangan")
let desc = document.getElementById("desc")

function keterangan(angka) {
    if (angka < 18.5) {
        ket.innerText = "Underweight "
        ket.style.color = "red"
    } else if (angka >= 18.5 && angka <= 24.9) {
        ket.innerText = "Normal"
        ket.style.color = "green"
    } else if (angka >= 25 && angka <= 29.9) {
        ket.innerText = "Overweight "
        ket.style.color = "Orange"
    } else if (angka >= 30) {
        ket.innerText = "Obesity "
        ket.style.color = "Black"
    }
}
form.addEventListener('submit', (eve) => {
    eve.preventDefault()
    height.value = (height.value * 0.01).toFixed(2)
    let BMI = (weight.value / (height.value * height.value)).toFixed(1)
    text.innerText = BMI
    keterangan(BMI)
    desc.innerHTML = "<p>Your BMI is <strong>" + BMI + "</strong> which mean you <strong>" + ket.textContent + "</strong></p>"
    height.value = ""
    weight.value = ""
})  