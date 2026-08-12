/**
 * Real content scraped + verbatim-verified from https://www.sycoraxcruises.com/
 * Every string here is copied from the live site. Do not paraphrase when editing.
 */

const img = (n: number) => `/ingested/sycoraxcruises/img-${String(n).padStart(3, "0")}.webp`;

export const packages = [
  {
    name: "Belle Isle Breeze",
    duration: "75 minutes",
    guests: "Up to 6 guests",
    price: "$275 day / $350 evening",
    description:
      "A 75-minute cruise around Belle Isle, America's most popular urban park.",
    image: img(38),
    alt: "Guest standing at the bow of the Sycorax with arms outstretched near Belle Isle",
  },
  {
    name: "City Sights River Cruise",
    duration: "2 hours",
    guests: "Up to 6 guests",
    price: "$450",
    description:
      "Relax in luxury while we breeze along the number one riverwalk in the U.S., capturing unique vantage points of the mighty cities of Detroit and Windsor, from Belle Isle to the Ambassador Bridge.",
    image: img(54),
    alt: "Group of six friends on the Sycorax with the Detroit skyline behind them",
  },
  {
    name: "Hidden Cove Haven",
    duration: "4 hours",
    guests: "Up to 6 guests",
    price: "$800",
    description:
      "Includes a gourmet charcuterie board. Luxuriate in peace and solitude as we quietly cruise the Detroit River either to the lush and idyllic Ford Cove outside the Michelin-rated Edsel and Eleanor Ford House, or to the industrial yet tranquil McNichols Cove downriver from Detroit.",
    image: img(33),
    alt: "Crew member serving a charcuterie board and wine dockside",
  },
] as const;

export const occasions = [
  {
    slug: "birthday",
    label: "Birthday",
    icon: img(4),
    image: img(53),
    alt: "Captain Blair with two guests celebrating a birthday aboard the Sycorax",
    body: "We've hosted many birthday boat charter cruises on the Detroit River. Birthday cruises include a festive banner, a complimentary glass of champagne or beer, deluxe snacks, award-winning Bowers & Wilkins Bluetooth speakers, captain and sailor hats, and more.",
  },
  {
    slug: "graduation-mitzvah",
    label: "Graduation/ Mitzvah",
    icon: img(5),
    image: img(35),
    alt: "Three friends laughing and cheering aboard the Sycorax with the Detroit skyline behind them",
    body: null,
  },
  {
    slug: "detroit-history-high-tea",
    label: "Detroit History Tour/ High Tea",
    icon: img(6),
    image: img(43),
    alt: "Tiered stand of chocolate-dipped strawberries and canapes for a High Tea cruise",
    body: "On 75-minute cruises passengers get a clear, beautiful view of the city skyline from about a mile away, while our two-hour cruises offer an up-close perspective of the entire downtown Detroit cityscape.",
  },
  {
    slug: "holidays-friends-family",
    label: "Holidays/Friends & family time",
    icon: img(7),
    image: img(45),
    alt: "Two women and a child in sailor caps enjoying a family cruise",
    body: null,
  },
  {
    slug: "wedding-rehearsal-dinner",
    label: "Wedding/ Rehearsal Dinner",
    icon: img(11),
    image: img(34),
    alt: "Couple laughing together near Belle Isle during a rehearsal dinner cruise",
    body: null,
  },
  {
    slug: "anniversary-proposal",
    label: "Anniversary/ Proposal",
    icon: img(8),
    image: img(50),
    alt: "Elderly couple celebrating their anniversary with a Happy Anniversary banner aboard the Sycorax",
    body: "Yes, we're always excited to make your proposal perfectly you, and a moment to treasure forever! And, no surprise, we're batting a 100% success rate.",
  },
  {
    slug: "bachelor-ette-party",
    label: "Bachelor/ette Party",
    icon: img(9),
    image: img(36),
    alt: "Seven friends in sailor caps celebrating a bachelor party aboard the Sycorax",
    body: null,
  },
] as const;

