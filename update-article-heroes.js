const fs = require('fs');
const path = require('path');

const mappings = [
    {
        file: 'event-spanberger-canvas.html',
        oldImg: 'assets/about-us.png',
        newImg: 'assets/event-spanberger.jpg'
    },
    {
        file: 'event-tim-kaine-korean-families.html',
        oldImg: 'assets/hero-slide-3.png',
        newImg: 'assets/event-tim-kaine.jpg'
    },
    {
        file: 'event-nato-75-side-event.html',
        oldImg: 'assets/hero-slide-4.png',
        newImg: 'assets/event-nato-75.jpg'
    },
    {
        file: 'event-deputy-sec-richard-verma.html',
        oldImg: 'assets/hero-diplomatic.png',
        newImg: 'assets/event-richard-verma.jpg'
    },
    {
        file: 'event-ustr-katherine-tai.html',
        oldImg: 'assets/singapore-port.jpg',
        newImg: 'assets/event-katherine-tai.jpg'
    },
    {
        file: 'event-ukraine-conflict-congress.html',
        oldImg: 'assets/hero-slide-2.png',
        newImg: 'assets/event-ukraine-congress.jpg'
    },
    {
        file: 'event-colin-kahl-defense.html',
        oldImg: 'assets/hero-slide-3.png',
        newImg: 'assets/event-colin-kahl.jpg'
    }
];

mappings.forEach(m => {
    const filePath = path.join(__dirname, m.file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace in primary figure
        content = content.replace(m.oldImg, m.newImg);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated hero in ${m.file} -> ${m.newImg}`);
    }
});

console.log('Article hero updates complete!');
