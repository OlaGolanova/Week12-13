# Week12
1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?

"" '' - двойные и одинарные кавычки для вывода информациив строке
`` -обратные кавычки, в них можно вставлять выражения в ${} и такие кавычки позволяют разбивать код на сроки


2. Какими методами можно найти подстроку в строке? Приведите пример.
Первый метод — str.indexOf(substr, pos). Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений. Аргумент pos-не обязательный, позволяет начать посик с определенной позиции.

str.lastIndexOf(substr, position) ищет с конца строки к её началу.Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.

3. Самостоятельно разберитесь, зачем нужен специальный символ \n?

 \n - переход на новую строку(разрыв строки)

4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`


function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1); 
}

alert( ucFirst("настя) );                /////// Настя


5. Какой из вариантов округления делает это по математическим правилам?

Math.round(9.51); // 10 -округляет до ближайшего целого

6. Как сгенерировать случайное число от 1 до 100? 

console.log(Math.round(Math.random()*100)); // 31// возвращает случайное число от 0 включительно до 100 не включительно

7. Самостоятельно разберитесь, зачем нужен специальный символ `\n`?

 \n - переход на новую строку(разрыв строки)


8. Что выведет в консоль?

```jsx
const x="Солнце";

console.log("The string length is " + x.length)  /////   The string length is 6
```

9. Каким будет результат в представленном ниже фрагменте кода?

```jsx
const upperText="ВелоСипед" ;

document.write(upperText.toUpperCase())   ////// ВЕЛОСИПЕД
```

10. Каким будет результат в приведенном ниже фрагменте кода?

```jsx
let str = "розы такие розы"; 

str.replace("розы","красивые")   /////// Красивые такие розы
```

11. Что выведет в консоль?

```jsx
const str = "abcdefghij";

console.log("(2,3): "    + str.substr(2,3));  //////  (2,3): cde
```



# Week13
### Вопросы 💎

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
    let now = new Date(2021, 0, 24, 22, 51);


2. Для чего предназначен метод `getDay()`?
Метод возвращает день недели, в числе: от 0-вск до 6-суббота;


3. Как посчитать, сколько секунд осталось до завтра?
Сегодня 03.03.2023 9.33
Завтра 04.03.2023


let tomorrow = new Date(2023, 2, 4);
console.log(tomorrow);

let now = Date.now();
console.log(now);

let diff = tomorrow - now;
console.log(Math.round(diff / 1000 ));   ////// 52049 секунд


4. Для чего предназначен метод `getDate()`?
Метод для заданной даты возвращает тайсстамп-кол-во миллисекунд прошедших с 01.01.1970г


5. Что выведет `console.log(d)` ?
    
    ```jsx
    let d = new Date(2016, 2, 9);
    
    console.log(d);   ///////     9 марта 2016
    


6. Что делает `getTimezoneOffset()` ?

Возвращает разницу в миллисекундах между местным часовым поясом и UTC


7. Что выведет консоль?
    
    ```jsx
    let date = new Date();
    
    console.log(date.getUTCHours());  
    ```
    возвращающает час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)


8. Для чего предназначен метод `getHours()` объекта Date?

Метод позволяет получить час из обьекта Date

9. Что выведет консоль?
    
    ```jsx
    let d = new Date(); 
    let y =  d.getFullYear();
    console.log(y);   ////// 2023
    ```
    
10. В чём ошибка в коде?
    
let y = new Date(); 
console.log(y); //////  Sat Mar 04 2023 14:38:02 GMT+0300 (Москва, стандартное время)
let d = y.getDate();  Просим вывести День из даты, выводит 4. Это верно
console.log(d);   