export const crew = [
  {
    name: "Captain Blair",
    role: "Captain",
    image: img(13),
    alt: "Captain Blair in a white captain's hat aboard the Sycorax",
    bio: "Every boat rental comes with an experienced captain who is certified by the U.S. Coast Guard.",
  },
  {
    name: "First Mate Allie",
    role: "First Mate",
    image: img(12),
    alt: "First Mate at the helm of the Sycorax on the Detroit River",
    bio: "Every cruise includes a U.S. Coast Guard-certified captain and a First Mate to make your outing on the water unforgettable.",
  },
] as const;

export const reviews = [
  {
    name: "Charlotte",
    quote:
      "This was so cool! I love boats generally, but this was my first time on an electric one and what a difference. It's shockingly quiet and fast, without any of the normal combustion smell. It really is the best of motorized and non-motorized transport, and allowed me to fully enjoy the sensory experience of being on the water. The crew is wonderful as well. Captain Blair and First Mate Allie are perfects hosts and guides to the Detroit River. They're absolutely delightful people who put their heart and soul into crafting wonderful experiences for their guests. Their skill, conscientiousness, and attention to detail really come through in the luxury of that experience and the sense of security I have aboard the Sycorax. It's the perfect way to see the Detroit River.",
  },
  {
    name: "Haneen",
    quote:
      "One of the most unforgettable and unique experiences in Detroit! This was my first time on an electric boat, and it absolutely exceeded my expectations…. While the boat tour itself was stunning, it was truly Captain Blair and First Mate Allie who made the experience exceptional. Their warm hospitality and welcoming energy instantly made us feel at ease and added a personal touch that elevated the whole outing. I can't recommend this enough to anyone looking for something special and memorable to do in Detroit!",
  },
  {
    name: "Des",
    quote:
      "My niece and I had such a fantastic time on this charter! The whole experience was something truly special- relaxing, fun, and the perfect way to spend an evening. The captain and first mate were incredibly friendly and knowledgeable, making us feel right at home as we cruised around Belle Isle. On top of the peaceful views, they gave us a real thrill by opening up the boat to top speeds—wow, the torque on this boat is unreal! It took off like a rocket, and it was an absolute blast. Whether you're looking for a laid-back evening on the water or an exhilarating ride, this charter delivers both. It's a unique and memorable experience, and honestly a great value for a private outing. Highly recommend you book this experience if you've never had the pleasure!",
  },
  {
    name: "Maxx",
    quote:
      "I came across the Sycorax Electric Cruises while searching for something cool to do for my coworkers as my boss was visiting from Kansas. I had never been on an electric boat before and was pleasantly surprised by the quietness as there were no loud noises coming from a motor. Captain Blair and First Mate Allie were really nice and accommodating for my group and really made this a memorable experience for us. I am definitely booking this tour again and I recommend that everyone experience this tour at least once! We had such a great time!",
  },
  {
    name: "Niecey",
    quote:
      "What a great way to celebrate your birthday! Such a welcoming, clean, fun, smooth, and pleasant ride. The best I have ever experienced on the Detroit River. Loved the crew. Their freshly baked cookies were delicious! Decorations and the champagne were great - as well as how educated Capt Blair & First Mate Allie were. Will be booking again for the next season and beyond. Amazing find!",
  },
  {
    name: "Jon",
    quote:
      "Captain Blair and his ship mate Allie were great hosts on our trip around the riverfront and Belle Isle area. I'm a native Detroiter and I saw things I've never seen b4. Allie was very informative in this regard. Our trip was very relaxing and practically therapeutic. I would highly recommend it as a way to get away from the noise and stresses of life, at least for a moment.",
  },
  {
    name: "Jasmine",
    quote:
      "We celebrated our seventh wedding anniversary on Sycorax Electric Cruises, and it was truly unforgettable! From the moment we arrived, Captain Blair and First Mate Allie made us feel so welcome and cared for. They had a beautiful Happy Anniversary sign waiting for us along with drinks and snacks, which set the perfect tone for the evening. They were attentive without being overbearing—taking photos for us, giving us space to enjoy the ride, and stepping in at just the right times to share fun facts and history about the landmarks we passed. Their hospitality and attention to detail made the experience feel personal and special.",
  },
  {
    name: "Marie",
    quote:
      "Highlight of the family reunion week! …. Capt. Blair and First Mate Allie created a wonderfully thoughtful and relaxing experience. The boat had a charming touch of birthday décor and champagne and refreshments were plentiful. They really seemed tuned in to their guests' vibe. In our case, they sensed we preferred family conversation over a narrated tour. They gave us space to enjoy ourselves while staying attentive and ready to help. Special credit to First Mate Allie for her gracious hosting skills. The option to play your own music made the outing even more personal. The boat itself is new, spotless, and impressively quiet. The front deck's cushy seating was perfect for our elderly parents. All they had to do was sit back, relax, and sip their drinks while taking in the view. This was one of our favorite joint family activities that we'll fondly remember, and we'll definitely be back. It's absolutely the 5 star choice. Highly recommend!",
  },
  {
    name: "Shavonne",
    quote:
      "Absolutely phenomenal! The Sycorax Electric Boat experience on the Detroit River was an unforgettable 5-star adventure. From the moment we stepped aboard, the serene and eco-friendly electric motor provided such a peaceful glide through the Detroit River. A huge part of what made our trip so special was the exceptional crew. Captain Blair's skillful navigation and First Mate Allie's attentive service truly elevated the journey. We felt incredibly comfortable throughout, and the awesome food prepared by Mate Allie was an unexpected and delightful touch that truly catered to our satisfaction. Our captain & first mate were knowledgeable, friendly, and pointed out fascinating landmarks and historical tidbits along the way, adding so much to the experience. We saw everything from the bustling Ambassador Bridge, Belle Isle, to Boblo Boat, all from a unique and intimate perspective. I wholeheartedly recommend the Sycorax Electric Boat! It's a must-do for anyone seeking a unique, delightful, and wonderfully quiet adventure exploring the Detroit River….",
  },
] as const;

