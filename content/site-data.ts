/**
 * Real content scraped + verbatim-verified from https://www.sycoraxcruises.com/
 * Every string here is copied from the live site. Do not paraphrase when editing.
 */

import {
  Cake,
  GraduationCap,
  Landmark,
  Gift,
  HeartHandshake,
  Gem,
  PartyPopper,
} from "lucide-react";

const img = (n: number) => `/ingested/sycoraxcruises/img-${String(n).padStart(3, "0")}.webp`;

/**
 * Tailwind object-position class per source photo, tuned by hand so faces
 * never get cropped when object-cover fits these photos into card/hero
 * aspect ratios. Default (object-center) is fine for landscapes without a
 * face near the top edge; portrait/selfie-style shots need a bias upward.
 */
const FACE_POS: Record<number, string> = {
  14: "object-[center_58%]",
  26: "object-[center_58%]",
  38: "object-[center_20%]",
  54: "object-[center_65%]",
  33: "object-[center_20%]",
  53: "object-[center_30%]",
  35: "object-[center_30%]",
  45: "object-[center_30%]",
  34: "object-[center_20%]",
  50: "object-[center_35%]",
  36: "object-[center_35%]",
  13: "object-[center_12%]",
  12: "object-[center_25%]",
  3: "object-[center_20%]",
  32: "object-[center_30%]",
  30: "object-[center_30%]",
  40: "object-[center_45%]",
};
export const imgPos = (n: number) => FACE_POS[n] ?? "object-center";

export const packages = [
  {
    slug: "belle-isle-breeze",
    name: "Belle Isle Breeze",
    activityId: "0574ca5d-536d-49fb-b999-a6cefb8b3fb5",
    duration: "75 minutes",
    guests: "Up to 6 guests",
    price: "$275 day / $350 evening",
    description:
      "A 75-minute cruise around Belle Isle, America's most popular urban park.",
    longDescription:
      "A 75-minute cruise navigating around Belle Isle, America's most popular urban park. On this cruise, passengers get a clear, beautiful view of the Detroit skyline from about a mile away, all aboard the fully electric Sycorax.",
    highlights: [
      "75 minutes around Belle Isle",
      "Clear skyline views from about a mile away",
      "$275 during the day, $350 for evening sunset cruises",
      "Up to 6 guests, captain and first mate included",
    ],
    image: img(38),
    pos: imgPos(38),
    alt: "Guest standing at the bow of the Sycorax with arms outstretched near Belle Isle",
    gallery: [
      { n: 38, alt: "Guest standing at the bow of the Sycorax near Belle Isle" },
      { n: 2, alt: "Sailboat regatta on the Detroit River at golden hour" },
      { n: 20, alt: "Sunset over open water on the Detroit River" },
    ],
  },
  {
    slug: "city-sights-river-cruise",
    name: "City Sights River Cruise",
    activityId: "02d1fc06-d54e-443c-9206-29ae86b618a6",
    duration: "2 hours",
    guests: "Up to 6 guests",
    price: "$450",
    description:
      "Relax in luxury while we breeze along the number one riverwalk in the U.S., capturing unique vantage points of the mighty cities of Detroit and Windsor, from Belle Isle to the Ambassador Bridge.",
    longDescription:
      "A two-hour breeze along the Detroit Riverwalk with unique, up-close perspectives of the downtown Detroit and Windsor cityscapes, stretching from Belle Isle to the Ambassador Bridge. Relax in luxury while our crew navigates the number one riverwalk in the U.S.",
    highlights: [
      "2-hour cruise, Belle Isle to the Ambassador Bridge",
      "Up-close views of downtown Detroit and Windsor",
      "$450 flat, 100% inclusive",
      "Up to 6 guests, captain and first mate included",
    ],
    image: img(54),
    pos: imgPos(54),
    alt: "Group of six friends on the Sycorax with the Detroit skyline behind them",
    gallery: [
      { n: 54, alt: "Group of six friends on the Sycorax with the Detroit skyline behind them" },
      { n: 28, alt: "Ambassador Bridge at sunset over the Detroit River" },
      { n: 27, alt: "Detroit skyline at sunset from the water" },
    ],
  },
  {
    slug: "hidden-cove-haven",
    name: "Hidden Cove Haven",
    activityId: "eb43c004-d97e-48b7-b9f0-ee5029d5caf7",
    duration: "4 hours",
    guests: "Up to 6 guests",
    price: "$800",
    description:
      "Includes a gourmet charcuterie board. Luxuriate in peace and solitude as we quietly cruise the Detroit River either to the lush and idyllic Ford Cove outside the Michelin-rated Edsel and Eleanor Ford House, or to the industrial yet tranquil McNichols Cove downriver from Detroit.",
    longDescription:
      "A four-hour luxury cruise traveling to either the lush Ford Cove, near the Michelin-rated Edsel and Eleanor Ford House, or the industrial yet tranquil McNichols Cove downriver from Detroit. Includes a gourmet charcuterie board for the ultimate in peace and solitude on the water.",
    highlights: [
      "4-hour cruise to Ford Cove or McNichols Cove",
      "Gourmet charcuterie board included",
      "$800 flat, 100% inclusive",
      "Up to 6 guests, captain and first mate included",
    ],
    image: img(33),
    pos: imgPos(33),
    alt: "Crew member serving a charcuterie board and wine dockside",
    gallery: [
      { n: 33, alt: "Crew member serving a charcuterie board and wine dockside" },
      { n: 29, alt: "Overhead view of a charcuterie and cheese board" },
      { n: 42, alt: "Close-up of a charcuterie board with rosemary and salami" },
    ],
  },
] as const;

