import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,

    currentTemp: tempretures[0],
    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],

    beverageName: "",

    savedBeverages: [] as {
      name: string;
      temp: string;
      base: (typeof bases)[number];
      creamer: (typeof creamers)[number];
      syrup: (typeof syrups)[number];
    }[],
  }),

  actions: {
    makeBeverage() {
      const trimmedName = this.beverageName.trim();

      if (!trimmedName) return;

      this.savedBeverages.push({
        name: trimmedName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      });

      this.beverageName = "";
    },

    showBeverage(beverage: {
      name: string;
      temp: string;
      base: (typeof bases)[number];
      creamer: (typeof creamers)[number];
      syrup: (typeof syrups)[number];
    }) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },

  persist: true,
});