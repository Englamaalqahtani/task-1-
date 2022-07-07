const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang= "ar-AR"
recognition.interimResults = true;

let p = document.createElement('p');



recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('السلام عليكم')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'و عليكم السلالم';
        texts.appendChild(p)
      }
    if (text.includes('كيف حالك')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'الحمد الله كيف !!كيف حالك انت ؟';
      texts.appendChild(p)
    }
    if (text.includes("ايش اسمك") ) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'اسمي مساعد';
      texts.appendChild(p)
    }
    if (text.includes('شغل اليوتيوب')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/')
    }
    if(text.includes("فين تشتغل")){
      p = document.createElement('p');
      p.classList.add('replay');
      p.innterText ='في الاساليب الذكية';
      texts.appendChild(p)
      console.log('opening work site')
      window.open('https://s-m.com.sa/smtc/sdb/student-dashboard.php')

    }
    if(text.includes("مين صاحبك")){
        p = document.createElement('p');
        p.classList.add('replay');
        p.innterText =" الموبرمج الاسطوري خليل";
        texts.appendChild(p)
        console.log('opening khalils github ')
        window.open('https://github.com/khalilAlsulaimani')

    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();