export const homeTestimonial = {
  quote:
    "I'm a big fan of local tours, my husband and I love exploring the history, architecture and landscape of Detroit. This is my favorite experience so far. First Mate Allie & Captain Blair were a delight! Seeing Detroit from the water really altered my perspective.",
  attribution: "Patrick K, May 2024, TripAdvisor",
};

export const faqs = [
  {
    q: "Pricing",
    a: "We offer 75 min cruises for $275 ($350 evenings), 2 hours for $450, and 4 hours for $800. All prices are 100% inclusive – no online booking fee, no taxes, no fuel or captain fees, no gratuity.",
  },
  {
    q: "Do you offer sunset cruises?",
    a: "Yes! Our sunset cruises on the Detroit River are a favorite amongst our passengers. Select your preferred time when booking your cruise to make the most of the golden hour on the water.",
  },
  {
    q: "Departure Location",
    a: "Sycorax Electric Cruises departs from Stanton Yards Marina located at 9666 East Jefferson Avenue, Detroit, directly across from Belle Isle. The marina is 4 miles (10 min) from Hart Plaza.",
  },
  {
    q: "Boat Capacity / How many guests can I invite?",
    a: "Our vessel, the Sycorax, holds up to six passengers for all cruises. Two crew members—a captain and a first mate—are included on every cruise as well. We have two options for groups larger than six: Tandem Cruise for up to 12 Guests, Three-Boat Cruise for up to 18 Guests.",
  },
  {
    q: "How Our Electric Boat Differs from Party Boats",
    a: "Our innovative electric propulsion means no engine noise, no stinky gas exhaust, and an eco-friendly journey. Our top of the line Swedish-design boat prioritizes your style and comfort. A modern, clean and comfortable ride, with premium amenities, including a head (bathroom).",
  },
  {
    q: "Weather, Cancellation, and Rescheduling",
    a: "Sycorax Electric Cruises offers a full refund for your cancellations up to five days in advance, and 50% after. We keep a close eye on the weather - your safety is our top priority. The captain will contact the booking party the day before the cruise confirming cruise details and the weather. In the event of inclement weather, we'll either reschedule the cruise for another date that works best for you, or issue a full refund, whichever you prefer.",
  },
  {
    q: "Are Corporate Boat Charters available?",
    a: "An electric boat cruise aboard the Sycorax is an excellent way to relax and experience the Detroit River and city skyline for professionals visiting for conferences. Charter cruises on the fully-electric Sycorax are limited to six passengers, ensuring a private, intimate experience for your team. For up to 18 passengers, we offer Tandem charters.",
  },
  {
    q: "Can I see the Detroit skyline on a cruise?",
    a: "Yes, the Detroit skyline can be seen on our cruises. On 75-minute cruises passengers get a clear, beautiful view of the city skyline from about a mile away, while our two-hour cruises offer an up-close perspective of the entire downtown Detroit cityscape.",
  },
  {
    q: "Do you host birthday celebrations?",
    a: "We sure do! We've hosted many birthday boat charter cruises on the Detroit River. Birthday cruises include a festive banner, a complimentary glass of champagne or beer, deluxe snacks, award-winning Bowers & Wilkins Bluetooth speakers, captain and sailor hats, and more.",
  },
  {
    q: "Do you offer proposal cruises?",
    a: "Yes, we're always excited to make your proposal perfectly you, and a moment to treasure forever! And, no surprise, we're batting a 100% success rate. An engagement on the river puts you in the great amphitheater of nature, with the majestic cast of the Great Lakes and the Detroit skyline.",
  },
  {
    q: "Do your cruises include a captain?",
    a: "Yes, every boat rental comes with an experienced captain who is certified by the U.S. Coast Guard, as well as a First Mate. Note that all prices are 100% inclusive – no online booking fee, no taxes, no fuel or captain fees, and no gratuity.",
  },
  {
    q: "Why does it matter that your boat is electric?",
    a: "Electric boats are extremely quiet, have zero emissions, no unpleasant gas odors, and are eco-friendly. An electric boat ensures you have a peaceful, upscale, relaxing experience on the water that does no harm to the environment. Bonus: we've had many guests who've had problems with sea sickness on other boats, but they've all agreed that they felt perfectly comfortable on the Sycorax.",
  },
  {
    q: "What is included in your cruises?",
    a: "Each cruise includes a U.S. Coast Guard-certified captain; first mate; a complimentary glass of champagne or beer; a selection of nonalcoholic beverages; cooler, ice, cups, and openers for additional beverages; deluxe snack baskets for shorter cruises, and charcuterie platters or high tea trays for four-hour cruises; WiFi; a private porta john on board, and more.",
  },
] as const;

