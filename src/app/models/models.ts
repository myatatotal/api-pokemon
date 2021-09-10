export interface Attack {
  cost: Array<string>,
  name: string,
  text: string,
  damage: number,
  convertedEnergyCost: number
}

export interface Weaknesses {
  type: string,
  value: string
}

export interface Item {
  id: string,
  name: string,
  nationalPokedexNumber: number,
  imageUrl: string,
  imageUrlHiRes: string,
  types: Array<string>,
  supertype: string,
  subtype: string,
  evolvesFrom: string,
  hp: number,
  number: number,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  attacks: Array<Attack>,
  weaknesses: Array<Weaknesses>
}

export interface Card {
  cards: Array<Item>
}
