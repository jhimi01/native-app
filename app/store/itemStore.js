import { create } from "zustand";

const itemStore = create((set) => ({
  items: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });

    try {
      const response = await fetch(
        "https://dummyjson.com/c/89b3-6216-4a35-a001"
      );
      const data = await response.json();

      set({ items: data.products });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isloading: false });
    }
  },
}));

export default itemStore;
