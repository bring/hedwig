module.exports = {
  title: 'Hedwig',
  styles: ['../build/main.css'],
  // logoSrc: './assets/hedwig_720.png',
  theme: {
    color: 'red',
    background: '#F9F9F9',
    pageHeadingBackground: '#71c22e',
    pageHeadingTextColor: '#fff',
    pageHeadingHeight: 200,
    brandColor: '#0b9c49',
    sidebarColor: '#FFFFFF',
    sidebarColorActive: '#D1312E',
    sidebarColorText: '#0b9c49',
    sidebarColorTextActive: '#FF5555',
    sidebarColorLine: '#EBEBEB',
    sidebarColorHeading: '#0b9c49',
    textColor: '#333333',
    codeColor: '#00263E',
    linkColor: '#FF5555',
    textMedium: '#0b9c49',
    bgLight: '#F2F2F2',
    bgDark: '#333333',
    lightColor: '#D6D6D6',
  },
  pages: [
    {
      path: '/',             // The path where the page can be accessed
      title: 'Introduction', // The page title
      src: 'md/intro.md'   // Path to the Markdown document
    }
  ]
};
