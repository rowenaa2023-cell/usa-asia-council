const fs = require('fs');
const files = fs.readdirSync('c:/USA').filter(f => f.endsWith('.html'));
const map = {};
files.forEach(f => {
  const content = fs.readFileSync('c:/USA/' + f, 'utf8');
  const matches = content.match(/href=["']event-[^"']+["']/g);
  if (matches) {
    map[f] = matches;
  }
});
console.log(JSON.stringify(map, null, 2));
