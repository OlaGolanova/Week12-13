'use strict';


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



button.addEventListener('click', showComment, {once:true});

function showComment() {
  let clientRev = document.createElement('div');
  clientRev.className = "container";
  clientRev.innerHTML = `<div class="client_container">
                              <div class="client_foto">
                                  <img src=""  id="client_img" width="100px">
                              </div>
                              <div class="client_name"></div>
                          </div>
                          <div class="client_rev"></div>
                          <hr>`;
    document.querySelector('.rev_item_client').append(clientRev);

    document.querySelector('.client_name').textContent = document.getElementById('rev_name').value;
    // document.querySelector('.client_rev').textContent = document.getElementById('rev').value;
    document.getElementById('client_img').src = document.getElementById('hrf').value;
  
}


button.addEventListener('click', checkSpam);

function checkSpam() {

let text = document.getElementById('rev').value;
// let newtext = text.replace (/ViAgRA/gi, "***"); 
// let newtext2 = newtext;
// newtext2 = newtext.replace (/[\xxx]/gi, "*");
let newText = text.replace(/viagra|XXX/ig, "***");
document.querySelector('.client_rev').textContent = newText;
}






////////////////////////////////////////////////////////////////////////////

// Задача со ****

let txt = '<br> <col> Оля <embed>';
function deleteTags(txt) {
    let regex = /( |<([^>]+)>)/ig,
    
    result = txt.replace(regex, "");

    return result;
}

console.log(deleteTags(txt));
