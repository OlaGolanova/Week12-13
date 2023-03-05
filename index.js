'use strict';
/////   week13 задаю формат времени для выводва
let options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

////// week13 кнопка отправки сообщений по умолчанию выключена, пока не выберет один из чекбоксов
document.getElementById('button').disabled = true;

const nameClient = document.getElementById('rev_name');

nameClient.addEventListener('change', ucFirst);

function ucFirst() {
  if (!nameClient.value) return cleanName.value;
  const cleanName = nameClient.value.trim(nameClient.value);
  const nameNew = cleanName[0].toUpperCase() + cleanName.slice(1).toLowerCase();
  // console.log(nameNew);
  document.getElementById('rev_name').value = nameNew;
  return nameNew;
}

/// week13 задаю переменные для рандомного вывода фото users в чат
let avatarNumber = Math.random();
let avatarNew = Math.ceil(avatarNumber * 6);


////// week13  выбираем один из чекбоксов
checkNo.onclick = function() {
 document.getElementById('checkYes').disabled = true;
 document.getElementById('button').disabled = false;

}
checkYes.onclick = function() {
  document.getElementById('checkNo').disabled = true;
  document.getElementById('button').disabled = false;
 }

///// отправляем сообщение в чат
button.addEventListener('click', showComment);

function showComment() {
  let clientRev = document.createElement('div');
  clientRev.className = "container";
  clientRev.innerHTML = `<div class="client_container">
                            <img src=""  id="client_img" width="100px">
                            <div class="client_name"></div>
                            <div class="date"></div>
                          </div> 
                            <div class="client_rev"></div>`;

  document.querySelector('.rev_item_client').append(clientRev);
  document.querySelector('.date').textContent = new Date().toLocaleString("ru", options).replace(',', '');


  if (checkNo.checked || document.getElementById('rev_name').value === '') {
    document.querySelector('.client_name').textContent = 'username';
  }
  else {
    document.querySelector('.client_name').textContent = document.getElementById('rev_name').value;
  }


  if ( document.getElementById('hrf').value !== "" ) {
    document.getElementById('client_img').src = document.getElementById('hrf').value;
   }
  else {
    switch (avatarNew) {
      case 1:
        document.getElementById('client_img').src = './img/user1.png';
        break;
      case 2:
        document.getElementById('client_img').src ='./img/user2.png';
        break;
      case 3:
        document.getElementById('client_img').src = './img/user3.jpg';
        break;
      case 4:
        document.getElementById('client_img').src = './img/user4.jpg';
        break;
      case 5:
        document.getElementById('client_img').src = './img/user5.png';
        break;
      case 6:
        document.getElementById('client_img').src = './img/user6.png';
        break;
      default:
        document.getElementById('client_img').src = './img/user1.png';
    }}
  
    document.getElementById('rev_name').value = '';
    document.getElementById('hrf').value = '';
  
  }

button.addEventListener('click', checkSpam);

function checkSpam() {

let text = document.getElementById('rev').value;
// let newtext = text.replace (/ViAgRA/gi, "***"); 
// let newtext2 = newtext;
// newtext2 = newtext.replace (/[\xxx]/gi, "*");
let newText = text.replace(/viagra|XXX/ig, "***");
document.querySelector('.client_rev').textContent = newText;
document.getElementById('rev').value = '';
}




////////////////////////////////////////////////////////////////////////////

// Задача со **** 12 неделя

let txt = '<br> <col> Оля <embed>';
function deleteTags(txt) {
    let regex = /( |<([^>]+)>)/ig,
    
    result = txt.replace(regex, "");

    return result;
}

console.log(deleteTags(txt));


////////////////////////////////////////////////////////////////////////////

// Задача со **** 13 неделя

 
let date = new Date("2023-03-04 14:20");
// console.log(date);

function formatDate(date) {

  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
  };

  let now = new Date();
  // console.log(now);
  
  let diff = Math.round((now - date) / 1000);
  // console.log(diff);

  if (diff < 1) {
    // console.log("прямо сейчас");
    return "прямо сейчас" ;
  }
  else if (diff >= 1 && diff < 60) {
    // console.log(` ${diff} + сек. назад `);
    return ` ${diff} + сек. назад ` ;
  }
  else if (diff >= 60 && diff < 3600) {
    // console.log(`${Math.round(diff / 60)}  минут назад `);
    return `${Math.round(diff / 60)}  минут назад `;
  }
  else {
    // console.log(date.toLocaleString("ru", options));
    let a = String(date.toLocaleString("ru", options)).replace(',', '');
    let b = a.slice(0,6)+a.slice(8);
    return b;
  }
}

 console.log(formatDate(date));
