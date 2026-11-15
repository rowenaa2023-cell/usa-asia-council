const fs = require('fs');
const path = require('path');

// 1. Audit events.html links & images
const content = fs.readFileSync('c:/USA/events.html', 'utf8');

// Event links
const linkRegex = /href=["'](event-[^"']+)["']/g;
let m;
let brokenLinks = 0;
let totalLinks = 0;
while ((m = linkRegex.exec(content)) !== null) {
  totalLinks++;
  const filePath = path.join('c:/USA', m[1]);
  if (!fs.existsSync(filePath)) {
    console.error('BROKEN EVENT LINK in events.html:', m[1]);
    brokenLinks++;
  }
}
console.log('Total event links on events.html: ' + totalLinks + ' | Broken: ' + brokenLinks);

// Check all image sources in events.html
const imgRegex = /(?:src=["']|url\(['"]?)([^'"()]+(?:\.jpg|\.png|\.jpeg|\.svg))['"]?\)?/gi;
let imgMatches;
let brokenImgs = 0;
let uniqueImgs = new Set();
while ((imgMatches = imgRegex.exec(content)) !== null) {
  const relPath = imgMatches[1];
  uniqueImgs.add(relPath);
  const fullPath = path.join('c:/USA', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error('BROKEN IMAGE in events.html:', relPath);
    brokenImgs++;
  }
}
console.log('Total unique images in events.html: ' + uniqueImgs.size + ' | Broken: ' + brokenImgs);

// 2. Audit all 25 images from the user's folder
const srcDir = 'c:/Users/faddi/OneDrive/Documents/Faraz bhai NGO Website Images';
const origFiles = fs.readdirSync(srcDir);
console.log('Total original files in user folder: ' + origFiles.length);

const manifest = JSON.parse(fs.readFileSync('c:/USA/assets/events/manifest.json', 'utf8'));
let missingInEvents = 0;
manifest.forEach(item => {
  const assetPath = 'assets/events/' + item.clean;
  if (!content.includes(assetPath)) {
    console.warn('Image not found in events.html:', assetPath);
    missingInEvents++;
  }
});
if (missingInEvents === 0) {
  console.log('CONFIRMED: ALL ' + manifest.length + ' IMAGES FROM USER FOLDER ARE UTILIZED ON EVENTS.HTML!');
} else {
  console.error('WARNING: ' + missingInEvents + ' images missing from events.html');
}

// 3. Prohibited terms check across events.html and all 25 event subpages
const prohibited = ['FP4A', 'Foreign Policy for America', 'Modi', 'Imran Khan', 'Bilawal', 'Bhutto'];
let prohibitedHits = 0;
const filesToCheck = ['events.html', ...manifest.map(m => m.clean.replace(/\.jpg$/, '.html'))];

const allEventHtmls = fs.readdirSync('c:/USA').filter(f => f.startsWith('event-'));
allEventHtmls.push('events.html');

allEventHtmls.forEach(f => {
  const c = fs.readFileSync(path.join('c:/USA', f), 'utf8');
  prohibited.forEach(p => {
    const rx = new RegExp('\\b' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (rx.test(c)) {
      console.error('PROHIBITED TERM "' + p + '" found in ' + f);
      prohibitedHits++;
    }
  });
});
if (prohibitedHits === 0) {
  console.log('CONFIRMED: ZERO prohibited terms found across all event pages.');
}

// 4. Check subpage links and images
let subpageImgErrors = 0;
allEventHtmls.forEach(f => {
  const c = fs.readFileSync(path.join('c:/USA', f), 'utf8');
  let sm;
  while ((sm = imgRegex.exec(c)) !== null) {
    const ip = path.join('c:/USA', sm[1]);
    if (!fs.existsSync(ip)) {
      console.error('BROKEN IMAGE in ' + f + ':', sm[1]);
      subpageImgErrors++;
    }
  }
});
console.log('Subpage broken images: ' + subpageImgErrors);
