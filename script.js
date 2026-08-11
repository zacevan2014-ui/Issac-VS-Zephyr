document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Video Switcher
  const videoItems = document.querySelectorAll('.video-item');
  const mainVideo = document.getElementById('main-video');

  videoItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't intercept if clicking direct link
      if (e.target.classList.contains('external-link')) return;

      videoItems.forEach(v => v.classList.remove('active'));
      item.classList.add('active');

      const newSrc = item.getAttribute('data-src');
      mainVideo.src = newSrc;
    });
  });

  // 2. Player Dossier Switcher
  const dossierProfiles = {
    player1: {
      name: 'Player: Player One',
      role: 'Class: Vanguard / Duelist',
      hp: '88/100',
      hpBar: '88%',
      speed: '95/100',
      speedBar: '95%',
      intel: '91/100',
      intelBar: '91%',
      domain: 'Temporal Overdrive - Freezes enemy frame timing within 15m radius for 3 seconds.',
      intelText: 'Optimal punish windows on frame 4 startup. High mastery of fast recoil reset routines.'
    },
    player2: {
      name: 'Player: Player Two',
      role: 'Class: Tactician / Specialist',
      hp: '94/100',
      hpBar: '94%',
      speed: '86/100',
      speedBar: '86%',
      intel: '98/100',
      intelBar: '98%',
      domain: 'Absolute Suppression - Disables enemy mobility abilities and highlights hitboxes across terrain.',
      intelText: 'Excels at macro-rotations, frame-perfect parry timing, and map control setup.'
    }
  };

  const tabBtns = document.querySelectorAll('.tab-btn');
  const nameEl = document.getElementById('dossier-name');
  const roleEl = document.getElementById('dossier-role');
  const hpVal = document.getElementById('hp-val');
  const hpBar = document.getElementById('hp-bar');
  const speedVal = document.getElementById('speed-val');
  const speedBar = document.getElementById('speed-bar');
  const intelVal = document.getElementById('intel-val');
  const intelBar = document.getElementById('intel-bar');
  const domainText = document.getElementById('domain-text');
  const intelText = document.getElementById('intel-text');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const profile = dossierProfiles[btn.getAttribute('data-player')];
      
      nameEl.textContent = profile.name;
      roleEl.textContent = profile.role;
      
      hpVal.textContent = profile.hp;
      hpBar.style.width = profile.hpBar;
      
      speedVal.textContent = profile.speed;
      speedBar.style.width = profile.speedBar;
      
      intelVal.textContent = profile.intel;
      intelBar.style.width = profile.intelBar;
      
      domainText.textContent = profile.domain;
      intelText.textContent = profile.intelText;
    });
  });

});
