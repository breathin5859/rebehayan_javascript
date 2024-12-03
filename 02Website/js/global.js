import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";

// include
includeHTML("/02Website/include/header.html", ".header");
includeHTML("/02Website/include/footer.html", ".footer").then(() => {
  // footer
  footerYear();
});
