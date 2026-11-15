const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const downloads = [
    {
        filename: 'event-spanberger.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Rep._Abigail_Spanberger_-_118th_Congress.jpg'
    },
    {
        filename: 'event-katherine-tai.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Katherine_Tai%2C_official_portrait.jpg'
    },
    {
        filename: 'event-tim-kaine.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Tim_Kaine%2C_official_portrait_%28119th_Congress%29.jpg'
    },
    {
        filename: 'event-richard-verma.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Richard_R._Verma%2C_Deputy_Secretary_of_State.jpg'
    },
    {
        filename: 'event-colin-kahl.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dr._Colin_H._Kahl.jpg'
    },
    {
        filename: 'event-nato-75.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Joe_Biden_and_NATO_leaders_pose_for_a_family_photo%2C_2024-07-10_%2853847594232%29.jpg'
    },
    {
        filename: 'event-ukraine-congress.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Volodymyr_Zelensky_during_a_Joint_Meeting_of_Congress_with_flag_of_the_United_States.jpg'
    },
    {
        filename: 'event-david-sanger.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/David_E._Sanger_%2839414271385%29.jpg'
    },
    {
        filename: 'event-feminist-policy.jpg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Ambassadors_Spratlen_and_Verveer_Walk_With_Kyrgyz_Republic_President_Otunbayeva_%285957479041%29.jpg'
    }
];

downloads.forEach(d => {
    const dest = path.join(__dirname, 'assets', d.filename);
    console.log(`Downloading: ${d.filename}...`);
    try {
        const cmd = `curl.exe -s -L -A "${userAgent}" "${d.url}" -o "${dest}"`;
        execSync(cmd, { stdio: 'inherit' });
        const stat = fs.statSync(dest);
        console.log(`Saved: ${d.filename} (${stat.size} bytes)`);
    } catch (err) {
        console.error(`Failed downloading ${d.filename}:`, err.message);
    }
});

console.log('Download complete!');
