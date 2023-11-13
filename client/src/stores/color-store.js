import { defineStore } from "pinia";

export const useColorStore = defineStore('color', {
    state: () => ({ colors: [ '#ECEE81', '#8DDFCB', '#82A0D8', '#EDB7ED' ] }),
    actions: {
        getColorArray(size)
        {
            const colorArray = [];
            for (let i = 0; i < size; i++)
            {
                colorArray.push(this.colors[i % this.colors.length]);
            }

            return (colorArray);
        }
    }
});