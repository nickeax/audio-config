import { EquipmentBase } from "./equipmentBase";

export class RackItem extends EquipmentBase {
  constructor(id, name, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}