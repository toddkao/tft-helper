<template>
  <div class="page" :class="{'dark-theme': theme === 'dark'}">
    <div class="container">
      <div class="champ-container" :style="{
        'grid-template-columns': `repeat(${champWidth}, 1fr)`}" >
        <img
          class="champ"
          :class="[
            {'selected': selected[champ.key] === true || matchesGenericFilter[champ.key.toLowerCase()]},
            {'filteredType': matchesChampFilter[champ.key.toLowerCase()] === 'type'},
            {'filteredOrigin': matchesChampFilter[champ.key.toLowerCase()] === 'origin'},
            {'filteredBoth': matchesChampFilter[champ.key.toLowerCase()] === 'both'}
          ]"
          v-for="champ in champs"
          :key="champ.key"
          :src="champ.image"
          @mouseenter="setChampFilter([...champ.origin, ...champ.class])"
          @mouseleave="clearChampFilter()"
          @click="toggle(champ.key)"
        />
      </div>
      <div class="item-container" :style="{
        'grid-template-columns': `repeat(${itemWidth + 1}, 1fr)`}" >
        <div class="item-column" style="justify-content: flex-end">
          <img
            v-for="item in sortedItems"
            class="item"
            :key="`y-axis-${item.key}`"
            :src="item.image"
            :class="[
              {'selected': matchesGenericFilter[item.key.toLowerCase()]},
              {'selected-column': selected[item.name] === true }
            ]"
            @click="toggle(item.name)"
          />
        </div>

        <div
          class="item-column"
          v-for="item in sortedItems"
          :key="`row-${item.key}`"
          :class="[
            {'selected': matchesGenericFilter[item.key.toLowerCase()]},
            {'selected-column': selected[item.name] === true }
          ]"
        >
          <img
            class="item"
            :class="{'selected': selected[item.name] === true || matchesGenericFilter[item.key.toLowerCase()]}"
            :src="item.image"
            @click="toggle(item.name)"
          />
          <img
            class="advanced-item"
            :class="{'selected': selected[nextItem.name] === true || matchesGenericFilter[nextItem.name.toLowerCase()]}"
            v-for="(nextItem, index) in item.buildsInto"
            :src="nextItem.image"
            :key="`adv-item-${nextItem.name}-${index}`"
            @click="toggle(nextItem.name)"
          />
        </div>
      </div>
    </div>
    <div class="filter-container">
      <select v-model="theme">
        <option value="dark"> Dark Mode </option>
        <option value="light"> Light mode</option>
      </select>
      <div>
        Filtering by:
      </div>
      <div v-if="champFilter">
        <div> Class/Origin </div>
        {{ champFilter }}
      </div>
      <div v-if="genericFilter !== ''">
        <div> Champ/Class/Origin/Item </div>
        <div>
          {{ genericFilter }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="type-container">
        <h1 class="class-title"> Classes </h1>
        <div v-for="(amount, type) in potentialClasses" :key="type">
          <span
            @mouseenter="setChampFilter([type])"
            @mouseleave="clearChampFilter()">
            {{ type }} {{ amount }}
          </span>
          <span
            v-for="tier in classBonuses(type)"
            :class="{'reached': amount >= tier.needed}"
            :key="tier.effect">
            ({{ tier.needed }})
            <!-- Effect: {{ tier.effect }} -->
          </span>
        </div>
      </div>
      <div class="origin-container">
        <h1 class="origin-title"> Origins </h1>
        <div v-for="(amount, origin) in potentialOrigins" :key="origin">
          <span
            @mouseenter="setChampFilter([origin])"
            @mouseleave="clearChampFilter()">
            {{ origin }} {{ amount }}
          </span>
          <span
            v-for="tier in originBonuses(origin)"
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
import { clearInterval, setInterval } from 'timers';

export default {
  name: 'home',
  data () {
    return {
      champs: [],
      champWidth: 1,
      selected: {},
      items: [],
      allItems: [],
      itemWidth: 1,
      classes: {},
      origins: {},
      champFilter: undefined,
      genericFilter: '',
      theme: 'dark'
    }
  },
  async mounted () {
    this.getChamps();
    this.getItems();
    this.getClasses();
    this.getOrigins();
    this.initKeyboardEventListener();
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
        this.champs[champ].origin.forEach(origin => {
          if (!origins[origin]) {
            origins[origin] = 1;
          } else {
            origins[origin] += 1;
          }
        })
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
    sortedItems () {
      const order = this.items.map(x => x.key)
      let sorted = this.items.map(item => {
        let ordered = [];
        order.forEach(orderItem => {
          let itemName = item.key;
          if (orderItem !== itemName) {
            let advItem = item.buildsInto.find(x => x.from.includes(orderItem))
            ordered.push(advItem);
          } else {
            let advItem = item.buildsInto.find(x => x.from.every((val) => val === orderItem))
            ordered.push(advItem);
          }
        })
        item.buildsInto = ordered;
        return item;
      })
      this.$forceUpdate();
      return sorted;
    },
    matchesGenericFilter () {
      let matches = {};
      this.allItems.forEach(item => {
        if (this.genericFilter && this.genericFilter.length > 1) {
          const matchesKey = item.key.toLowerCase().startsWith(this.genericFilter.toLowerCase())
          const matchesName = item.name.toLowerCase().startsWith(this.genericFilter.toLowerCase())
          if (matchesKey) {
            matches[item.key.toLowerCase()] = true
          }
          if (matchesName) {
            matches[item.name.toLowerCase()] = true
          }
        }
      })

      Object.keys(this.champs).forEach(key => {
        const champ = this.champs[key];
        if (this.genericFilter) {
          const matchesOrigin = champ.origin.some(origin => origin.toLowerCase().startsWith(this.genericFilter.toLowerCase()));
          const matchesType = champ.class.some(type => type.toLowerCase().startsWith(this.genericFilter.toLowerCase()));
          const matchesName = champ.name.toLowerCase().startsWith(this.genericFilter.toLowerCase());
          if (matchesType ||matchesOrigin || matchesName) {
            matches[champ.key.toLowerCase()] = true
          }
        }
      })

      return matches;
    },
    matchesChampFilter () {
      let matches = {};
      Object.keys(this.champs).forEach(key => {
        const champ = this.champs[key];
        if (this.champFilter) {
          const matchesOrigin = champ.origin.some(origin => this.champFilter.includes(origin))
          const matchesType = champ.class.some(type => this.champFilter.includes(type))
          if (matchesType && matchesOrigin) {
            matches[champ.key.toLowerCase()] = 'both'
          } else if (matchesType) {
            matches[champ.key.toLowerCase()] = 'type'
          } else if (matchesOrigin) {
            matches[champ.key.toLowerCase()] = 'origin'
          }
        }
      })
      return matches;
    }
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
              from: items[item].buildsFrom,
              image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/${item}.png`,
            }
          })
          this.items.push(item);
        }
        this.allItems.push(item);
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
    },
    classBonuses (type) {
      if (this.classes[type.toLowerCase()]) {
        return this.classes[type.toLowerCase()].bonuses;
      }
      return [];
    },
    originBonuses (origin) {
      if (this.origins[origin.toLowerCase()]) {
        return this.origins[origin.toLowerCase()].bonuses
      }
      return [];
    },
    setChampFilter (filter) {
      this.champFilter = filter;
    },
    clearChampFilter () {
      this.champFilter = undefined;
    },
    initKeyboardEventListener () {
      window.addEventListener("keydown", e => {
        const alphanumeric = /[a-zA-Z0-9-_ ]/;
        const str = String.fromCharCode(e.keyCode);
        if (e.keyCode === 8) {
          this.genericFilter = this.genericFilter.slice(0, this.genericFilter.length - 1)
        } else if (e.keyCode === 27) {
          this.genericFilter = '';
        } else if (alphanumeric.test(str)) {
          this.genericFilter += e.key;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@mixin desktopHover() {
  @media screen and (min-width: 993px) {
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
}

.page {
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  .champ-container {
    margin: 20px;
    display: grid;
    grid-gap: 2px;
    max-width: 50vmin;
    .champ {
      width: 100%;
      height: auto;
      opacity: 0.5;
      @include desktopHover();
    }
  }
  .item-container {
    margin: 20px;
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
      @include desktopHover();
    }
    .advanced-item {
      width: 100%;
      height: auto;
      opacity: 0.5;
      @include desktopHover();
    }
  }

  .type-container, .origin-container {
    margin: 50px;
    text-align: left;
    max-height: 30vmin;
    overflow: auto;
    .origin-title {
      color: red;
    }
    .class-title {
      color: blue;
    }
  }

  .filter-container {
    height: 50px;
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

  .filteredType {
    opacity: 1!important;
    outline: 4px solid blue;
    z-index: 2;
  }

  .filteredOrigin {
    opacity: 1!important;
    outline: 4px solid red;
    z-index: 2;
  }

  .filteredBoth {
    opacity: 1!important;
    outline: 4px solid magenta;
    z-index: 2;
  }

  .selected {
    opacity: 1!important;
    outline: 4px solid yellow;
    z-index: 2;
  }
}

@media screen and (max-width: 992px) {
  .page {
    height: initial;
    width: initial;
    .container {
      flex-direction: column;
      align-items: center;
    }
    .champ-container, .item-container {
      max-width: 90vw;
    }
    .type-container, .origin-container {
      margin: 50px;
      max-height: initial;
    }
  }
}

.dark-theme {
  background-color: #192438;
  color: white! important;
  &.page {
    .item-container {
      .selected-column {
        background-color: rgba(188, 188, 214, 0.5);
      }
    }
  }
}
</style>
