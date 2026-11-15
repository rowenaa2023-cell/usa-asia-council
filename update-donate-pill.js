const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('href="support.html" class="btn-council-donate-pill"')) {
        content = content.replace(/href="support\.html" class="btn-council-donate-pill"/g, 'href="donate.html" class="btn-council-donate-pill"');
        fs.writeFileSync(f, content, 'utf8');
        count++;
    }
});

console.log(`Updated donate pill in ${count} files.`);
