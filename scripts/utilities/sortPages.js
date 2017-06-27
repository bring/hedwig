/**
 *
 * sortPages
 *
 * -> Given array of pages, sorts pages by title (alphabetically)
 *
 */

function sortPages(arr) {
  return arr.sort((a, b) => {
    var sortStringA = a.src ? a.src.split('/').pop() : a.title;
    var sortStringB = b.src ? b.src.split('/').pop() : b.title;
    return (sortStringA < sortStringB) ? -1 : (sortStringA > sortStringB) ? 1 : 0
  });
}

module.exports = sortPages;
