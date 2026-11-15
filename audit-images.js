const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const allSrcs = new Set();
const pageSrcs = {};
files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const regex = /(?:src=["']|url\(["']?)([^"')\s]+\.(?:jpg|png|jpeg))/gi;
  let m;
  const srcs = new Set();
  while ((m = regex.exec(html)) !== null) {
    srcs.add(m[1]);
    allSrcs.add(m[1]);
  }
  pageSrcs[f] = srcs.size;
});
console.log('Total HTML files: ' + files.length);
console.log('Total unique image refs across site: ' + allSrcs.size);
console.log('\nPer-page image counts:');
Object.keys(pageSrcs).sort().forEach(f => console.log('  ' + pageSrcs[f] + ' imgs: ' + f));
console.log('\nAll ' + allSrcs.size + ' unique images:');
Array.from(allSrcs).sort().forEach(s => console.log('  ' + s));
