import { BehaviorSubject } from "rxjs";

class CartService {
  shoppingCart = [];
  shoppingCart$ = new BehaviorSubject(this.shoppingCart);

  constructor() {
    if (CartService.instance == null) {
      CartService.instance = this;
    }
    return CartService.instance;
  }

  add(item) {
    this.shoppingCart.push(item);
    this.shoppingCart$.next(this.shoppingCart);
    console.log(`Added item: ${item.company} to shopping cart.`);
  }

  get() {
    return this.shoppingCart$.asObservable();
  }
}

const cartService = new CartService();

export default cartService;
