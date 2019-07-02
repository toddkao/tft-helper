import { tft } from '../env';

export default {
  champs: () => tft({url: 'champions.json'}),
  classes: () => tft({url: 'classes.json'}),
  items: () => tft({url: 'items.json'}),
  origins: () => tft({url: 'origins.json'}),
  tiers: () => tft({url: 'tierlist.json'}),
}