const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop', filename: 'contact-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop', filename: 'about-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop', filename: 'properties-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=70&w=1200&auto=format&fit=crop', filename: 'home-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=70&w=1200&auto=format&fit=crop', filename: 'map-plan.jpg' },
  { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1200&auto=format&fit=crop', filename: 'prop-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=70&w=800&auto=format&fit=crop', filename: 'prop-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=70&w=800&auto=format&fit=crop', filename: 'prop-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=800&auto=format&fit=crop', filename: 'prop-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=70&w=800&auto=format&fit=crop', filename: 'team-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=70&w=800&auto=format&fit=crop', filename: 'team-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=70&w=800&auto=format&fit=crop', filename: 'team-3.jpg' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  for (const img of images) {
    const dest = path.join(dir, img.filename);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.filename}`);
    } catch (err) {
      console.error(`Failed to download ${img.filename}: ${err.message}`);
    }
  }
}

run();
