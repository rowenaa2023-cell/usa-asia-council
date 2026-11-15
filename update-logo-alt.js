const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('assets/logo.png')) {
    const updated = content.replace(/<img\s+src="assets\/logo\.png"\s+alt="[^"]*"/g, '<img src="assets/logo.png" alt="USA Asia Foreign Policy Partnership Council"');
    if (updated !== content) {
      fs.writeFileSync(f, updated, 'utf8');
      count++;
    }
  }
});

console.log('Successfully updated logo alt attribute in ' + count + ' HTML files.');
