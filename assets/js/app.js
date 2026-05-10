const desc = 'To 我最最亲爱的妈咪<br/>     你先是你自己 然后才是我的妈妈<br/>     我用一辈子和你说再见<br/>     你却用一生祈祷我平安<br/>     宇宙洪荒 生命浩瀚<br/>     但只有你和我 共享过心跳<br/>     你是坚韧的大树 也是温柔的阳光<br/>     长安宁 岁无忧 祝妈妈母亲节快乐<br/>     愿您岁岁平安 万事顺遂';
const typingDelay = 110;

function setStyle(id, styleText) {
  document.getElementById(id).style.cssText = styleText;
}

function typeWriter(textWithBreaks, elementId, delay = 100) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  let index = 0;

  const timer = setInterval(() => {
    if (index >= textWithBreaks.length) {
      clearInterval(timer);
      return;
    }

    if (textWithBreaks.slice(index, index + 5) === '<br/>') {
      element.innerHTML += '<br/>';
      index += 5;
      return;
    }

    element.innerHTML += textWithBreaks[index];
    index += 1;
  }, delay);
}

function createSnowflake() {
  const flake = document.createElement('div');
  flake.classList.add('flake', Math.random() > 0.5 ? 'large' : 'small');
  flake.style.left = `${Math.random() * 100}%`;
  document.getElementById('snow').appendChild(flake);

  setTimeout(() => {
    flake.remove();
  }, 17000);
}

function openBlessing() {
  const audioElement = document.getElementById('myAudio');
  const musicButton = document.getElementById('div_music');

  audioElement.play().then(() => {
    musicButton.classList.add('playing');
  }).catch(() => {
    musicButton.classList.remove('playing');
  });

  setStyle('zuikais', 'left: -100%;');
  setTimeout(() => setStyle('sr7', 'left: 10%;'), 300);
  setTimeout(() => setStyle('sr5', 'right: 3%;'), 900);
  setTimeout(() => setStyle('sr2', 'left: 10%;'), 1600);
  setTimeout(() => setStyle('sr1', 'left: 2%;'), 1900);
  setTimeout(() => setStyle('sr4', 'right: 2%;'), 2100);
  setTimeout(() => setStyle('sr3', 'width: 53%;left:24%;'), 2900);
  setTimeout(() => setStyle('sr2', 'left: 10%; top:129%;'), 4800);
  setTimeout(() => setStyle('sr1', 'left: 2%;top:143%;'), 4800);
  setTimeout(() => setStyle('sr4', 'right: 2%;top:143%;'), 4800);
  setTimeout(() => setStyle('sr3', 'width: 53%;left:24%;top:150%;'), 4800);
  setTimeout(() => setStyle('sr5', 'right: 3%;bottom:-100%;'), 4800);
  setTimeout(() => setStyle('sr6', 'width: 60%;left:20%;'), 4900);
  setTimeout(() => setStyle('sr8', 'opacity: 1;width: 80%;min-height: 25%;left:10%;'), 5200);
  setTimeout(() => typeWriter(desc, 'wz8', typingDelay), 6600);
  setTimeout(() => setInterval(createSnowflake, 1100), 10600);
}

function toggleMusicPlayback() {
  const audioElement = document.getElementById('myAudio');
  const musicButton = document.getElementById('div_music');

  if (audioElement.paused) {
    audioElement.play().then(() => musicButton.classList.add('playing'));
    return;
  }

  audioElement.pause();
  musicButton.classList.remove('playing');
}

window.openBlessing = openBlessing;
window.toggleMusicPlayback = toggleMusicPlayback;
