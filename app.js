let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(page) {
  const pages = document.querySelectorAll(".page");

  // Prevent out-of-bound navigation
  if (page < 1 || page > pages.length) return;

  // Loop through each page
  pages.forEach((pg, index) => {
    if (index < page - 1) {
      // Pages before the current page: hide them (flip to left)
      pg.classList.add("left-side");
    } else if (index === page - 1 || index === page) {
      // Current page and the next page: show them and flip them to right
      pg.classList.remove("left-side");
    } else {
      // Pages after the current page: reset visibility and flip effect
      pg.classList.remove("left-side");
    }
  });

  currentPage = page;
}

function nextPage() {
  // If we are not at the last page, move forward by two pages
  movePage(currentPage + 2);
}

function prevPage() {
  // If we are not at the first page, move backward by two pages
  movePage(currentPage - 2);
}

// New function to go to a specific page
function goToPage(page) {
  movePage(page);
}
