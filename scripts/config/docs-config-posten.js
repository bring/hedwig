var styles;
var scripts;
var logo;

var production = process.env.NODE_ENV === 'production';

if (production) {
  styles = [
    'https://hedwig-cdn.s3.amazonaws.com/hedwig/assets/fonts/fonts.css',
    'https://bring-hedwig.s3.amazonaws.com/hedwig/main.css'
  ];
  scripts = ['https://bring-hedwig.s3.amazonaws.com/hedwig/main.js'];
  logo = 'https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/logo.svg';
}

if (!production) {
  styles = [
    'http://localhost:3001/assets/fonts/fonts.css',
    'http://localhost:3001/main.css'
  ];
  scripts = ['http://localhost:3001/main.js'];
  logo = 'http://localhost:3001/assets/images/logo.svg';
}

module.exports = {
  title: 'Hedwig/Posten',
  styles: styles,
  scripts: scripts,
  responsiveSizes: [
    {name: 'small', width: 460, height: 340},
    {name: 'medium', width: 720, height: 768},
    {name: 'large', width: 940, height: 1080},
    {name: 'xlarge', width: 1200, height: 1080}
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
    bgLight: '#F2F2F2',
    bgDark: '#333333',
    lightColor: '#D6D6D6',
  },
  pages: [],
};
