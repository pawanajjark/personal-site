import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>('../assets/cybershot/*.webp', { eager: true, import: 'default' });
const photo = (file: string, title: string, alt: string, portrait = false) => ({
  src: images[`../assets/cybershot/${file.toLowerCase()}.webp`],
  thumbnail: portrait ? images[`../assets/cybershot/${file.toLowerCase()}-portrait.webp`] : undefined,
  title,
  alt,
});

export const cameraAlbums = [
  {
    id: 'people', title: 'People I captured',
    photos: [
      photo('DSC03024', 'By the window', 'A woman smiling and holding up a peace sign beside a window.', true),
      photo('DSC03042', 'Turning around', 'A man in a red shirt turning towards the camera with a smile.', true),
      photo('DSC03048', 'An evening out', 'A man wearing glasses looking towards the camera under warm lights.', true),
      photo('DSC03104', 'A smile', 'A smiling man wearing glasses in front of a wooden wall.', true),
      photo('DSC03155', 'At the desk', 'A woman wearing glasses looking up from her laptop.', true),
      photo('DSC03173', 'Looking away', 'A woman in a white T-shirt looking to the side beside a wooden wall.', true),
      photo('DSC03027', 'Two at the desk', 'Two men smiling at a desk, one giving a thumbs-up and the other a peace sign.'),
      photo('DSC03078', 'Under the lights', 'A man in a red T-shirt sitting beneath bright overhead strip lights.'),
      photo('DSC03107', 'Between conversations', 'Three people standing together beside a wooden wall.'),
      photo('DSC03117', 'Across the office', 'People gathered in an office, with two standing in the foreground.'),
      photo('DSC03119', 'Heads together', 'Two men leaning forward together, looking down.'),
      photo('DSC03134', 'Around the table', 'A group standing around a table, with one man smiling towards the camera.'),
      photo('DSC03154', 'On a call', 'A man wearing glasses holding a phone to his ear in a dim room.'),
      photo('DSC03159', 'A pause on the path', 'A man wearing glasses and a backpack on a leafy path.'),
      photo('DSC03169', 'Matching layers', 'Two men smiling in similar padded vests over patterned shirts.'),
      photo('DSC03211', 'Waiting together', 'Three people with backpacks standing together in a brightly lit lobby.'),
      photo('DSC03213', 'One for the camera', 'A man in a blue T-shirt and backpack making a hand gesture towards the camera.'),
      photo('DSC03214', 'And one more', 'A man wearing glasses making a peace sign under ceiling lights.'),
      photo('DSC03231', 'A little shopping', 'Two men posing with shopping bags in front of a shop.'),
      photo('DSC03242', 'Among the bears', 'A man in a colourful shirt posing among painted bear sculptures in a garden.'),
      photo('DSC03244', 'Arms wide open', 'A man spreading his arms beside painted bear sculptures in a garden.'),
      photo('DSC03268', 'After dark', 'Two men standing side by side against a warmly lit background at night.'),
      photo('DSC03288', 'Peace', 'A man wearing glasses holding up a peace sign beside a colourful display.'),
      photo('DSC03295', 'On the way', 'A person seated beside a window, looking at a phone with a bag on their lap.'),
    ],
  },
  {
    id: 'everyday', title: 'Everyday things',
    photos: [
      photo('DSC03052', 'At the laptop', 'Hands typing on a laptop at a desk.'),
      photo('DSC03066', 'A desk by the window', 'A desk and chair beside a window.'),
      photo('DSC03090', 'A little break', 'A table tennis paddle and ball on a table.'),
      photo('DSC03147', 'On a walk', 'Three people walking along a tree-lined pavement.'),
      photo('DSC03170', 'Left outside', 'A suitcase resting on a ledge beside a wall.'),
      photo('DSC03298', 'Passing by', 'An auto rickshaw and motorcycles on a street.'),
      photo('DSC03311', 'On the shelf', 'Glass jars on a warmly lit shelf.'),
    ],
  },
  {
    id: 'outside', title: 'Out and about',
    photos: [
      photo('DSC03144', 'Through the window', 'Two people silhouetted against a sunset through a window.'),
      photo('DSC03241', 'Among the trees', 'A view over a garden towards a distant building.'),
      photo('DSC03245', 'A little green', 'Flower beds and trees beside a railing.'),
      photo('DSC03246', 'Three by the water', 'Three small dogs sitting on a wooden deck beside the water.'),
      photo('DSC03252', 'A cloudy afternoon', 'A distant building beyond trees and water under a grey sky.'),
    ],
  },
  {
    id: 'lights', title: 'Lights and little things',
    photos: [
      photo('DSC03057', 'Warm lights', 'A dim indoor space with warm overhead lights.'),
      photo('DSC03256', 'Looking up', 'A tree-shaped structure glowing red and orange against the night sky.'),
      photo('DSC03262', 'Towards the light', 'People silhouetted in a tunnel with a bright circular opening.'),
      photo('DSC03264', 'A jellyfish', 'A pale, glowing jellyfish floating in dark water.'),
      photo('DSC03278', 'Underwater', 'A blue-lit aquarium with fish swimming past.'),
      photo('DSC03280', 'In blue', 'Visitors silhouetted against blue-lit aquarium glass.'),
    ],
  },
];
