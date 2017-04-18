
function addPagesToCategories(categories) {
  return categories.reduce((result, category) => {
    const parent = result.find(parentCat => parentCat.title === category.title);

    if (!parent) {
      return [...result, category];
    }

    parent.pages = [
      ...parent.pages,
      ...category.pages,
    ];

    return result;
  }, []);
}

module.exports = addPagesToCategories;