export const occasions = [
  {
    slug: "birthday",
    label: "Birthday",
    icon: Cake,
    image: img(53),
    pos: imgPos(53),
    alt: "Captain Blair with two guests celebrating a birthday aboard the Sycorax",
    color: "from-[oklch(0.7_0.19_25)] to-[oklch(0.6_0.2_355)]",
    body: "We've hosted many birthday boat charter cruises on the Detroit River. Birthday cruises include a festive banner, a complimentary glass of champagne or beer, deluxe snacks, award-winning Bowers & Wilkins Bluetooth speakers, captain and sailor hats, and more.",
  },
  {
    slug: "graduation-mitzvah",
    label: "Graduation/ Mitzvah",
    icon: GraduationCap,
    image: img(35),
    pos: imgPos(35),
    alt: "Three friends laughing and cheering aboard the Sycorax with the Detroit skyline behind them",
    color: "from-[oklch(0.65_0.18_260)] to-[oklch(0.6_0.2_290)]",
    body: "Celebrate the big milestone with your favorite people aboard the Sycorax. Cruise past the Detroit skyline, pop some champagne, and mark the occasion with a private toast on the water, a graduation or a Bar or Bat Mitzvah made unforgettable.",
  },
  {
    slug: "detroit-history-high-tea",
    label: "Detroit History Tour/ High Tea",
    icon: Landmark,
    image: img(43),
    pos: imgPos(43),
    alt: "Tiered stand of chocolate-dipped strawberries and canapes for a High Tea cruise",
    color: "from-[oklch(0.62_0.16_35)] to-[oklch(0.68_0.18_70)]",
    body: "On 75-minute cruises passengers get a clear, beautiful view of the city skyline from about a mile away, while our two-hour cruises offer an up-close perspective of the entire downtown Detroit cityscape.",
  },
  {
    slug: "holidays-friends-family",
    label: "Holidays/Friends & family time",
    icon: Gift,
    image: img(45),
    pos: imgPos(45),
    alt: "Two women and a child in sailor caps enjoying a family cruise",
    color: "from-[oklch(0.6_0.19_150)] to-[oklch(0.68_0.17_190)]",
    body: "Gather the crew for a relaxing cruise around Belle Isle, complete with great tunes, deluxe snacks, and complimentary drinks. A laid-back way to spend the holidays or a rare afternoon with friends and family, all in one place, on the water.",
  },
  {
    slug: "wedding-rehearsal-dinner",
    label: "Wedding/ Rehearsal Dinner",
    icon: HeartHandshake,
    image: img(34),
    pos: imgPos(34),
    alt: "Couple laughing together near Belle Isle during a rehearsal dinner cruise",
    color: "from-[oklch(0.68_0.15_340)] to-[oklch(0.62_0.18_10)]",
    body: "Say your vows on the water or toast the night before with the Detroit skyline as your backdrop. Our crew handles the champagne, the music, and every detail, so you can just enjoy the ride with your favorite people.",
  },
  {
    slug: "anniversary-proposal",
    label: "Anniversary/ Proposal",
    icon: Gem,
    image: img(50),
    pos: imgPos(50),
    alt: "Elderly couple celebrating their anniversary with a Happy Anniversary banner aboard the Sycorax",
    color: "from-[oklch(0.62_0.2_15)] to-[oklch(0.65_0.19_345)]",
    body: "Yes, we're always excited to make your proposal perfectly you, and a moment to treasure forever! And, no surprise, we're batting a 100% success rate. Whether it's your first anniversary or your fortieth, we'll deck out the boat to celebrate.",
  },
  {
    slug: "bachelor-ette-party",
    label: "Bachelor/ette Party",
    icon: PartyPopper,
    image: img(36),
    pos: imgPos(36),
    alt: "Seven friends in sailor caps celebrating a bachelor party aboard the Sycorax",
    color: "from-[oklch(0.65_0.2_305)] to-[oklch(0.6_0.2_265)]",
    body: "Bring the whole crew for champagne, sailor hats, and skyline views on your last ride before the big day. Play your own music, open up the throttle, and let the Detroit River do the rest for your bachelor or bachelorette party.",
  },
] as const;

