import { el } from "../helper.js";

export const footerYear = () => {
  const thisYear = new Date().getFullYear();
  el(".footer__copyright").prepend(thisYear);
};
