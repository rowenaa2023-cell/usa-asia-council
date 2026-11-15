const fs = require('fs');
const http = require('http');

console.log('=== 1. CHECKING LINKS IN INDEX.HTML ===');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const linkMatches = indexHtml.match(/href=["']([^"']+)["']/g) || [];
const checkedLinks = new Set();
let brokenLinks = 0;

linkMatches.forEach(lm => {
  const raw = lm.replace(/href=["']/, '').replace(/["']$/, '');
  const url = raw.split('#')[0];
  if (!url || url.startsWith('http') || url.startsWith('mailto') || url.startsWith('javascript')) return;
  if (checkedLinks.has(url)) return;
  checkedLinks.add(url);
  if (!fs.existsSync(url)) {
    console.log('BROKEN LINK: ' + url);
    brokenLinks++;
  } else {
    console.log('OK LINK: ' + url);
  }
});

console.log('\n=== 2. CHECKING ALL IMAGES ACROSS ALL HTML FILES ===');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let missingImgs = 0;
const checkedImgs = new Set();

htmlFiles.forEach(hf => {
  const content = fs.readFileSync(hf, 'utf8');
  const imgMatches = content.match(/(?:src=["']|url\(["']?)([^"')\s]+\.(?:jpg|png|jpeg))/gi) || [];
  imgMatches.forEach(im => {
    const srcMatch = im.match(/(?:src=["']|url\(["']?)([^"')\s]+)/i);
    if (srcMatch && srcMatch[1]) {
      const src = srcMatch[1];
      if (checkedImgs.has(src)) return;
      checkedImgs.add(src);
      if (!fs.existsSync(src)) {
        console.log('MISSING IMAGE in ' + hf + ': ' + src);
        missingImgs++;
      } else {
        const sz = fs.statSync(src).size;
        if (sz === 0) {
          console.log('EMPTY IMAGE in ' + hf + ': ' + src);
          missingImgs++;
        }
      }
    }
  });
});
console.log('Total unique images referenced: ' + checkedImgs.size + ', Issues: ' + missingImgs);

console.log('\n=== 3. CHECKING PROHIBITED TERMS ===');
const terms = ['FP4A', 'Foreign Policy for America', 'Modi', 'Imran Khan', 'Bilawal', 'Bhutto'];
let prohibitedFound = 0;
htmlFiles.forEach(hf => {
  const content = fs.readFileSync(hf, 'utf8');
  terms.forEach(t => {
    const regex = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (regex.test(content)) {
      console.log('FOUND PROHIBITED TERM "' + t + '" in ' + hf);
      prohibitedFound++;
    }
  });
});
if (prohibitedFound === 0) {
  console.log('ALL CLEAR! Zero prohibited terms found across all 57 pages.');
}

console.log('\n=== 4. TESTING LOCALHOST SERVER ===');
const testPages = [
  '/',
  '/index.html',
  '/about.html',
  '/issues.html',
  '/events.html',
  '/donate.html',
  '/support.html',
  '/scorecard.html',
  '/nextgen.html',
  '/intermestic.html',
  '/analysis.html',
  '/briefs.html',
  '/us-pakistan-relationship.html',
  '/us-saudi-arabia-relationship.html',
  '/article-chips-act-semiconductor.html',
  '/article-indo-pacific-maritime.html',
  '/article-digital-economy-asean.html',
  '/article-us-pakistan-economic.html',
  '/article-critical-minerals.html',
  '/article-congressional-asia-caucus.html'
];

let serverTestsPassed = 0;
let serverTestsTotal = testPages.length;

function fetchUrl(url, cb) {
  http.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const redirectUrl = res.headers.location.startsWith('http') ? res.headers.location : 'http://localhost:3000' + res.headers.location;
      fetchUrl(redirectUrl, cb);
    } else {
      cb(res);
    }
  }).on('error', (err) => cb({ statusCode: 500, error: err }));
}

function testPage(index) {
  if (index >= testPages.length) {
    console.log('\n=== FINAL VERIFICATION SUMMARY ===');
    console.log('Broken Links: ' + brokenLinks);
    console.log('Image Issues: ' + missingImgs);
    console.log('Prohibited Terms: ' + prohibitedFound);
    console.log('Server 200 OK Tests: ' + serverTestsPassed + '/' + serverTestsTotal);
    return;
  }
  const page = testPages[index];
  fetchUrl('http://localhost:3000' + page, (res) => {
    if (res.statusCode === 200) {
      serverTestsPassed++;
      console.log('HTTP 200 OK: ' + page);
    } else {
      console.log('HTTP ' + res.statusCode + ': ' + page);
    }
    testPage(index + 1);
  });
}

testPage(0);
