import { Property } from "./type";

class Page {
  private readonly _home: Property = {
    pathname: "/",
    categories: []
  };

  constructor() {}

  get home() {
    return this._home;
  }
}

const page = new Page();

export { page };
