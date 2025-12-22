
import React, { useState } from 'react';
import './Gallery.css'
import Navbar from '../components/Navbar';
// Data: add as many items as you want
const items = [
 
    {
        id: 1,
        title: 'Charminar',
        img: '/charminar.jpg',
        desc:
        'The iconic symbol of Hyderabad, Charminar was built in 1591 by Muhammad Quli Qutb Shah. This Indo-Islamic masterpiece features four grand arches and towering minarets. Located in the heart of the old city, it is surrounded by vibrant bazaars like Laad Bazaar, famous for bangles and traditional jewelry. A must-visit for history lovers and photographers.'
    },
  {
    id: 2,
    title: 'Golconda Fort',
    img: '/golconda.jpg',
    desc:
      'Majestic fort known for its acoustics, royal palaces, and panoramic city views. Once the capital of the Qutb Shahi dynasty, it features clever water systems and a famous evening light-and-sound show.',
  },
  {
    id: 3,
    title: 'Hussain Sagar Lake',
    img: '/hussainsagar.jpg',
    desc:
      'Artificial lake with the Buddha statue at the center, popular for boating and sunsets. Necklace Road around the lake is lively with parks, food, and city views.',
   },
   {
    id: 4,
    title: 'Ramoji Film City',
    img:'/ramoji.jpg',
    desc:
    'Recognized as the world’s largest film studio complex, Ramoji Film City is a paradise for movie lovers. Explore film sets, enjoy guided tours, and experience entertainment shows for a fun-filled day.',
   },
   {
    id: 5,
    title: 'Salar Jung Museum',
    img: '/salarjung.jpg',
    desc:
      'One of India’s largest art museums, housing an extraordinary collection of artifacts, sculptures, and paintings from across the globe. The Veiled Rebecca statue is a highlight for art enthusiasts.',
  },
  {
    id: 6,
    title: 'Birla Mandir',
    img: '/birlamandir.jpg',
    desc:
      'A stunning white marble temple dedicated to Lord Venkateswara, perched on a hilltop. It offers breathtaking views of the city and a serene atmosphere for visitors.',
  },
  {
    id: 7,
    title: 'Chowmahalla Palace',
    img: '/chowmahalla.jpg',
    desc:
      'The former seat of the Nizams, this palace is admired for its elegant architecture and grand Durbar Hall. A visit here offers a glimpse into Hyderabad’s royal heritage.',
  },
  {
    id: 8,
    title: 'Mecca Masjid',
    img: '/meccamasjid.jpg',
    desc:
      'One of the oldest and largest mosques in India, built with bricks made from soil brought from Mecca. Its grand architecture and spiritual ambiance make it a significant landmark.',
  },
  {
    id: 9,
    title: 'Qutb Shahi Tombs',
    img: '/qutbshahi.jpg',
    desc:
      'A serene complex of tombs showcasing Persian architecture, surrounded by landscaped gardens. It reflects the grandeur of the Qutb Shahi dynasty and is a peaceful historical site.',
  },
  {
    id: 10,
    title: 'Nehru Zoological Park',
    img: '/zoo.jpg',
    desc:
      'Spread across lush greenery, this zoo is home to diverse wildlife and offers safari rides. A perfect destination for families and nature enthusiasts.',
  },
  {
    id: 11,
    title: 'Laad Bazaar',
    img: '/laadbazaar.jpg',
    desc:
      'Famous for colorful bangles, bridal wear, and traditional jewelry. Located near Charminar, it is a shopper’s paradise for authentic Hyderabadi accessories.',
  },
  {
    id:12,
    title:'Lumini Park',
    img:' /lumbini.jpg',
    desc:
        'Lumbini Park is a popular urban park located on the banks of Hussain Sagar Lake in Hyderabad. Known for its lush greenery and serene environment, the park offers a refreshing escape in the heart of the city. Visitors can enjoy musical fountain shows, boating on the lake, and stunning views of the iconic Buddha statue. With well-maintained lawns, vibrant flower beds, and recreational activities, Lumbini Park is an ideal spot for families, couples, and tourists seeking relaxation and leisure.'
  },
  {
    id: 13,
    title: 'Shilparamam',
    img: '/shilparamam.jpg',
    desc: 
        'Shilparamam is a vibrant arts and crafts village located in Hyderabad, designed to showcase India’s rich cultural heritage. Spread across lush greenery, it offers visitors an immersive experience of traditional crafts, folk art, and rural life. The village hosts handicraft stalls, cultural performances, and seasonal festivals, making it a hub for artisans and art lovers. Visitors can explore ethnic huts, enjoy live dance and music shows, and shop for authentic handmade products. Shilparamam is the perfect destination for those seeking a blend of art, culture, and tradition in a serene environment.',
  },
  {
    id: 14,
    title: 'Osman Sagar',
    img: '/osmansagar.jpg',
    desc:
      'Also known as Gandipet Lake, Osman Sagar is a serene reservoir on the outskirts of Hyderabad. It is a popular picnic spot offering beautiful views, boating facilities, and peaceful surroundings.'
  },
  {
    id: 15,
    title: 'NTR Garden',
    img: '/ntrgarden.jpg',
    desc:
      'Located near Hussain Sagar Lake, NTR Garden is a lush green park featuring landscaped gardens, fountains, and recreational activities. It is ideal for family outings and evening walks.'
  },
  {
    id: 16,
    title: 'Osmania University',
    img: '/osmania.jpg',
    desc:
      'One of India’s oldest and most prestigious universities, Osmania University is known for its historic architecture and sprawling campus. A landmark of educational excellence in Hyderabad.'
  },
  {
    id: 17,
    title: 'Snow World',
    img: '/snowworld.jpg',
    desc:
      'Asia’s largest snow-themed park, Snow World offers thrilling snow activities like skiing, snowboarding, and ice skating. A perfect destination for fun and adventure in a winter wonderland setting.'
  },
  {
    id: 18,
    title: 'Wonderla',
    img: '/wonderla.jpg',
    desc:
      'Wonderla is a world-class amusement park featuring high-adrenaline rides, water slides, and entertainment zones. A must-visit for families and thrill-seekers looking for a day full of excitement.'
  },
  {
    id: 19,
    title: 'Skyzone',
    img: '/skyzone.jpg',
    desc:
      'Skyzone is an indoor trampoline park offering fun activities like freestyle jumping, dodgeball, and fitness programs. A great spot for adventure and fitness enthusiasts.'
  },
  {
    id: 20,
    title: 'Necklace Road',
    img: '/necklaceroad.jpg',
    desc:
      'A scenic boulevard along Hussain Sagar Lake, Necklace Road is perfect for evening walks, cycling, and enjoying street food. It offers stunning views of the lake and the city skyline.'
  },
  {
    id: 21,
    title: 'Taramati Baradari',
    img: '/taramati.jpg',
    desc:
      'A historical pavilion built during the Qutb Shahi era, Taramati Baradari is known for its architectural elegance and cultural significance. It is a popular venue for music and dance performances.'
  },
  {
    id: 22,
    title: 'Birla Planetarium & Science Museum',
    img: '/birlaplanetarium.jpg',
    desc:
      'An educational and fun destination featuring interactive science exhibits and a state-of-the-art planetarium. Ideal for students and families interested in astronomy and technology.'
  },
  {
    id: 23,
    title: 'Peddamma Temple',
    img: '/peddamma.jpg',
    desc:
      'A revered temple dedicated to Goddess Peddamma, located in Jubilee Hills. Known for its vibrant festivals and spiritual ambiance, it attracts devotees from across the city.'
  },
  {
    id: 24,
    title: 'Banjara Hills & Jubilee Hills Viewpoints',
    img: '/banjarahills.jpg',
    desc:
      'Upscale neighborhoods offering panoramic city views, luxury dining, and shopping experiences. Perfect for those who love scenic drives and vibrant nightlife.'
  },
  {
    id: 25,
    title: 'Hi-Tech City Night Tour',
    img: '/hitechcity.jpg',
    desc:
      'Experience the modern face of Hyderabad with a night tour of Hi-Tech City. Marvel at illuminated IT towers, enjoy fine dining, and explore the city’s tech hub after dark.',
  }, 
  {
    id: 26,
    title: 'Durgam Cheruvu Lakefront Experience',
    img: '/durgam.jpg',
    desc:
      'Unwind at the scenic Durgam Cheruvu Lake, a serene escape in the heart of Hyderabad. Enjoy the cable bridge views, lakeside walks, and vibrant food courts for a perfect evening outing.',
  },
  {
  id: 27,
  title: 'Chilkur Balaji Temple',
  img: '/chilkur.jpg',
  desc:
    'Visit the famous Chilkur Balaji Temple, also known as the Visa Balaji Temple, located on the outskirts of Hyderabad. A peaceful spiritual destination known for its unique prayer rituals and serene surroundings.',
  },
];


// Reusable card component with its own View More state
function GalleryCard({ title, img, desc, previewChars = 140 }) {
  const [showMore, setShowMore] = useState(false);
  const preview =
    desc.length > previewChars ? desc.slice(0, previewChars) + '...' : desc;

  return (

    <div className='card-g'>
      <h3>{title}</h3>
      <img
        src={img}
        alt={title}
      />
      <p style={{ margin: 0 }}>{showMore ? desc : preview}</p>
      {desc.length > previewChars && (
        <button
          onClick={() => setShowMore((v) => !v)}>
          {showMore ? 'View Less' : 'View More'}
        </button>
      )}
   </div>
  );
}

export default function Gallery() {
  return (
        <>
    <Navbar />
    <div className='headline'>
      <h2>Hyderabad Destinations</h2>

      {/* Cards grid */}
      <div className='grid-container'>
        {items.map((it) => (
          <GalleryCard
            key={it.id}
            title={it.title}
            img={it.img}
            desc={it.desc}
            previewChars={120} 
          />
        ))}
      </div>
    </div>
    </>
  );
}
