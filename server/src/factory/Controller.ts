import { CreateContactController } from "~controller/CreateContact";
import { CreateContactControllerProps } from "~controller/CreateContact/type";

class Controller {
  readonly createContact: CreateContactControllerProps.Impl;

  constructor() {
    this.createContact = new CreateContactController();
  }
}

const controller = new Controller();

export default controller;
