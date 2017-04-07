var styles;
var scripts;

var production = process.env.NODE_ENV === 'production';

if (production) {
  styles [
    'http://hedwig-cdn.s3.amazonaws.com/assets/fonts/fonts.css',
    'https://s3.eu-west-2.amazonaws.com/hedwig-cdn/main.css'
  ];
  scripts = ['https://s3.eu-west-2.amazonaws.com/hedwig-cdn/main.js'];
}

if (!production) {
  styles = [
    'http://hedwig-cdn.s3.amazonaws.com/assets/fonts/fonts.css',
    'http://localhost:3001/main.css'
  ];
  scripts = ['http://localhost:3001/main.js'];
}

module.exports = {
  title: 'Hedwig',
  styles: styles,
  scripts: scripts,
  // logoSrc: './assets/hedwig_720.png',
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