export const crew = [
  {
    name: "Captain Blair",
    role: "Captain",
    image: img(13),
    pos: imgPos(13),
    alt: "Captain Blair in a white captain's hat aboard the Sycorax",
    bio: "Every boat rental comes with an experienced captain who is certified by the U.S. Coast Guard.",
  },
  {
    name: "First Mate Allie",
    role: "First Mate",
    image: img(12),
    pos: imgPos(12),
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
    pos: imgPos(27),
    alt: "Detroit skyline at sunset from the water",
    content: [
      {
        type: "p",
        text: "A marina lunch or dinner on the water is a frequent destination for Detroit strait boaters on a lovely summer day. Our region has several restaurants that offer dock access within comfortable boating distance covering a broad variety of experiences targeted toward different preferences, so read on for our take on what might best suit your needs.",
      },
      {
        type: "p",
        text: "Mike's on the Water (Jefferson Dock) is a landlubber twin for the popular television series Cheers. Mike's is a cheerful, friendly, charming little joint, offering a classic bar, draft beer, and some pretty outstanding lobster rolls (we recommend the butter-only roll). They also offer standard pub fare (burgers, fries, etc), service is prompt, and prices very reasonable (mains $15-$20). They have a bumping outdoor patio.",
      },
      {
        type: "p",
        text: "Watermark (Safe Harbour) channels TGI Fridays. Watermark is a very large venue with accomodations available for big groups. They're oriented towards events and family gatherings, and everyone can find something to eat. They have a big outdoor patio, and there's easy parking if you'd like friends to meet you there, plus good service. Mains $20-$30ish.",
      },
      {
        type: "p",
        text: "Hook (Safe Harbour) is akin to the popular Midtown Detroit-based Whitney restaurant. Hook provides genuinely excellent fare in a classy setting. Mains are $20-$50. We especially enjoy the raw bar, signature crab cakes, and seafood towers. We can arrange for dedicated service on the boat, or you may dine indoors or on the lively patio. Excellent cocktails and broad wine selection. We enthusiastically recommend this elevated option for any special event.",
      },
      {
        type: "p",
        text: "Sindbad's serves up fare with the familiar vibe of a Denny's restaurant plus seafood options to boot. Long a Detroit favorite, this moderately sized marina restaurant is easily accessible by land or sea. It's been around for many decades and has long been a marina standard for the metro area. Mains run $20-$50. Service is very good and personable. No patio.",
      },
    ],
  },
  {
    slug: "why-we-love-detroit",
    title: "Unique and offbeat stuff - why we❤Detroit",
    homeTeaser: "Other unique and offbeat experiences in Detroit, why we ❤ this city",
    excerpt: "Recommendations for don't miss experiences in downtown Detroit.",
    date: "May 21, 2025",
    author: "Anthony Guilliom",
    image: img(28),
    pos: imgPos(28),
    alt: "Ambassador Bridge at sunset over the Detroit River",
    content: [
      {
        type: "p",
        text: "We, Captain Blair and First Mate Allie, wear many hats. We've had the pleasure of hosting Airbnb suites for a few years now (the Phunky Pheasant, in North Corktown, adjoining downtown Detroit), and our guests often ask for our recommendations for dining, entertainment, and offbeat cultural destinations locally. We've had much fun helping folks navigate the best of the great city of Detroit that we love so much. (They've been very kind to us in turn, we're Superhosts, and all of our suites are Guest Preferred, top 15% worldwide). Our guests have loved our recommendations, and we hope you'll find them useful, too.",
      },
      { type: "p", text: "This week, let's focus on everyone's favorite subject: restaurants!" },
      { type: "h3", text: "Our top 3 Phunky favorites" },
      {
        type: "p",
        text: "First, our top three Phunky favorites, they all tend toward the smaller, a little off-the-beaten-path vibe, and maybe that's why we love them so much. At these places, you're likely to meet the owner or chef. If you're looking for a weekend dinner, it's best to reserve, as most book up early on weekends.",
      },
      {
        type: "p",
        text: "Lena, downtown, is where the beautiful people go, and for good reason: inventive Spanish tapas, eco-calm ambience (we love eating at the bar tables), and fantastic shareable plates. Mains $30ish, but focus on the smaller, shared fare: honguitos ahumados (wild mushrooms & roasted hazelnuts doused in fried egg sauce, their sous chef has a degree in forage-ology), and the jamon iberico, do not leave without sampling these. And where else can you get an Ibigo's monologue cocktail?",
      },
      {
        type: "p",
        text: "About three blocks from your suite, Takoi is Thai fusion that is on point. Fun dishes like charred long beans, Korean bbq short ribs, and pastrami noodles (pastrami Asian is a thing in Detroit). Mains around $20. Beware, they've been heavy on the heat lately. If you go, try the Promises in Vortex cocktail, somehow, we can never leave sober.",
      },
      {
        type: "p",
        text: "A little off the beaten path, but uniquely Detroit is Flowers of Vietnam. A former Greek coney doubling as Vietnamese fusion with a Middle Eastern chef in Mexicantown with a Detroit flavored staff. This mutt of a restaurant pulls off amazingly good food. The caramel chicken wings are an incredible must-try. If you get the Com Tam for 2, you'll get a great sampling of their best. Mains cost around $20.",
      },
      { type: "h3", text: "Vegetarian & vegan picks" },
      {
        type: "p",
        text: "Are you vegetarian or vegan? All three of the above have some excellent options, but we'll suggest an additional few with respectable choices just for you.",
      },
      {
        type: "p",
        text: "If you are pescatarian, Mink is a warm, intimate seafood chef's board five-course delight, only a mile from the Phunky Pheasant. Fun, creative seafood focused plates. Reservations are a must, $75/person, drinks as you go.",
      },
      {
        type: "p",
        text: "Another great place within a few blocks, Grandma Bob's does some of our favorite Detroit-style pizza, much of it available vegan. The vegan Big Mac pizza is as good as it gets. Their pickle bar pizza is also on point (if it's not on the menu, just ask your server).",
      },
      {
        type: "p",
        text: "The Kitchen by Que, in New Center, is a stylish, intimate vegan spot with a fresh take on bistro classics, plus smoothies and coffee drinks. Mains $15.",
      },
      { type: "h3", text: "Uniquely Detroit and budget friendly" },
      {
        type: "p",
        text: "Want to try something uniquely Detroit, and budget friendly, while you're in town? We got you.",
      },
      {
        type: "p",
        text: "Try the coney challenge. Two Detroit coney icons, American and Lafayette, sit side-by-side in the heart of downtown. Originally owned by feuding brothers, these two spots famously serve uniquely Detroit coneys, a chili dog doused in chili sauce, mustard and onion. Try one of each, and pick your fave, but beware, Detroiters have strong emotions around their choices and may throw down on the topic.",
      },
      {
        type: "p",
        text: "Detroit has one of the biggest Lebanese populations outside Lebanon, focused in Dearborn, seven miles or so from downtown Detroit. Al Tayeb is a Lebanese breakfast diner open until 2 p.m. or so. The food is really outstanding, and you'll probably sample dishes you've never tried before, many under $10 (note: closed during Ramadan). Try Al Ameer for lunch or dinner; Al Ameer is nationally recognized for its excellence, and the Al Ameer combo or family tray are amazing meals. And while you're in the neighborhood, you probably won't have room, but stop at Shatila Bakery afterwards anyway for a jaw-dropping sugar rush.",
      },
      { type: "h3", text: "Detroit's pizza scene" },
      {
        type: "p",
        text: "Of course, we have to mention pizza, especially Detroit-style. So, odd fact: Detroit is one of the pizza capitals of the world. Some years, we have even more pizza parlors per capita than New York City or New Jersey. If you love pizza (who doesn't, right?), you could spend an afternoon, or spread it out over a few days, and experience Detroit's impressive variety. Our favorites, per style:",
      },
      {
        type: "list",
        items: [
          "Italian: Supinos, which may also be the best of any style, serves a perfect pie.",
          "New York: Mootz, true charred thin crust goodness, and the garlic knots are on point.",
          "Detroit, old school: Buddy's, arguably the original Detroit style pizza. Fantastic pies; BLT isn't on the menu, but ask for it.",
          "Detroit, new wave: Michigan & Trumbull, daring new adventures in Detroit-style; they've added a great new spin to a classic. Try the McLovin, and the veggie apps are all crisp & fresh.",
          "Late night greasy: When nothing but a late-night greasy slice will do, Sgt. Pepperoni's is where we head. Open til midnight/2 a.m.",
          "California/Other: For unique and offbeat pizza, check out Pie Sci, just off Wayne State University's campus.",
          "Chicago: Recently, Detroit-style pizzas have become a national hot button, and have eclipsed the Windy City, but if Chicago-style is what you crave, Chicago's Pizza is in Mexicantown by Clark Park.",
        ],
      },
      {
        type: "p",
        text: "BTW, if you're a fan, Sweetwater Tavern has the best damn wings in town, hands down.",
      },
      {
        type: "p",
        text: "Hope you found some inspiration for food dreams on this post! Detroit is, in our minds, a food-lover's paradise for all.",
      },
    ],
  },
  {
    slug: "electric-boating",
    title: "Let's try a different tack: Electric boating",
    homeTeaser: "Changing the world, one carbon footprint at a time",
    excerpt: "Looking at the impact of power boats on our world.",
    date: "May 21, 2025",
    author: "Anthony Guilliom",
    image: img(18),
    pos: imgPos(18),
    alt: "Illustration weighing wind power against carbon emissions",
    content: [
      {
        type: "p",
        text: "If you're reading this blog, chances are you have an interest in boating. For folks living in and visiting the Detroit area and Michigan, a cruise through the sparkling blue waters of the Great Lakes is the perfect way to enjoy a beautiful summer day. From fishing and skiing to pleasure cruising and swimming, we love to make the most of these world-treasured lakes and rivers we are privileged to access. And we rely on gas-powered boats to power these adventures through our pristine waters.",
      },
      {
        type: "p",
        text: "But let's dive a bit deeper. While much attention has been paid to the environmental damage done by gas-powered automobiles, we are as a society less aware of the impact gas-powered boats have on our planet. So, are gas-powered boats bad for the environment? In a word: absolutely. According to a study conducted by the National Institutes of Health, The Environmental Pain of Pleasure Boating, two-stroke-engine watercraft pollute vastly more per hour than cars. For comparison's sake, a standard five-hour yacht cruise consumes as much gas as a car driving from New York to L.A.",
      },
      {
        type: "p",
        text: "Also consider that Michigan is the number one state in the U.S. for total number of boats registered, according to a recent estimate, which revealed that 1.7 million boats are registered in the state. That's a whole lot of pollutants going into our air and waters. Carbon emissions aside, combustion engines pollute the environment even further by spilling oil and other chemicals into our waters as well.",
      },
      {
        type: "p",
        text: "Considering the outsized impact gas-powered boats have on our environment, a zero-emissions solution is exactly what the boating world desperately needs. And that's one big reason why we are so excited to bring our electric boat cruises to the Detroit area. By booking an electric cruise on the Sycorax, you're eliminating all those carbon emissions. That's the equivalent of planting six trees per four-hour cruise on the Sycorax.",
      },
      {
        type: "p",
        text: "Here's the scoop: The Sycorax is a 2023 X Shore Eelex 8000 cruiser that melds Swedish maritime craftsmanship with innovative technology solutions that contribute to a future free of fossil fuels. The X Shore company has built an award-winning reputation for green and innovative practices. After X Shore's processes, revenues and investments were audited by a leading global provider of independent, research-based evaluations on green bonds, CICERO Shades of Green AS, they were named one of the most sustainable manufacturers in the world and received the Dark Green rating, the best possible result.",
      },
      {
        type: "p",
        text: "All this adds up to a guilt-free summertime cruise on the glorious Great Lakes waters when you choose to board the Sycorax. Sycorax is currently one of only a few electric powerboat cruises available in the US. We're proud to have recently been featured on the Electrified Marina Podcast, Episode 6: Sycorax Electric Cruises, available for streaming on most major platforms. We're also briefly featured on Travels with Darley Season 12, Episode 1: Detroit Rhythms.",
      },
      {
        type: "p",
        text: "Here at Sycorax Electric Cruises, we hope to host you for a private boating excursion this summer that takes all of the pain out of pleasure boating. Book today!",
      },
      {
        type: "p",
        text: "Sources: typical yacht fuel consumption (excluding super & mega yachts) runs 20-50 gallons/hour; average U.S. highway auto mileage is 27 mpg; the LA to NYC drive is about 2,800 miles. That works out to roughly 100 gallons of gas to drive cross-country, versus 100 to 250 gallons for a 5-hour yacht cruise.",
      },
    ],
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
    pos: imgPos(3),
    alt: "Guest relaxing on the bow of the Sycorax at sunset",
    content: [
      {
        type: "p",
        text: "Ahoy, and welcome aboard the Sycorax! We're delighted to launch Southeast Michigan's first electric boat cruises, and we look forward to giving our guests an unforgettable experience aboard the very latest in green boating technology.",
      },
      {
        type: "p",
        text: "We'd love to get acquainted with you, our future guests. Can we begin by telling you about ourselves? Rather a long time ago, an impressionable young man named Blair went to the movies and saw an adaptation of William Shakespeare's play The Tempest. It starred the effervescent Susan Sarandon and a 14-year-old Molly Ringwald in her debut screen performance. At the heart of this movie is Phillip, a successful businessman who leaves his privileged life behind for adventures on the high seas. Caliban, something between a villain and a fool, features heavily in the movie's mischief; his mother, according to the play, is Sycorax, a fearsome sea witch.",
      },
      {
        type: "p",
        text: "As young Blair left the movie theater, he made a solemn promise to himself to eschew an ordinary life, to seek watery adventures instead and perform salty acts of derring-do. Years passed and, many high seas adventures under his belt, Blair, now a U.S. Coast Guard-certified captain, became the owner of a gloriously green, positively witchy, 100% electric cruiser, the Sycorax, which we now have the pleasure of sharing with you. His wife Allie, an avid swimmer, snorkeler, diver, boater, and all-around water baby, joins the crew as first mate.",
      },
      {
        type: "p",
        text: "It all started with a movie. And it culminates today in our luxury custom cruises. Come aboard the Sycorax with us and see just what an adventure boating can be!",
      },
    ],
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
