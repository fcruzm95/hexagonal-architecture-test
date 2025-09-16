
export class LocalStorageRepository {
  read<T>(key: string): T {
    const readItem = localStorage.getItem(key);
    return JSON.parse(readItem ?? "{}");
  };

  save<T>(data: T, key: string) {
    localStorage.setItem(key, JSON.stringify(data));
  };
}
