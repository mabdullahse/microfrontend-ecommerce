import { render } from "solid-js/web";

import AddToCart from "./AddToCart";

export default function placeAddToCart(el, id) {
  // ReactDOM.render(<App />, document.getElementById("app") = el);
  render(() => <AddToCart id={id} />, el);
}
