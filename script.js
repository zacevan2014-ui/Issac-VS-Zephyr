document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Video Switcher
  const videoItems = document.querySelectorAll('.video-item');
  const mainVideo = document.getElementById('main-video');

  videoItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('external-link')) return;

      videoItems.forEach(v => v.classList.remove('active'));
      item.classList.add('active');

      const newSrc = item.getAttribute('data-src');
      mainVideo.src = newSrc;
    });
  });

  // 2. Comprehensive Character Profiles Data
  const profiles = {
    zephyr: {
      tag: 'TACTICAL PROFILE: ZEPHYR',
      name: 'Zephyr (The Apex Colossus)',
      style: 'Style: Power-focused, close-quarters brawler, high endurance',
      hp: '2,900 / 2,900 (3,850 Max)',
      hpBar: '92%',
      mp: '2,200 MP (2,900 Max)',
      mpBar: '85%',
      atk: '240 (510 Max)',
      atkBar: '95%',
      def: '195 (380 Max)',
      defBar: '92%',
      agi: '140 (210 Max)',
      agiBar: '86%',
      int: '175 (200 Max)',
      intBar: '88%',
      sigMove: 'Charged Overdrive Finishing Blow',
      aura: '94 / 100 - Maximum power charge unlocking movie finishing strike.',
      tactics: 'Devastating point-blank strikes; high knockout potential. Super armor poise rating of 92/100.',
      
      frameData: [
        { name: 'Heavy Body Palm', input: '5H', startup: '9 Frames', active: '4 Frames', recovery: '16 Frames', block: '+2 Frames (Guard Crush)', dmg: '180 HP' },
        { name: 'Hallway Slam (Grapple)', input: '63214Cmd', startup: '11 Frames', active: '3 Frames', recovery: '22 Frames', block: 'Unblockable', dmg: '340 HP' },
        { name: 'Iron Shield Block', input: '4 Special', startup: '1 Frame', active: '15 Frames', recovery: '8 Frames', block: 'Counter State', dmg: 'Absorbs 500 HP' },
        { name: 'CQC Elbow Drive', input: '2M', startup: '6 Frames', active: '3 Frames', recovery: '11 Frames', block: '+1 Frame', dmg: '135 HP' },
        { name: 'Overdrive Finisher', input: '236236H', startup: '14 Frames', active: '8 Frames', recovery: '35 Frames', block: 'Guard Break / KO', dmg: '850 HP (Finishing Strike)' }
      ],

      skills: {
        b1Title: 'POISE BRANCH',
        n1Name: 'Iron Will', n1Desc: 'Gains up to 30% DEF as HP decreases.',
        n2Name: 'Unyielding Stance', n2Desc: 'Immune to light-hit stagger and soft knockdowns.',
        n3Name: 'Hyper-Armor Overdrive', n3Desc: 'Final 30s grants complete crowd-control immunity.',
        
        b2Title: 'CRUSHING POWER',
        n4Name: 'Heavy Palm Strike', n4Desc: 'Pushes target back 6 feet on hit or block.',
        n5Name: 'Ground Wall-Pin', n5Desc: 'Pins target against walls for guaranteed follow-up hits.',
        n6Name: 'Titan Counter', n6Desc: 'Converts absorbed damage into 2× counter-power.',

        ultTitle: 'MALEVOLENT ABYSS',
        ultDesc: 'Pressure-type barrier expanding at 35.0 m/s. Grants absolute armor-piercing condition and gravity compression.'
      }
    },

    issac: {
      tag: 'TACTICAL PROFILE: ISSAC',
      name: 'Issac (The Phantom Vector)',
      style: 'Style: Speed-focused, high movement, zone control',
      hp: '2,450 / 2,500 (3,100 Max)',
      hpBar: '80%',
      mp: '1,800 MP (2,400 Max)',
      mpBar: '75%',
      atk: '185 (340 Max)',
      atkBar: '88%',
      def: '112 (180 Max)',
      defBar: '80%',
      agi: '245 (410 Max)',
      agiBar: '92%',
      int: '198 (225 Max)',
      intBar: '90%',
      sigMove: 'Ranged Blitz & Rapid Dodge',
      aura: '85 / 100 - Charged energy strikes during mid-game visual FX phases.',
      tactics: 'Exceptional mobility; excels at quick dodges, bed jumps, low-profile evasion, and Nerf suppression.',

      frameData: [
        { name: 'Light Jab', input: '5L', startup: '3 Frames', active: '2 Frames', recovery: '4 Frames', block: '+3 Frames (Safe)', dmg: '45 HP' },
        { name: 'Dual Bottle Sweep', input: '2M', startup: '7 Frames', active: '5 Frames', recovery: '10 Frames', block: '-2 Frames (Safe)', dmg: '120 HP' },
        { name: 'Bed Vault Dropkick', input: '6H', startup: '12 Frames', active: '6 Frames', recovery: '18 Frames', block: '-8 Frames (Punishable)', dmg: '210 HP' },
        { name: 'Nerf Suppressive Barrage', input: '236S', startup: '8 Frames', active: '24 Frames', recovery: '14 Frames', block: '+8 Frames (Chip Advantage)', dmg: '180 HP (Total)' },
        { name: 'Phantom Step Counter', input: '22 Special', startup: '1 Frame', active: '8 Frames', recovery: '6 Frames', block: '+15 Frames (Hard Knockdown)', dmg: '290 HP' }
      ],

      skills: {
        b1Title: 'AGILITY BRANCH',
        n1Name: 'Ghost Step', n1Desc: 'Zero-friction pivot; leaves 0.5s decoy image.',
        n2Name: 'Apex Vault', n2Desc: '+40% jump height off furniture & beds.',
        n3Name: 'Spatial Acceleration', n3Desc: 'Continuous movement ramps ATK speed up to +50%.',
        
        b2Title: 'TACTICAL ARSENAL',
        n4Name: 'Quick-Draw Blaster', n4Desc: 'Instant swap to ranged weapon without draw animation.',
        n5Name: 'Dual-Wield Hydro-Blades', n5Desc: 'Improvised bottle strikes gain armor-breaking properties.',
        n6Name: 'Suppressive Vector', n6Desc: 'Projectiles slow target movement by 30% on hit.',

        ultTitle: 'VERDANT HORIZON',
        ultDesc: 'Spatial-type barrier expanding at 42.0 m/s. Unlocks infinite spatial echo attacks inside domain.'
      }
    }
  };

  // 3. Elements Mapping & Tab Click Listeners
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tagEl = document.getElementById('dossier-tag');
  const nameEl = document.getElementById('dossier-name');
  const styleEl = document.getElementById('dossier-style');

  const hpText = document.getElementById('hp-text');
  const hpBar = document.getElementById('hp-bar');
  const mpText = document.getElementById('mp-text');
  const mpBar = document.getElementById('mp-bar');
  const atkText = document.getElementById('atk-text');
  const atkBar = document.getElementById('atk-bar');
  const defText = document.getElementById('def-text');
  const defBar = document.getElementById('def-bar');
  const agiText = document.getElementById('agi-text');
  const agiBar = document.getElementById('agi-bar');
  const intText = document.getElementById('int-text');
  const intBar = document.getElementById('int-bar');

  const sigMove = document.getElementById('sig-move');
  const auraText = document.getElementById('aura-text');
  const tacticsText = document.getElementById('tactics-text');
  const frameTbody = document.getElementById('frame-tbody');

  const branch1Title = document.getElementById('branch1-title');
  const node1Name = document.getElementById('node1-name');
  const node1Desc = document.getElementById('node1-desc');
  const node2Name = document.getElementById('node2-name');
  const node2Desc = document.getElementById('node2-desc');
  const node3Name = document.getElementById('node3-name');
  const node3Desc = document.getElementById('node3-desc');

  const branch2Title = document.getElementById('branch2-title');
  const node4Name = document.getElementById('node4-name');
  const node4Desc = document.getElementById('node4-desc');
  const node5Name = document.getElementById('node5-name');
  const node5Desc = document.getElementById('node5-desc');
  const node6Name = document.getElementById('node6-name');
  const node6Desc = document.getElementById('node6-desc');

  const ultTitle = document.getElementById('ult-title');
  const ultDesc = document.getElementById('ult-desc');

  function renderProfile(playerKey) {
    const p = profiles[playerKey];

    tagEl.textContent = p.tag;
    nameEl.textContent = p.name;
    styleEl.textContent = p.style;

    hpText.textContent = p.hp; hpBar.style.width = p.hpBar;
    mpText.textContent = p.mp; mpBar.style.width = p.mpBar;
    atkText.textContent = p.atk; atkBar.style.width = p.atkBar;
    defText.textContent = p.def; defBar.style.width = p.defBar;
    agiText.textContent = p.agi; agiBar.style.width = p.agiBar;
    intText.textContent = p.int; intBar.style.width = p.intBar;

    sigMove.textContent = p.sigMove;
    auraText.textContent = p.aura;
    tacticsText.textContent = p.tactics;

    // Render Frame Table
    frameTbody.innerHTML = p.frameData.map(f => `
      <tr>
        <td><strong>${f.name}</strong></td>
        <td>${f.input}</td>
        <td>${f.startup}</td>
        <td>${f.active}</td>
        <td>${f.recovery}</td>
        <td>${f.block}</td>
        <td>${f.dmg}</td>
      </tr>
    `).join('');

    // Render Skills
    branch1Title.textContent = p.skills.b1Title;
    node1Name.textContent = p.skills.n1Name; node1Desc.textContent = p.skills.n1Desc;
    node2Name.textContent = p.skills.n2Name; node2Desc.textContent = p.skills.n2Desc;
    node3Name.textContent = p.skills.n3Name; node3Desc.textContent = p.skills.n3Desc;

    branch2Title.textContent = p.skills.b2Title;
    node4Name.textContent = p.skills.n4Name; node4Desc.textContent = p.skills.n4Desc;
    node5Name.textContent = p.skills.n5Name; node5Desc.textContent = p.skills.n5Desc;
    node6Name.textContent = p.skills.n6Name; node6Desc.textContent = p.skills.n6Desc;

    ultTitle.textContent = p.skills.ultTitle;
    ultDesc.textContent = p.skills.ultDesc;
  }

  // Tab click binding
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProfile(btn.getAttribute('data-player'));
    });
  });

  // Initial Render
  renderProfile('zephyr');

});
