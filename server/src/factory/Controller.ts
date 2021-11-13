import { CreateContactController } from "src/controller/CreateContact";
import { CreateContactControllerProps } from "src/controller/CreateContact/type";

class Controller {
  readonly createContact: CreateContactControllerProps.Impl;

  constructor() {
    this.createContact = new CreateContactController();
  }
}

const controller = new Controller();

export default controller;
