export type StorageValue = string | number | null | undefined;

export class SharedStorageService {
  private storage: Record<string, StorageValue> = {};

  public setAdults(index: number, value: number): void {
    this.storage[`adults${index}`] = value;
  }

  public getAdults(index: number): StorageValue {
    return this.storage[`adults${index}`];
  }
}
