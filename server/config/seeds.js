const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cigars' },
    { name: 'Humidors' },
    { name: 'Hookahs' },
    { name: 'Lighters' },
    { name: 'Cutters' },
    { name: 'Cases' },
    { name: 'Ashtrays' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Arturo Fuente Rothschild Maduro',
      description:
        'Arturo Fuente Rothschild is dark and hefty - just like its flavor. This premium stick is loaded with top-quality notes of rich and spicy cedar, cream, and earth. This cigar certainly looks like a powerhouse so I was shocked at how smooth and mellow the draw was--but I couldn’t be more satisfied!',
      image: 'afrothchild.png',
      category: categories[0]._id,
      price: 5.99,
      quantity: 500
    },
    {
      name: 'Arturo Fuente Curly Head Deluxe',
      description:
        'All any seasoned aficionado needs to hear is “Arturo Fuente” and they know they’re about to smoke a top-notch cigar. This especially rings true for the Curly Head Deluxe--a nutty and peppery Lonsdale that draws like a dream. Curly Head exhibits some of the best flavor and construction on the market today.',
      image: 'afcurlyheaddeluxe.png',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Arturo Fuente Churchill',
      category: categories[0]._id,
      description:
        'Arturo Fuente is a luxurious premium blend, and it’s kicked up a notch in this maduro Churchill. The seamless wrapper definitely adds an element of spice that its easier going cousins don’t have. Same impeccable construction, same slow, even burn--just with a twist. This one is a must-have!',
      image: 'afchurchill.png',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Ashton 8-9-8',
      category: categories[0]._id,
      description:
        'The silky, golden Connecticut shade wrapper on the premium handmade Ashton 8-9-8 cigar was the perfect representation of the exquisite flavor to come! Creamy, nutty, and a hint of earthy, the aged Dominican 8-9-8 blend isn’t just a must-have from Ashton, but it’s a must-have in your humidor!',
      image: 'ashtoneightnineeight.png',
      price: 276.25,
      quantity: 25
    },
    {
      name: 'Ashton Senoritas',
      category: categories[0]._id,
      description:
        'The Ashton artisans are known to be innovators, and the premium snack-sized Señoritas cigars are yet another testament to that. Small enough to fit in your pocket but boasting a flavor profile full enough to satisfy those midday cravings, these are top-quality cigars that any aficionado is sure to marvel over. Señoritas are handmade with aged Dominican fillers, a stunning Cameroon wrapper, and all of the meticulous care of their full-size cousins. This is a must-have for cigar fans.',
      image: 'ashtonsenoritas.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Black Label Trading Co. Last Rite Petit Lancero',
      category: categories[0]._id,
      description:
        'Last Rites Petit Lancero cigars come with the premium quality and outstanding flavor that I have come to expect from a Black Label Trading Company blend. For a skinny stick, this one is a real slow burner with thick clouds of smoke, a fabulous aroma, and full-bodied notes of chocolate, cedar, caramel, and an underlying creaminess that leaves a lovely taste on the tongue.',
      image: 'bltclastritepl.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Black Label Trading Co. Last Rites Viaticum BP Lancero Limited Edition',
      category: categories[0]._id,
      description:
        'The Black Label Trading Co. has become a famous boutique brand known for their top-rated limited releases, so I just had to get my hands on BLTC Last Rites Viaticum BP Lancero Limited Edition premium cigars. These long and thin box-pressed beauties are rolled by hand in a 6.75x40 size, boasting a core of finely aged Nicaraguan and Honduran long fillers bundled within a hearty Honduran Habano binder and completed by a top-shelf Ecuadorian Habano maduro wrapper that presents a lusciously dark hue. Once I started puffing away on one of these luxury treats, I was taken aback by both the complexity and balance, delivering a tapestry of sweet earth and dark fruit flavors backed by plenty of spice and some floral undertones. Available in boxes of 20, and with only 800 boxes being made, act fast if you want them in your humidor.',
      image: 'bltclastritesviaticumle.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cohiba Macassar Double Corona',
      category: categories[0]._id,
      description:
        'Cohiba Macassar Double Corona features a unique and very dark Connecticut Havano wrapper that was chosen exclusively for this blend a Connecticut broadleaf binder, and a combination of Dominican and Nicaraguan fillers that have been aged four years, are then further aged in fragrant rum barrels. The result is a highly complex, medium bodied smoke with notes of earth, white pepper, cedar, and vanilla. The flawlessly handcrafted 7.25 x 54 Double Corona has become my go-to smoke after a hearty dinner and paired with my favorite Rum or cognac.',
      image: 'cmacassardc.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cohiba Royale Toro Royale',
      category: categories[0]._id,
      description:
        'Cohiba Royale Toro Royale cigars are the pinnacle of luxury. Packaged in stylish boxes of 10, these cigars, Cohiba’s first blend ever hailing from Honduras, are perfectly constructed with Dominican, Honduran, and Nicaraguan long-filler leaves, a Dominican binder, and finished with a dark and oily Nicaraguan Broadleaf wrapper. This royal cigar will treat the discerning smoker with top-notch flavors of spice, black pepper, cinnamon, and sweet tobacco.',
      image: 'croyaletoror.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Cohiba Red Dot Lonsdale Grande',
      category: categories[0]._id,
      description:
        'With the Lonsdale Grande, there’s no waiting for that sweet spot in the Cohiba Dominican blend. This slender skyscraper burns a bit quicker than its cousins, opening up into a bouquet of creamy and savory flavor notes right away that lasts right down to the nub.',
      image: 'creddotlonsdaleg.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'La Aurora 107 Nicaragua Robusto',
      category: categories[0]._id,
      description:
        'When I picked up a box of La Aurora 107 Nicaragua Robusto cigars and sparked one up, they quickly became my go-to premium smoke. The blend consists of aged Nicaraguan long filler and binder tobaccos that are swathed in a rich and oily top-quality Nicaraguan wrapper, all rolled into a popular 5 x 50 size. The first Nicaraguan puro blend in the La Aurora lineup, these top-shelf smokes are medium-full bodied and provide decadently smooth notes of nuts, earth, pepper, coffee, and leather that dance on the palate with every puff, and top-notch construction makes the smoking experience effortless.',
      image: 'lanicaragua.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'La Aurora Preferidos',
      category: categories[0]._id,
      description:
        'Bound and filled with vintage tobacco from the Dominican Republic and wrapped in a handsome Ecuadorian Connecticut wrapper, La Aurora Preferidos Emerald cigars have all the makings of a fine vitola. In addition to their wonderful construction consisting of a smooth draw and even burn, these babies also have a delicious flavor profile.',
      image: 'lapreferidos.png',
      price: 187.00,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - The Hampton Black Finish',
      category: categories[1]._id,
      description:
        'The Prestige Hampton Black Finish Cigar Humidor features a diamond pattern bonded leather top and sides with red accent stitching to add a luxury look to any surroundings. Lined with the best Spanish cedar, a dynamic hinged upper tray raises above the Interior when the lid is opened and lowers when closed. A 3- piece divider set attaches to the interior magnetically, allowing you to separate your brands. It also boasts a top-quality polished silver humidifier, an ultra-wide digital silver bezel hygrometer with calibration feature and has a capacity to house up to 200 of your favorite premium cigars. ',
      image: 'pchhamptonblack.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - Sovereign',
      category: categories[1]._id,
      description:
        'Featuring two different colored woods and a stunning glass top so I can lovingly gaze upon my top-rated sticks, this gorgeous cigar humidor fits into just about any room’s décor. The Sovereign has the capacity to comfortably hold up to 50 premium cigars, providing enough space for my collection to grow. This striking storage unit also comes with a built-in humidifier as well as an analog hygrometer, so the conditions inside will never be a mystery and my smokes will always be top-quality.',
      image: 'pchsovereign.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - Baccus Two Tone',
      category: categories[1]._id,
      description:
        'This surprisingly affordable wood humidor features Spanish cedar lining and a two-tone, high-gloss finish, accented with gold pull handles to open the three drawers. It also came with a lock and key set, and a humidifier and hygrometer. Best of all, this gorgeous, airtight piece of furniture does an amazing job of keeping up to 200 of my favorite premium cigars fresh.',
      image: 'pchbaccustt.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Old Glory',
      category: categories[1]._id,
      description:
        'For the patriotic aficionado, proudly display the heritage and prestige of the USA with this devoted Old Glory cigar humidor. “Old Glory” herself is distinctly displayed in rustic, weathered fashion, across this partisan box’s polished exterior. Able to accommodate up to 25, probably non-American smokes (it’s ok, we won’t tell) with beautiful, adjustable cedar-lined storage, and even includes its own, top-quality humidifier and glass analog hygrometer.',
      image: 'oldglory.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Azteca 75ct',
      category: categories[1]._id,
      description:
        'This mesmerizing- geometric pattern design inspired by the ancient Aztec culture, the Azteca cigar humidor offers a luxury stylish way to store up to 75 of your handmade premium cigars. Lined with perfectly aged kiln-dried Spanish cedar, the best humidifier and hygrometer, the Azteca provides the perfect airtight sealant to keep your favorite cigars in pristine smoking condition.',
      image: 'azteca.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Solana Rosewood 100ct',
      category: categories[1]._id,
      description:
        'Preserve the impeccable craftsmanship and premium tobacco of your collection with a cigar humidor of your own. Who wants to smoke a dry cigar? They fall apart, and lose all the savory flavor that drew you into this lavish lifestyle. These cigar humidors are masterfully engineered to ensure freshness and the top-notch, quality flavor you crave. Elie Bleu, Visol, Prestige cigar humidors and more! Available in a bevy of shapes, models and sizes, you’re sure to find the cigars humidor right for you. From decorative, table-top masterpieces of oak and glass, to convenient on-the-go humidification, this collection of premium humidors for cigars has something for everyone and every home.',
      image: 'solanarosewood.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'MYA Ayla Brass Hookah',
      category: categories[2]._id,
      description:
        'This beautiful Bohemian MYA Ayla hookah comes in 7 different unique colors and is paired with an exquisite gold colored brass stem. It stands 24 inches tall with stunning arabesque designs on both the stem and glass base.',
      image: 'myaaylabrass.jpeg',
      price: 120.00,
      quantity: 10
    },
    {
      name: 'MYA Medoro Hookah',
      category: categories[2]._id,
      description:
        'The MYA Medoro 131MX Hookah is an 18" Tall Hookah made from Classic Clear glass and Stainless Steel Stem. The Medoro Hookah comes paired with the 131MX stem, a new MX-Function Style stem featuring a rotating-ring pressure release valve. Adjusting the Rotating ring will allow for air flow release through the stem up the bowl or through the side.',
      image: 'myamedoro.jpeg',
      price: 90.00,
      quantity: 20
    },
    {
      name: 'MYA Helix Hookah',
      category: categories[2]._id,
      description:
        'Uniquely designed. Made with Bohemian glass. Height is 14". One hose hookah.',
      image: 'myahelix.jpeg',
      price: 90.00,
      quantity: 20
    },
    {
      name: 'Xikar HP3 Triple Flame Black',
      category: categories[3]._id,
      description: "Xikar cigar accessories are made to the highest standards to assure reliability and long life. Whether it's the powerful Xikar teardrop shape cigar cutters (honed to the hardest and sharpest stainless steel edges possible), or Xikar cigar lighters, designed for comfort and long life, they all come with Xikar's guaranteed for life promise.",
      image: 'xikartripleblack.jpeg',
      price: 120.00,
      quantity: 10
    },
    {
      name: 'Palio Cigar Lighters Vesuvio Clear Triple Flame',
      category: categories[3]._id,
      description: "This top-quality lighter boasts a huge fuel tank, made with crystal-clear and durable plastic to not only allow me to see exactly how much full it is, but also keeps prices affordable. The massive size of the fuel tank also allows for several uses without needing to be refueled. The flame is also precise and powerful thanks to the triangular arrangement of the jet torches.",
      image: 'paliovesuvioclear.jpeg',
      price: 120.00,
      quantity: 10
    },
    {
      name: 'Alec Bradley Burner',
      category: categories[3]._id,
      description: "Shaped like a tea kettle, the Alec Bradley Burner Cigar Lighter is one unique, cool-looking lighting machine! Easy to use, you just push the over-sized piezo style ignition, adjust the flame height, and perfectly light every premium cigar in your stash. This ultimate table top cigar lighter from one of the most famous cigar brands in the world, is the perfect lighter for all your smoking needs.",
      image: 'alecburner.jpeg',
      price: 120.00,
      quantity: 10
    },
    {
      name: 'ST DuPont Black Maxi Punched Lighter',
      category: categories[3]._id,
      description: "The S.T. Dupont MaxiJet Black Matte Punched Lighter is sleek, sexy, and highly functional.",
      image: 'stdupontmaxi.jpeg',
      price: 225.00,
      quantity: 10
    },
    {
      name: 'Colibri Quasar Gunmetal',
      category: categories[4]._id,
      description:
        'The popular Colibri Quasar Table Cutter in this gunmetal finish gives you two options for cutting your handmade premium cigars. The V-cut is my favorite, for me I get a clean cut that provides less tobacco you capture all the flavors of your cigar, the straight cut I would use for the smaller size cigar.',
      image: 'colibriquasargun.jpeg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Xikar X12 Custom Cabanas',
      category: categories[4]._id,
      description:
        'The Xikar XI2 Custom Cabanas w/ Logo Cigar Cutter looks simply stunning with its signature tear drop shape emblazoned with the old-world Cuban artwork of the famous Cabanas cigar brand. The blades in this premium cigar cutter are made of high quality 440 stainless steel with an HRC of 57.What does that mean for you? It means that these are the hardest and sharpest blades that money can buy! The body retains the classic XIKAR shape and features a lightweight design that always feels ergonomic in the hand. Capable of easily and precisely cutting up to a 54-ring gauge, this unique cutter can accommodate most of the popular cigar sizes on the market today.',
      image: 'xikarxonetwo.jpeg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Xikar Redwood Cutter',
      category: categories[4]._id,
      description:
        'The Xikar Redwood is a stunning designed cigar cutter, the bold redwood accents the sterling silver aluminum body. The double comes equipped with a durable aluminum body, planetary geared cutting system with five internal gears and a spring-loaded double guillotine stainless-steel blade release button. This unique design will spark-up a conversation every time you use it. The comfortable feel when cutting your vintage cigar is amazingly smooth with top-notch performance.',
      image: 'xikarredwood.jpeg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Prestige Desktop',
      category: categories[4]._id,
      description:
        'The premium Prestige Desktop Cutter features a walnut wood body and push handle, combined with chrome plated hardware and a razor-sharp cutting mechanism. I simply set my stick on to the cigar bed, slide it into place underneath the blade, and press down on the handle for a clean, precise cut that never tears the wrapper. The included catch tray prevents any mess. The tabletop cigar cutter has a push button locking mechanism that keeps the blade safely in place when not in use.',
      image: 'prestigedesk.jpeg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Prestige Drexel 3 Blue Case',
      category: categories[5]._id,
      description:
        "Drexel's Blue Cigar Case looks stunning in its blue stitched pattern design. The cedar lining is a wonderful feature along with the extra-large sleeves that comfortably holds my 60-ring cigars.",
      image: 'prestigedrexel.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Prestige 6 Cigar Humidor Case',
      category: categories[5]._id,
      description:
        "The portable and versatile Prestige Black Leather 6-Cigar Humidor Case is definitely a one-of-a-kind accessory that you don't see every day! Sliding the case open reveals two removable cigar beds that can protect up to six 8 x 60-ring gauge premium cigars.",
      image: 'prestigehumidorcase.jpeg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Visol Landon Carbon Fiber Mini Case',
      category: categories[5]._id,
      description:
        "The premium quality Visol Landon Carbon Fiber Mini Cigar Case let me throw away my ugly cigarillo boxes and carry my little stogies in style. The carbon fiber construction and crush-proof design protects my sticks from just about any disaster, and the rugged yet elegant design and looks appropriate in any setting.",
      image: 'visollandoncarbon.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Cherry Wood 4 Cigar Ashtray',
      category: categories[6]._id,
      description:
        'The Cherry Wood 4-Cigar Ashtray has a very luxurious look. This ashtray has a 7" diameter, a gorgeous Cherry wood finish, 4 spots to place down your premium cigars, and an easy to clean deep brass ashtray insert.',
      image: 'cherryashtray.jpeg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Copper 4 Stirrup Stinky Ashtray',
      category: categories[6]._id,
      description:
        'The Copper Plated 4 Stirrup Original Stinky is the Cadillac of ashtrays. This beauty not only looks good, it comfortably holds up to four cigars, and the deep bowl keeps the ashes where they belong.',
      image: 'copperstirrupashtray.jpeg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Elie Bleu Red Alba Porcelain Ashtray',
      category: categories[6]._id,
      description:
        'Hand painted in France, the Elie Bleu Red Alba Porcelain Ashtray is truly a luxury work of art. A stunningly bold design with gorgeous Alba artwork in the center of the bowl makes this museum quality piece the showcase of my cigar den.',
      image: 'eliebleuredalba.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Villiger Black Ashtray',
      category: categories[6]._id,
      description:
        'Whether a den, patio or lounge, nothing completes your personal smoking utopia more than a swanky cigar ashtray. These superior cigar ashtrays are as stylish as they are functional, enhancing the aesthetics and overall smoking experience in any environment.',
      image: 'villigerblack.jpeg',
      price: 9.99,
      quantity: 600
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
