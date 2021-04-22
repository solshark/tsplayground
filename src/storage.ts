export interface BasicStorageInterface<T extends { id: number }> {
  all: () => T[];
  add: (i: T) => number;
  getById: (id: number) => T | undefined;
}

export type Product = {
  id: number;
  title: string;
  price: number;
};

export type Store = {
  id: number;
  address: string;
};
abstract class BasicStorage<T extends { id: number }>
  implements BasicStorageInterface<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }
  all = () => this.items;
  add = (i: T) => this.items.push(i);
  getById = (id: number): T | undefined => this.items.find((i) => i.id === id);
}

class ProductsStorage extends BasicStorage<Product> {
  getPriceById(id: number) {
    if (this.getById(id)) {
      return this.getById(id)?.price;
    } else {
      return 0;
    }
  }
}

class StoreStorage extends BasicStorage<Store> {
  getAddresById(id: number) {
    if (this.getById(id)) {
      return this.getById(id)?.address;
    } else {
      return 0;
    }
  }
}

const productStorage = new ProductsStorage();
productStorage.getPriceById(1);

const storeStorage = new StoreStorage();
storeStorage.getAddresById(1);
storeStorage.all();

// class StoreStorage implements BasicStorage<Store> {
//   private stores: Store[];
//   constructor() {
//     this.stores = [];
//   }
//   all = () => this.stores;
//   add = (i: Store) => this.stores.push(i);
//   getById = (id: number) => this.stores.find((i) => i.id === id);
// }
