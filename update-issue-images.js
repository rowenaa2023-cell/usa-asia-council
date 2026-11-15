const fs = require('fs');

// Map each issue sub-page to unique, topic-matching images
const imageMap = {
  'atlantic-alliance.html': {
    hero: { src: 'assets/washington-monument.jpg', alt: 'Washington D.C. - center of transatlantic alliance leadership' },
    img2: { src: 'assets/pentagon-building.jpg', alt: 'Pentagon headquarters - NATO alliance coordination' },
    img3: { src: 'assets/us-flag-closeup.jpg', alt: 'U.S. flag representing American commitment to allied security' }
  },
  'china.html': {
    hero: { src: 'assets/shanghai-pudong-skyline.jpg', alt: 'Shanghai Pudong financial district - center of U.S.-China economic competition' },
    img2: { src: 'assets/south-china-sea.jpg', alt: 'South China Sea maritime corridors and contested waters' },
    img3: { src: 'assets/hong-kong-harbor.jpg', alt: 'Hong Kong harbor - strategic Indo-Pacific trade hub' }
  },
  'climate-geopolitics.html': {
    hero: { src: 'assets/solar-energy-field.jpg', alt: 'Solar energy installation powering clean energy transition' },
    img2: { src: 'assets/wind-turbines-energy.jpg', alt: 'Wind turbines contributing to renewable energy goals' },
    img3: { src: 'assets/nature-sustainability.jpg', alt: 'Natural landscapes representing sustainability goals' }
  },
  'democracy-human-rights.html': {
    hero: { src: 'assets/capitol-building-dc.jpg', alt: 'U.S. Capitol Building - seat of democratic governance' },
    img2: { src: 'assets/un-general-assembly.jpg', alt: 'United Nations - multilateral human rights forum' },
    img3: { src: 'assets/corporate-summit-panel.jpg', alt: 'Policy panel discussing global democratic norms' }
  },
  'development-assistance.html': {
    hero: { src: 'assets/education-classroom.jpg', alt: 'Educational development program in partner nations' },
    img2: { src: 'assets/healthcare-global.jpg', alt: 'Global healthcare capacity building and assistance' },
    img3: { src: 'assets/clean-energy-landscape.jpg', alt: 'Clean energy infrastructure supporting sustainable development' }
  },
  'diplomacy.html': {
    hero: { src: 'assets/white-house-south-lawn.jpg', alt: 'White House - center of U.S. diplomatic leadership' },
    img2: { src: 'assets/diplomatic-handshake.jpg', alt: 'Diplomatic engagement between officials' },
    img3: { src: 'assets/luxury-conference-hall.jpg', alt: 'State-level diplomatic conference facility' }
  },
  'emerging-tech.html': {
    hero: { src: 'assets/semiconductor-circuit-board.jpg', alt: 'Advanced semiconductor technology powering AI innovation' },
    img2: { src: 'assets/data-center-servers.jpg', alt: 'Data center infrastructure for AI and cloud computing' },
    img3: { src: 'assets/tech-innovation-lab.jpg', alt: 'Technology innovation laboratory for emerging research' }
  },
  'fentanyl-narcotics.html': {
    hero: { src: 'assets/cargo-ships-harbor.jpg', alt: 'Port security and narcotics interdiction operations' },
    img2: { src: 'assets/golden-gate-bridge.jpg', alt: 'U.S. West Coast port of entry for supply chain monitoring' },
    img3: { src: 'assets/policy-research-desk.jpg', alt: 'Counter-narcotics policy research and analysis' }
  },
  'fighting-corruption.html': {
    hero: { src: 'assets/modern-conference-room.jpg', alt: 'Anti-corruption compliance and governance framework' },
    img2: { src: 'assets/analytics-dashboard.jpg', alt: 'Financial transparency monitoring and analytics' },
    img3: { src: 'assets/world-map-connections.jpg', alt: 'Global anti-corruption network and transparency initiatives' }
  },
  'gender-equality.html': {
    hero: { src: 'assets/corporate-summit-panel.jpg', alt: 'Leadership summit promoting gender equality in policy' },
    img2: { src: 'assets/education-classroom.jpg', alt: 'Girls education programs across Asia' },
    img3: { src: 'assets/graduation-ceremony.jpg', alt: 'Women in leadership and professional advancement' }
  },
  'global-health.html': {
    hero: { src: 'assets/healthcare-global.jpg', alt: 'Global health security and pandemic preparedness' },
    img2: { src: 'assets/colombo-sri-lanka.jpg', alt: 'Health infrastructure in developing Asian nations' },
    img3: { src: 'assets/nature-sustainability.jpg', alt: 'Environmental health and one-health approach' }
  },
  'international-organizations.html': {
    hero: { src: 'assets/un-general-assembly.jpg', alt: 'United Nations General Assembly hall' },
    img2: { src: 'assets/earth-night-globe.jpg', alt: 'Global interconnection of international organizations' },
    img3: { src: 'assets/modern-business-towers.jpg', alt: 'International organization headquarters' }
  },
  'iran.html': {
    hero: { src: 'assets/riyadh-kingdom-tower.jpg', alt: 'Middle East strategic landscape and regional dynamics' },
    img2: { src: 'assets/naval-vessel-ocean.jpg', alt: 'Naval presence in the Persian Gulf and Strait of Hormuz' },
    img3: { src: 'assets/pentagon-building.jpg', alt: 'Defense planning for Middle East security challenges' }
  },
  'israeli-palestinian.html': {
    hero: { src: 'assets/earth-night-globe.jpg', alt: 'Geopolitical dynamics of the Middle East' },
    img2: { src: 'assets/diplomatic-handshake.jpg', alt: 'Diplomatic negotiations and peace process' },
    img3: { src: 'assets/un-general-assembly.jpg', alt: 'United Nations resolutions on Middle East peace' }
  },
  'migration-refugees.html': {
    hero: { src: 'assets/train-transit-asia.jpg', alt: 'Transit infrastructure and migration corridors' },
    img2: { src: 'assets/colombo-sri-lanka.jpg', alt: 'South Asian displacement and refugee protection' },
    img3: { src: 'assets/hanoi-old-quarter.jpg', alt: 'Southeast Asian communities and human mobility' }
  },
  'national-security-workforce.html': {
    hero: { src: 'assets/us-state-dept.jpg', alt: 'U.S. State Department and national security workforce' },
    img2: { src: 'assets/luxury-conference-hall.jpg', alt: 'National security training and professional development' },
    img3: { src: 'assets/policy-research-desk.jpg', alt: 'National security research and strategic planning' }
  },
  'north-korea.html': {
    hero: { src: 'assets/seoul-skyline-night.jpg', alt: 'Seoul skyline - frontline of Korean Peninsula security' },
    img2: { src: 'assets/military-aircraft-carrier.jpg', alt: 'U.S. military deterrence posture in the Korean Peninsula' },
    img3: { src: 'assets/tokyo-skyline.jpg', alt: 'Japan trilateral security cooperation on North Korea' }
  },
  'nuclear-risk-reduction.html': {
    hero: { src: 'assets/microchip-production.jpg', alt: 'Advanced technology and nuclear monitoring systems' },
    img2: { src: 'assets/earth-night-globe.jpg', alt: 'Global nuclear non-proliferation framework' },
    img3: { src: 'assets/washington-monument.jpg', alt: 'U.S. leadership in arms control negotiations' }
  },
  'rebalancing-power.html': {
    hero: { src: 'assets/singapore-skyline-panorama.jpg', alt: 'Singapore - strategic hub for Indo-Pacific rebalancing' },
    img2: { src: 'assets/aircraft-carrier-deck.jpg', alt: 'Naval power projection and Pacific deterrence' },
    img3: { src: 'assets/taipei-101-tower.jpg', alt: 'Taiwan and first island chain strategic balance' }
  },
  'russia-ukraine.html': {
    hero: { src: 'assets/pentagon-building.jpg', alt: 'Pentagon coordinating allied response to Russia-Ukraine conflict' },
    img2: { src: 'assets/us-flag-closeup.jpg', alt: 'American commitment to European security and NATO' },
    img3: { src: 'assets/military-aircraft-carrier.jpg', alt: 'Allied defense posture in response to Russian aggression' }
  },
  'saudi-nuclear-deal.html': {
    hero: { src: 'assets/riyadh-kingdom-tower.jpg', alt: 'Riyadh skyline - U.S.-Saudi nuclear cooperation framework' },
    img2: { src: 'assets/dubai-modern-skyline.jpg', alt: 'Gulf states energy transition and nuclear ambitions' },
    img3: { src: 'assets/clean-energy-landscape.jpg', alt: 'Clean energy alternatives and nuclear governance' }
  },
  'trade-economic-security.html': {
    hero: { src: 'assets/container-port-logistics.jpg', alt: 'Global container port logistics and trade security' },
    img2: { src: 'assets/cargo-ships-harbor.jpg', alt: 'Maritime trade routes and economic security' },
    img3: { src: 'assets/singapore-port.jpg', alt: 'Singapore port transshipment and supply chain resilience' }
  }
};

