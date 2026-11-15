const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;

    // Check if nav has issues.html but not events.html
    if (content.includes('href="issues.html"') && !content.includes('href="events.html">Events</a>') && !content.includes('href="events.html" class="active">Events</a>')) {
        // Replace in nav
        const targetNavRegex = /(<li><a href="issues\.html"[^>]*>.*?<\/a><\/li>)/;
        if (targetNavRegex.test(content)) {
            content = content.replace(targetNavRegex, `$1\n                    <li><a href="events.html">Events</a></li>`);
            changed = true;
        }
    }

    // In index.html, update POLICY BRIEFS & GLOBAL SUMMITS to link to events.html
    if (f === 'index.html') {
        const summitTarget = `<h3 class="res-card-title">POLICY BRIEFS & GLOBAL SUMMITS</h3>\n                        <p class="res-card-desc">\n                            In-depth analyses, legislative tracking, and bilateral strategic summits advancing U.S.–Asia cooperation for global peace and regional stability.\n                        </p>\n                        <a href="issues.html" class="res-plus-btn" aria-label="Explore Policy Briefs">`;
        const summitReplace = `<h3 class="res-card-title">POLICY BRIEFS & GLOBAL SUMMITS</h3>\n                        <p class="res-card-desc">\n                            In-depth analyses, legislative tracking, and bilateral strategic summits advancing U.S.–Asia cooperation for global peace and regional stability.\n                        </p>\n                        <a href="events.html" class="res-plus-btn" aria-label="Explore Global Summits & Events">`;
        if (content.includes(summitTarget)) {
            content = content.replace(summitTarget, summitReplace);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        count++;
        console.log(`Updated navbar/links in: ${f}`);
    }
});

console.log(`Total files updated: ${count}`);
