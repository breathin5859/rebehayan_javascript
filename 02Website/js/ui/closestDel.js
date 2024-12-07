export const closestDel = (selector, target) => {
  const delBnts = document.querySelectorAll(selector);

  delBnts.forEach((delBnt) => {
    delBnt.addEventListener("click", (e) => {
      const del = e.target;
      if (del.closest(target)) {
        del.closest(target).remove();
      }
    });
  });
};