let updated = 0;
Object.keys(imageMap).forEach(file => {
  const filepath = file;
  if (!fs.existsSync(filepath)) { console.log('SKIP (missing): ' + file); return; }
  let html = fs.readFileSync(filepath, 'utf8');
  const imgs = imageMap[file];
  
  // Replace hero image (first img tag after the divider)
  const heroRegex = /(<!-- Image 1 -->\s*<img\s+src=")([^"]+)("\s+alt=")([^"]+)(")/;
  if (heroRegex.test(html)) {
    html = html.replace(heroRegex, `$1${imgs.hero.src}$3${imgs.hero.alt}$5`);
  }
  
  // Replace images 2 & 3
  const gridImgRegex = /(<!-- Images 2 & 3 -->\s*<div[^>]*>\s*<img\s+src=")([^"]+)("\s+alt=")([^"]+)("[^>]*>\s*<img\s+src=")([^"]+)("\s+alt=")([^"]+)(")/;
  if (gridImgRegex.test(html)) {
    html = html.replace(gridImgRegex, `$1${imgs.img2.src}$3${imgs.img2.alt}$5${imgs.img3.src}$7${imgs.img3.alt}$9`);
  }
  
  fs.writeFileSync(filepath, html);
  updated++;
  console.log('UPDATED: ' + file);
});
console.log('\nTotal updated: ' + updated + ' issue sub-pages');
