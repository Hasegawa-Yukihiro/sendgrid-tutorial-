import { ContactRepository } from "~repository/Contact/ContactRepository";
import { ContactRepositoryProps } from "~repository/Contact/type";

class RepositoryFactory {
  readonly contact: ContactRepositoryProps.Impl;

  constructor() {
    this.contact = new ContactRepository();
  }
}

const repository = new RepositoryFactory();

export default repository;
