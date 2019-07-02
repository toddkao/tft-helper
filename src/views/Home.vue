<template>
  <div class="page">
    <div class="champ-container" :style="{
      'grid-template-columns': `repeat(${champWidth}, 1fr)`
    }" >
      <img
        class="champ"
        :class="{'selected': selected[champ.key] === true }"
        v-for="champ in champs"
        :key="champ.key"
        :src="champ.image"
        @click="toggle(champ.key)"
      />
    </div>
    <div class="item-container" :style="{
      'grid-template-columns': `repeat(${itemWidth}, 1fr)`
    }" >
      <template v-for="item in items">
        <img
          class="champ"
          :class="{'selected': selected[item.name] === true }"
          :key="item.key"
          :src="item.image"
          @click="toggle(item.key)"
        />
        <img
          class="champ"
          :class="{'selected': selected[nextItem.name] === true }"
          v-for="nextItem in item.buildsInto"
          :src="nextItem.image"
          :key="nextItem.name"
          @click="toggle(nextItem.name)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import tft from '@/api/tft';
import riot from '@/api/riot';

export default {
  name: 'home',
  data () {
    return {
      champs: [],
      champWidth: 1,
      selected: {},
      items: [],
      itemWidth: 1,
    }
  },
  mounted () {
    this.getChamps();
    this.getItems();
  },
  methods: {
    toggle (key) {
      if (this.selected[key]) {
        this.$delete(this.selected, key);
      } else {
        this.$set(this.selected, key, true);
      }
    },
    async getChamps () {
      const response = await tft.champs();
      this.champs = response.data;

      const champKeys = Object.keys(this.champs);
      const length = champKeys.length;
      champKeys.forEach((key) => {
        this.champs[key].image = `http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/${key}.png`
      });
      this.champWidth = Math.floor(Math.sqrt(length));
    },
    async getItems () {
      const response = await tft.items();
      const items = response.data;

      const itemKeys = Object.keys(items);
      itemKeys.forEach((key) => {
        const item = items[key];
        if (item.buildsInto) {
          item.image = `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/${key}.png`;
          item.buildsInto = item.buildsInto.map(item => {
            return {
              name: item,
              image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/${item}.png`,
            }
          })
          this.items.push(item);
        }
      });
      this.itemWidth = this.items.length;
    },
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .champ-container {
    display: grid;
    max-width: 80vmin;
    max-height: 80vmin;
    .champ {
      width: 100%;
      height: auto;
      opacity: 0.5;
      &.selected {
        opacity: 1;
      }
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  .item-container {
    display: grid;
    max-width: 80vmin;
    max-height: 80vmin;
    .champ {
      width: 100%;
      height: auto;
      opacity: 0.5;
      &.selected {
        opacity: 1;
      }
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
}
</style>
