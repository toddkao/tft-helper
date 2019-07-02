<template>
  <div class="page">
    <div class="container">
      <div class="champ-container" :style="{
        'grid-template-columns': `repeat(${champWidth}, 1fr)`}" >
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
        'grid-template-columns': `repeat(${itemWidth + 1}, 1fr)`}" >
        <div class="item-column" style="justify-content: flex-end">
          <img
            v-for="item in items"
            class="item"
            :key="item.key"
            :src="item.image"
            :class="{'selected-column': selected[item.name] === true }"
            @click="toggle(item.name)"
          />
        </div>

        <div
          class="item-column"
          v-for="item in items"
          :key="item.key"
          :class="{'selected-column': selected[item.name] === true }"
        >
          <img
            class="item"
            :class="{'selected': selected[item.name] === true }"
            :src="item.image"
            @click="toggle(item.name)"
          />
          <img
            class="advanced-item"
            :class="{'selected': selected[nextItem.name] === true }"
            v-for="nextItem in item.buildsInto"
            :src="nextItem.image"
            :key="nextItem.name"
            @click="toggle(nextItem.name)"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="type-container">
        <h1> Classes </h1>
        <div v-for="(amount, type) in potentialClasses" :key="type">
          <span> {{ type }}: {{ amount }} </span>
          <span
            v-for="tier in classes[type.toLowerCase()].bonuses"
            :class="{'reached': amount >= tier.needed}"
            :key="tier.effect">
            ({{ tier.needed }})
            <!-- Effect: {{ tier.effect }} -->
          </span>
        </div>
      </div>
      <div class="origin-container">
        <h1> Origins </h1>
        <div v-for="(amount, origin) in potentialOrigins" :key="origin">
          <span> {{ origin }}: {{ amount }} </span>
          <span
            v-for="tier in origins[origin.toLowerCase()].bonuses"
            :class="{'reached': amount >= tier.needed}"
            :key="tier.effect">
            ({{ tier.needed }})
            <!-- Effect: {{ tier.effect }} -->
          </span>
        </div>
      </div>
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
      classes: {},
      origins: {},
    }
  },
  mounted () {
    this.getChamps();
    this.getItems();
    this.getClasses();
    this.getOrigins();
  },
  computed: {
    potentialClasses () {
      let classes = {};
      Object.keys(this.selectedChamps).forEach(champ => {
        if (!classes[this.champs[champ].class]) {
          classes[this.champs[champ].class] = 1;
        } else {
          classes[this.champs[champ].class] += 1;
        }
      })
      return classes;
    },
    potentialOrigins () {
      let origins = {};
      Object.keys(this.selectedChamps).map(champ => {
        if (!origins[this.champs[champ].origin]) {
          origins[this.champs[champ].origin] = 1;
        } else {
          origins[this.champs[champ].origin] += 1;
        }
      })
      return origins;
    },
    selectedItems () {
      let clone = Object.assign({}, this.selected);
      Object.keys(clone).forEach(key => {
        if (this.champs[key]) {
          delete clone[key]
        }
      })
      return clone;
    },
    selectedChamps () {
      let clone = Object.assign({}, this.selected);
      Object.keys(clone).forEach(key => {
        if (!this.champs[key]) {
          delete clone[key]
        }
      })
      return clone;
    },
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
    async getClasses () {
      const response = await tft.classes();
      this.classes = response.data;
    },
    async getOrigins () {
      const response = await tft.origins();
      this.origins = response.data;
    }
  }
};
</script>

<style lang="scss">
.page {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  .champ-container {
    display: grid;
    grid-gap: 2px;
    max-width: 50vmin;
    .champ {
      width: 100%;
      height: auto;
      opacity: 0.5;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  .item-container {
    display: grid;
    max-width: 50vmin;
    .item-column {
      display: flex;
      flex-direction: column;
    }
    .selected-column {
      background-color: rgba(0,0,150, 0.5);
    }
    .item {
      width: 100%;
      height: auto;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .advanced-item {
      width: 100%;
      height: auto;
      opacity: 0.5;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  .type-container, .origin-container {
    margin: 50px;
    text-align: left;
  }

  .reached {
    font-weight: bold;
    color: rgb(13, 194, 13);
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .selected {
    opacity: 1!important;
    outline: 4px solid yellow;
    z-index: 2;
  }

}
</style>