export const faqTestimonial = {
  quote:
    "I've been on and around boats since i was very young. To me, sailboats are about the journey - the sweat, the intensity, the billowing of the sails, the slap of the waves. Powerboats, like cars, are about the destination - you put up with the noise, stink of exhaust, the pollution; to get to a place, do a thing. This electric tender is a fine marriage of both. We sat on the deck, with cocktails and antipasto, enjoyed the breeze and waves, chatted and soaked in the quiet, watched sunset slipping down over Detroit's skyscrapers and busy riverwalk, learned about the history of gritty, mighty Detroit. This is a boat lover's boat, and the Captain and First Mate are top form. The best experience of our stay here.",
  attribution: "Tony, Belize",
};

export const blogPosts = [
  {
    slug: "guest-favorite-destinations",
    title: "Guest favorite destinations",
    /** The homepage teases this post under its own distinct heading. */
    homeTeaser: "Guest favorite destinations",
    excerpt:
      "Guest favorite destinations on the Detroit River, Lake St. Claire, and Lake Erie",
    date: "May 21, 2025",
    author: "Anthony Guilliom",
    image: img(27),
    alt: "Detroit skyline at sunset from the water",
  },
  {
    slug: "why-we-love-detroit",
    title: "Unique and offbeat stuff - why we❤Detroit",
    homeTeaser: "Other unique and offbeat experiences in Detroit, why we ❤ this city",
    excerpt: "Recommendations for don't miss experiences in downtown Detroit.",
    date: "May 21, 2025",
    author: "Anthony Guilliom",
    image: img(28),
    alt: "Ambassador Bridge at sunset over the Detroit River",
  },
  {
    slug: "electric-boating",
    title: "Let's try a different tack: Electric boating",
    homeTeaser: "Changing the world, one carbon footprint at a time",
    excerpt: "Looking at the impact of power boats on our world.",
    date: "May 21, 2025",
    author: "Anthony Guilliom",
    image: img(18),
    alt: "Illustration weighing wind power against carbon emissions",
  },
  {
    slug: "welcome-aboard",
    title: "Welcome aboard!",
    homeTeaser: "Sycorax Life",
    excerpt:
      "We share great guest experiences, fun discoveries, and life in the electric lane.",
    date: "April 29, 2025",
    author: "Anthony Guilliom",
    image: img(3),
    alt: "Guest relaxing on the bow of the Sycorax at sunset",
  },
] as const;

