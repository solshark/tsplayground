import type { Purchase, PurchaseId } from "./purchase.interface";
import cuid from "cuid";

export class Repository {
  private fullList: Purchase[];
  constructor() {
    this.fullList = [];
  }
  getPurchases(): Purchase[] {
    return this.fullList;
  }

  add(item: Omit<Purchase, "id">): PurchaseId {
    const id = cuid();
    this.fullList.push({ id, ...item });
    return id;
  }

  getById(id: PurchaseId): Purchase | undefined {
    return this.fullList.find((item) => item.id === id);
  }

  delete(id: PurchaseId): void {
    this.fullList = this.fullList.filter((item) => item.id !== id);
  }
}
