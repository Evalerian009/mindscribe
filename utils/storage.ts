export const storage = {
  get: <T>(key: string, fallback: T): T => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};