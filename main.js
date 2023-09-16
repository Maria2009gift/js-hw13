"use strict"

// =====1=====

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", як
// ий дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при н
// атисканні на кнопки “поповнити рахунок” 
// та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку. 

const button1 = document.querySelector("#buttonT1")
const button2 = document.querySelector("#buttonT2")

const bankAccount = {
    ownerName: "Василь",
    accountNumber:"5234578",
    balance:0,

    deposit(amount) {
        button1.addEventListener("click", ()=> {
        this.balance += amount
        return console.log(`Депозит поповнено на ${amount}. Коштів на вашому рахунк ${this.balance}`)
        })       
    },

    withdraw(amount) {
        button2.addEventListener("click", ()=> {
            this.balance -= amount
            return console.log(`З вашого рахунку знято ${amount}. Коштів на вашому рахунк ${this.balance}`)      
        })
    },

}

bankAccount.deposit(300)
bankAccount.withdraw(150)


// =====2=====


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 
// градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// Температуру потрібно отримати з інпуту на сторінці.
// Якщо метод повернув"true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const inputTemper = document.querySelector("#inputT2")
const weather = {
    temperature: inputTemper.value, 
    humidity:22,
    windSpeed:30,
    isLow(a){
        if (a.value < 0) {
            console.log("Температура нижче 0 градусів Цельсія")
        }
        else if (a.value >= 0) {
            console.log("Температура нижче або  дорівнює 0 градусів Цельсія");
        }
    },
}

inputTemper.addEventListener("blur", ()=> {
    weather.isLow(inputTemper) 
})

// =====3=====

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password".
//  Додайте метод "login", який буде перевіряти правильність введеного email та password.
//  Використайте інпути для запису значень властивостей в об’єкт

const inputPost = prompt("Введіть свою електронну пошту:")
const inputPassword = prompt("Введіть свій пароль:")

const user = {
    name: "Olga",
    email: "post@gmail.com",
    password: "1234",

    login(email, passw) {
        if (email === this.email && passw === this.password) {
            console.log("Ви успішно увійшли в систему.")
        } else {
            console.log("Неправильний email або пароль.")
        }
    }
}

 user.login(inputPost, inputPassword)

// =====4=====

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
// Вивести значення властивостей на сторінку. 
// Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const p = document.querySelector("#result")

const promptRating = prompt("Введіть рейтинг:")
const movie = {
    title: "Good day",   
    director: "John Doe",
    year: 2004,
    rating: promptRating,
    goodRating(rate) {
        if (rate > 8) {
            p.textContent = "true"
            p.style.backgroundColor = "green"
        }
        else {
            p.textContent = "false"
            p.style.backgroundColor = "red"
        }
    }
}

movie.goodRating(promptRating)