export const boatSpecs = {
  length: "26 ft",
  model: "X Shore Eelex 8000, 2023, inboard engine",
  crew: "Captain Blair and First Mate Allie",
  awards: [
    "German Design Award Gold (2022)",
    "European Power Boat of the Year (2022)",
    "CICERO Shades of Green AS Dark Green rating (the highest rating)",
  ],
  amenities: [
    "U.S. Coast Guard-certified captain",
    "Complimentary glass of champagne or beer",
    "Selection of nonalcoholic beverages",
    "Coolers, ice, cups, and openers for additional beverages",
    "Deluxe snack baskets for shorter cruises, and charcuterie platters or high tea trays for four-hour cruises",
    "WiFi",
    "Private head (bathroom) on board",
    "Floaties and other water toys",
    "Dry bags for storage",
  ],
  rules: ["Sorry, no pets", "No glassware", "No fishing", "Soft-soled shoes or bare feet, please"],
  fare: [
    "Deluxe snack baskets are included for cruises under four hours.",
    "Gourmet charcuterie platter (assortment of cheeses, cured meats, nuts, olives, spreads, fruits, and crackers) included with Hidden Cove Haven cruises, or can be added to shorter cruises for $65.",
    "Complimentary glass of champagne or beer, as well as nonalcoholic beverages provided for all cruises.",
    "Fridge, ice, cups, plates, bottle openers, and utensils provided.",
  ],
  pledge:
    "Our No-BS promise to you: one price only. Unlike most charters, we bill no fuel surcharge, no captain's fee or insurance, no separate taxes, and we accept no gratuities. One and done.",
  impact:
    "Did you know that a five-hour cruise on a standard yacht burns as much gas as a car would consume driving from New York to L.A.? By choosing an electric cruise, you're eliminating all that environmental waste. That's the equivalent of planting six trees per four-hour cruise aboard the Sycorax.",
};

/** Curated gallery set: real lifestyle photography, excludes icon glyphs, product renders, and press badges. */
export const galleryImages = [2, 3, 12, 13, 14, 15, 16, 17, 20, 22, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 42, 43, 44, 45, 47, 48, 50, 51, 53, 54].map(
  (n) => ({ src: img(n), alt: `Sycorax Electric Cruises — photo ${n}` })
);

export { img };
