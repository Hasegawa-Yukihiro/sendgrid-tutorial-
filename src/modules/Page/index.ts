import { Property } from "./type";

class Page {
  private readonly _home: Property = {
    pathname: "/",
    categories: []
  };

  private readonly _contact: Property = {
    pathname: "/contact",
    categories: []
  };

  constructor() {}

  get home() {
    return this._home;
  }

  get contact() {
    return this._contact;
  }
}

const page = new Page();

export { page };
