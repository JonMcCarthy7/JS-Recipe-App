import str from "./models/Search";
// import { add as a, mult as m } from "./views/searchView";
import * as searchView from "./views/searchView";

console.log(
  `${str}. ${searchView.add(
    searchView.ID,
    3
  )} is the add function. ${searchView.mult(5, 5)} is the multiply function.`
);
