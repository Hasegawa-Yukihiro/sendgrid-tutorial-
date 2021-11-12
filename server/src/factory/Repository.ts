import { ContactRepository } from "src/repository/Contact/ContactRepository";
import { ContactRepositoryProps } from "src/repository/Contact/type";

class RepositoryFactory {
  readonly contact: ContactRepositoryProps.Impl;

  constructor() {
    this.contact = new ContactRepository();
  }
}

const repository = new RepositoryFactory();

export default repository;
