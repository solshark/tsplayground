// import { Purchase } from "./purchase.interface";
import { Repository } from "./repo";
import { Purchase } from "./purchase.interface";

describe("repository", () => {
  it("add method", () => {
    expect.assertions(1);
    const repo = new Repository();
    const PURCHASE_1: Purchase = {
      id: 1,
      title: "Oranges",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_2: Purchase = {
      id: 2,
      title: "Strawberry",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_3: Purchase = {
      id: 3,
      title: "Lemon",
      price: 30,
      isBaught: false,
    };
    repo.add(PURCHASE_1);
    repo.add(PURCHASE_2);
    repo.add(PURCHASE_3);
    expect(repo.getById(PURCHASE_3.id)).toStrictEqual(PURCHASE_3);
  });
  it("add should return new item id", () => {
    expect.assertions(1);
    const repo = new Repository();
    const newItem: Omit<Purchase, "id"> = {
      title: "test",
      isBaught: false,
      price: 100,
    };
    const newId = repo.add(newItem);
    const existingItem = repo.getById(newId);
    expect(existingItem).toStrictEqual({ id: newId, ...newItem });
  });
  it("getById method", () => {
    expect.assertions(1);
    const repo = new Repository();
    const PURCHASE_1: Purchase = {
      id: 1,
      title: "Oranges",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_2: Purchase = {
      id: 2,
      title: "Strawberry",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_3: Purchase = {
      id: 3,
      title: "Lemon",
      price: 30,
      isBaught: false,
    };
    repo.add(PURCHASE_1);
    repo.add(PURCHASE_2);
    repo.add(PURCHASE_3);
    expect(repo.getById(PURCHASE_2.id)).toStrictEqual(PURCHASE_2);
  });
  it("check delete method", () => {
    expect.assertions(1);
    const repo = new Repository();
    const PURCHASE_1: Purchase = {
      id: 1,
      title: "Oranges",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_2: Purchase = {
      id: 2,
      title: "Strawberry",
      price: 30,
      isBaught: false,
    };
    const PURCHASE_3: Purchase = {
      id: 3,
      title: "Lemon",
      price: 30,
      isBaught: false,
    };
    repo.add(PURCHASE_1);
    repo.add(PURCHASE_2);
    repo.add(PURCHASE_3);
    repo.delete(PURCHASE_2.id);
    expect(repo.getPurchases()).not.toContain(PURCHASE_2);
  });
});
