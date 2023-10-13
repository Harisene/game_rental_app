const DATA = [
  { 
    id: '0', 
    name: "Marvel's Spider-Man 2",
    backgroundImage: require('./assets/spiderman_background.jpeg'),
    image: require('../src/assets/Spider-Man.jpeg'),
    platforms: ['PS5', 'PS4'],
    description: "Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise.",
    price: 'USD 69.99'
  },
  { 
    id: '1', 
    name: "God of War Ragnorok",
    backgroundImage: require('./assets/gow_background.jpeg'),
    image: require('../src/assets/gow.jpeg'),
    platforms: ['PS5', 'PS4'],
    description: "Join Kratos and Atreus to explore the mythic Nine Realms in search of answers and allies in God of War Ragnarok",
    price: 'USD 59.99'
  },
  { 
    id: '2', 
    name: "Uncharted 4: A Thief’s End",
    backgroundImage: require('./assets/Uncharted_back.jpeg'),
    image: require('../src/assets/uncharted.jpeg'),
    platforms: ['PS5', 'PS4', 'PC'],
    description: "On the hunt for Captain Henry Avery’s long-lost treasure, Sam and Drake set off to find Libertalia, the pirate... ",
    price: 'USD 13.99'
  },
  { 
    id: '3', 
    name: "The Last of Us Part II",
    backgroundImage: require('./assets/tlu_back.jpeg'),
    image: require('../src/assets/the_last_of_us.jpeg'),
    platforms: ['PS5', 'PS4', 'PC'],
    description: "When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry outjustice and find closure...",
    price: 'USD 42.99'
  }
]

export default DATA;
export type Game = {
  id: string, 
  name: string,
  backgroundImage: any,
  image: any,
  platforms: string[],
  description: string,
  price: string
}