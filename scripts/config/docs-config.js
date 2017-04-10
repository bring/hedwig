var styles;
var scripts;
var logo;

var production = process.env.NODE_ENV === 'production';

if (production) {
  styles = [
    'https://hedwig-cdn.s3.amazonaws.com/assets/fonts/fonts.css',
    'https://hedwig-cdn.s3.amazonaws.com/main.css'
  ];
  scripts = ['https://hedwig-cdn.s3.amazonaws.com/main.js'];
  logo = 'https://hedwig-cdn.s3.amazonaws.com/assets/images/logo.svg';
}

if (!production) {
  styles = [
    'http://localhost:3002/fonts/fonts.css',
    'http://localhost:3001/main.css'
  ];
  scripts = ['http://localhost:3001/main.js'];
  logo = 'http://localhost:3002/images/logo.svg';
}

module.exports = {
  title: 'Hedwig',
  styles: styles,
  scripts: scripts,
  responsiveSizes: [
    {name: 'base', width: 272, height: 340},
    {name: 'infant', width: 370, height: 768},
    {name: 'baby', width: 500, height: 1080},
    {name: 'child', width: 700, height: 1080},
    {name: 'teen', width: 1024, height: 1080},
    {name: 'adult', width: 1200, height: 1080},
    {name: 'elder', width: 1920, height: 1080}
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
