// Объявление переменной и вывод значения в модалку
let admin, name;

name = "John";
admin=name;

alert(admin);

// Запрос данных через модалку и вывод запрошенной информации в модалку
let username = prompt("Введите имя пользователя:", ["username"]);
alert(`Имя пользователя ${username}`);