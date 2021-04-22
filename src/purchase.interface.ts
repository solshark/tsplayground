export type PurchaseId = string;
export interface Purchase {
  id: PurchaseId;
  title: string;
  price: number;
  isBaught: boolean;
}
