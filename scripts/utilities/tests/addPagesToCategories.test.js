var addPagesToCategories = require('../addPagesToCategories');

const input = [{
  title: 'Category 1',
  pages: [{
    title: 'Title 1',
    path: 'Path 1',
    src: 'Src 1',
  }],
}, {
  title: 'Category 1',
  pages: [{
    title: 'Title 2',
    path: 'Path 2',
    src: 'Src 2',
  }],
}, {
  title: 'Category 1',
  pages: [{
    title: 'Title 3',
    path: 'Path 3',
    src: 'Src 3',
  }],
}, {
  title: 'Category 2',
  pages: [{
    title: 'Title 4',
    path: 'Path 4',
    src: 'Src 4',
  }],
}, {
  title: 'Category 2',
  pages: [{
    title: 'Title 5',
    path: 'Path 5',
    src: 'Src 5',
  }],
}];

const output = [{
  title: 'Category 1',
  pages: [{
    title: 'Title 1',
    path: 'Path 1',
    src: 'Src 1',
  }, {
    title: 'Title 2',
    path: 'Path 2',
    src: 'Src 2',
  }, {
    title: 'Title 3',
    path: 'Path 3',
    src: 'Src 3',
  }],
}, {
  title: 'Category 2',
  pages: [{
    title: 'Title 4',
    path: 'Path 4',
    src: 'Src 4',
  }, {
    title: 'Title 5',
    path: 'Path 5',
    src: 'Src 5',
  }],
}];

describe('Add pages to categories', () => {
  it('Takes an flat array of pages and generates category pages', () => {
    const test = addPagesToCategories(input);
    expect(test).toEqual(output);
  });
});
