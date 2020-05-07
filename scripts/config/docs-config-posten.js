let styles;
let scripts;
let logo;

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === 'production') {
  styles = [
    'https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/assets/fonts.css',
    'https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/dist/posten.css',
  ];
  scripts = ['https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/dist/main.js', './examples.js'];
  logo = 'https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/assets/hedwig-logo.svg';
} else if (nodeEnv === 'staging') {
  styles = ['./fonts.css', './posten.css'];
  scripts = ['./main.js', './examples.js'];
  logo = './hedwig-logo.svg';
} else {
  styles = ['http://localhost:3001/fonts.css', 'http://localhost:3001/posten.css'];
  scripts = ['http://localhost:3001/main.js','http://localhost:3001/examples.js'];
  logo = 'http://localhost:3001/hedwig-logo.svg';
}

module.exports = {
  title: 'Hedwig/Posten',
  styles,
  scripts,
  responsiveSizes: [
    { name: 'small', width: 460, height: 340 },
    { name: 'medium', width: 720, height: 768 },
    { name: 'large', width: 940, height: 1080 },
    { name: 'xlarge', width: 1200, height: 1080 },
  ],
  logoSrc: logo,
  theme: {
    color: '#7bc144',
    background: '#F9F9F9',
    pageHeadingBackground: '#444444',
    pageHeadingTextColor: '#fff',
    pageHeadingHeight: 200,
    brandColor: '#444',
    sidebarColor: '#FFFFFF',
    sidebarColorActive: '#7bc144',
    sidebarColorText: '#444',
    sidebarColorTextActive: '#7bc144',
    sidebarColorLine: '#EBEBEB',
    sidebarColorHeading: '#7bc144',
    textColor: '#333333',
    codeColor: '#00263E',
    linkColor: '#048ebb',
    textMedium: '#444',
    bgLight: '#ffffff',
    bgDark: '#999999',
    lightColor: '#D6D6D6',
  },
  pages: [],
};
