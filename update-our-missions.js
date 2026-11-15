const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let modifiedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Navbar and general link text
  content = content.replace(/>Our Issues<\/a>/g, '>Our Missions</a>');

  // 2. Headings in index.html and issues.html
  content = content.replace(/OUR<br>ISSUES/g, 'OUR<br>MISSIONS');
  content = content.replace(/<h1 class="issues-hub-giant-title">OUR ISSUES<\/h1>/g, '<h1 class="issues-hub-giant-title">OUR MISSIONS</h1>');
  content = content.replace(/OUR ISSUES/g, 'OUR MISSIONS');

  // 3. Badges / kickers / breadcrumbs
  content = content.replace(/Our Issues &middot;/g, 'Our Missions &middot;');

  // 4. Buttons and CTAs
  content = content.replace(/VIEW ALL ISSUES/g, 'VIEW ALL MISSIONS');
  content = content.replace(/BACK TO ALL ISSUES/g, 'BACK TO ALL MISSIONS');
  content = content.replace(/EXPLORE ALL ISSUES/g, 'EXPLORE ALL MISSIONS');

  // 5. Page titles
  content = content.replace(/<title>Our Issues \|/g, '<title>Our Missions |');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    modifiedCount++;
  }
});

console.log('Successfully updated "Our Issues" to "Our Missions" across ' + modifiedCount + ' HTML files.');
