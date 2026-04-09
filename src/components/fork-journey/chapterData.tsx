import { type Chapter } from '../journey/types';

export const FORK_CHAPTERS: Chapter[] = [
  {
    id: 'materials',
    number: 1,
    title: 'Raw Materials',
    subtitle: 'Mining the modern table',
    hook: 'The simple tool in your kitchen drawer begins its life deep in the iron mines of Australia and the nickel deposits of Indonesia.',
    color: '#64748b', // Slate / Steel color
    body: [
      'While historically made of wood, bone, or silver, the vast majority of modern forks are made of stainless steel. Stainless steel is a metallurgical alloy, a carefully balanced recipe of primarily Iron, Carbon, Chromium, and Nickel.',
      'The most common high-quality flatware is graded as "18/10" stainless steel. This refers to the alloy\'s composition: 18% Chromium and 10% Nickel. The iron ore used as the base is heavily mined in Australia and Brazil.',
      'Chromium is the magic ingredient that makes the steel "stainless." It is predominantly mined in South Africa and Kazakhstan. Nickel, which provides a bright silver-like luster and adds structural strength, is largely sourced from Indonesia and the Philippines.',
      'Cheaper forks are often made from 18/0 stainless steel. Without the nickel, these forks are magnetic, slightly less shiny, and more prone to bending and long-term corrosion. The raw elements must be smelted in massive blast furnaces at temperatures exceeding 1,400°C (2,550°F) to perfectly bind the metals.'
    ],
    facts: [
      { label: 'Grade 18/10', value: '18% Cr / 10% Ni', unit: 'Standard for premium flatware' },
      { label: 'Melting point', value: '~1,400', unit: 'Degrees Celsius for stainless steel' },
      { label: 'Top iron producer', value: 'Australia', unit: 'Over 900 million metric tons annually' },
      { label: 'Required Chromium', value: '>10.5%', unit: 'Minimum needed to prevent rust' }
    ],
    mapPoints: [
      { country: 'Australia', material: 'Iron Ore', role: 'Steel Base', coords: { x: 80, y: 65 } },
      { country: 'South Africa', material: 'Chromium', role: 'Rust Resistance', coords: { x: 55, y: 75 } },
      { country: 'Indonesia', material: 'Nickel', role: 'Luster and Strength', coords: { x: 75, y: 55 } },
      { country: 'China', material: 'Steel Processing', role: 'Alloy Smelting', coords: { x: 72, y: 35 } }
    ],
    pullQuote: 'A high-quality fork is exactly 18% chromium and 10% nickel—any less, and it will rust in your dishwasher.',
    timeline: [
      { year: '3000 BCE', event: 'Early bone and wood forks used in Ancient Egypt, strictly as cooking utensils, not for eating' },
      { year: '1913', event: 'Harry Brearley invents modern "rustless" stainless steel in Sheffield, England' },
      { year: '1920s', event: 'Stainless steel flatware begins to replace silver and silver-plated utensils globally' }
    ]
  },
  {
    id: 'manufacturing',
    number: 2,
    title: 'Manufacturing',
    subtitle: 'Forging the tines',
    hook: 'Turning a rigid sheet of metal into a flawless, ergonomic dining instrument requires immense pressure and violent stamping.',
    color: '#475569',
    body: [
      'The manufacturing of a fork starts with large, heavy coils of stainless steel. These coils are unrolled and fed into a blanking machine, which stamps out a flat, paddle-like outline of the fork called a "blank." This process is highly automated and extremely fast.',
      'Next comes the rolling process. The flat blanks are passed through heavy steel rollers under immense pressure to thin out the bowl area (where the tines will be) and shape the handle. This is crucial for balance; a good fork must not be too heavy at the head or it will fall off a plate.',
      'The blank is then placed into a high-pressure drop forge or stamping press to give it its curved profile (the "camber") and intricate handle patterns. Then, the most defining step occurs: cutting the tines. A specialized punch presses down with several tons of force, piercing the steel to remove the metal between the prongs.',
      'Finally, the fork undergoes extensive finishing. It is tumbled with ceramic abrasives to remove sharp burrs left from cutting the tines. It then goes through multiple stages of buffing and electro-polishing to achieve a mirror-like, sanitary finish where bacteria cannot hide.'
    ],
    facts: [
      { label: 'Stamping pressure', value: '150+', unit: 'Tons of force per stamp' },
      { label: 'Standard tines', value: '4', unit: 'Optimal number for modern forks' },
      { label: 'Initial form', value: 'Blank', unit: 'The flat, unshaped metal outline' },
      { label: 'Finishing process', value: 'Tumbling', unit: 'Uses ceramic media to smooth edges' }
    ],
    pullQuote: 'The space between the tines is just as important as the metal itself, stamped out with tons of force in a fraction of a second.',
    timeline: [
      { year: '18th Century', event: 'Industrial revolution introduces early stamping presses, speeding up cutlery production' },
      { year: '1950s', event: 'Drop forging becomes highly automated, drastically lowering the cost of metal flatware' },
      { year: '2010s', event: 'Robotic polishing arms replace human polishers in large-scale cutlery factories' }
    ]
  },
  {
    id: 'supply-chain',
    number: 3,
    title: 'Supply Chain',
    subtitle: 'The cutlery capital of the world',
    hook: 'It is highly likely the fork you used today passed through a single, specific province in southern China.',
    color: '#64748b',
    body: [
      'While historical hubs like Sheffield (UK) and Solingen (Germany) are famous for cutlery, today the undisputed global center of flatware production is Jieyang, a city in China’s Guangdong province. Known as the "Hardware and Cutlery Capital of China," Jieyang houses thousands of flatware enterprises.',
      'The supply chain is fiercely optimized. Steel coils arrive at the ports of Guangdong, are trucked to specialized industrial parks in Jieyang, and are processed in factories that do nothing but stamp and polish flatware 24/7. This clustering of raw materials, specialized machinery, and packaging facilities creates hyper-efficiency.',
      'Once packaged, sets of forks are loaded onto massive container ships in Shenzhen or Guangzhou. A single standard 40-foot shipping container can hold millions of forks. Because they are dense, heavy, and non-perishable, forks are ideal for slow, low-cost ocean freight.',
      'In recent years, the supply chain has had to adapt to the e-commerce boom. Instead of shipping exclusively in massive bulk to hotel chains or big-box retailers (like IKEA or Walmart), factories now also handle smaller, direct-to-consumer packaging for Amazon fulfillment centers worldwide.'
    ],
    facts: [
      { label: 'Global Hub', value: 'Jieyang, China', unit: 'Dominant manufacturing city' },
      { label: 'Export format', value: 'Ocean Freight', unit: 'Due to weight and non-perishability' },
      { label: 'Container capacity', value: '>1 Million', unit: 'Forks per 40ft container' },
      { label: 'Key retail buyer', value: 'IKEA', unit: 'One of the world\'s largest flatware distributors' }
    ],
    pullQuote: 'The modern fork is a masterclass in logistics: heavy, durable, and shipped by the millions across the oceans.',
    timeline: [
      { year: '1980s', event: 'Cutlery manufacturing begins shifting heavily from Europe to Asia' },
      { year: '2005', event: 'Jieyang officially named the "Hardware and Cutlery Capital of China"' },
      { year: '2020s', event: 'Direct-to-consumer e-commerce reshaping how flatware is boxed and shipped' }
    ]
  },
  {
    id: 'science',
    number: 4,
    title: 'Science & Engineering',
    subtitle: 'The physics of eating',
    hook: 'A fork is a marvel of metallurgical passivity and ergonomic geometry, perfectly designed to pierce without tearing.',
    color: '#475569',
    body: [
      'Why doesn\'t a stainless steel fork rust or taste like metal when you eat highly acidic foods like tomatoes? The secret is a microscopic phenomenon called the "passive film." The chromium in the alloy reacts with oxygen in the air to form an invisible layer of chromium oxide, just 1 to 2 nanometers thick.',
      'This passive layer is self-healing. If you scratch your fork with a knife, the exposed chromium instantly reacts with oxygen to repair the protective barrier, preventing the underlying iron from rusting and stopping the steel from imparting a metallic taste to your food.',
      'The physical geometry of a fork is also heavily engineered. Through centuries of trial and error, four tines (prongs) became the global standard. Two tines are great for carving meat but terrible for scooping peas; five tines make the fork too wide for the human mouth. Four tines provide the perfect balance of piercing capability and scooping surface area.',
      'The "pitch" or camber of the fork—the curve from the handle to the tip—is engineered to comfortably rest on the middle finger while being held by the index finger and thumb, acting as a highly efficient lever to lift food to the mouth with minimal wrist strain.'
    ],
    facts: [
      { label: 'Passive layer', value: '1-2 nm', unit: 'Thickness of the rust-preventing barrier' },
      { label: 'Self-healing element', value: 'Chromium', unit: 'Reacts with oxygen to fix scratches' },
      { label: 'Standard tines', value: '4', unit: 'Balanced for piercing and scooping' },
      { label: 'Ergonomic feature', value: 'Camber', unit: 'The curve engineered for wrist comfort' }
    ],
    pullQuote: 'Every time you scratch a fork, it chemically heals itself using oxygen from the air before you take your next bite.',
    timeline: [
      { year: '11th Century', event: 'Two-tined forks introduced in Italy, heavily criticized by the Church as "artificial hands"' },
      { year: '18th Century', event: 'Four-tined forks become the standard in Europe for their superior utility' },
      { year: '1913', event: 'Discovery of the chromium oxide "passive film" makes steel suitable for dining' }
    ]
  },
  {
    id: 'economics',
    number: 5,
    title: 'Economics & Business',
    subtitle: 'From luxury to commodity',
    hook: 'Once a symbol of elite status made of solid silver, the fork has been democratized into a product worth just pennies.',
    color: '#64748b',
    body: [
      'For centuries, forks were a luxury item. Owning "silverware" was literal—it was made of silver, requiring the labor of master silversmiths. Today, flatware is a global commodity market valued at over $14 billion annually, driven largely by the hospitality industry and home dining.',
      'The economics of fork production rely strictly on massive economies of scale. The cost of raw steel and the initial tooling (the molds for the stamping presses) are high. However, once a machine is running, the marginal cost of producing one additional fork drops to literal cents.',
      'Because the margins are so razor-thin, business survival depends on volume and automation. This dynamic wiped out hundreds of smaller, local flatware manufacturers in the US and UK during the late 20th century, consolidating jobs into massive Asian mega-factories.',
      'Simultaneously, the restaurant takeout boom created a parallel multi-billion dollar economy for single-use plastic forks (polystyrene or polypropylene). However, as environmental regulations shift, the business economics are rapidly pivoting back toward cheap, reusable steel or compostable alternatives like bamboo or PLA plastics.'
    ],
    facts: [
      { label: 'Global flatware market', value: '~$14B', unit: 'Annual valuation' },
      { label: 'Marginal production cost', value: '<$0.10', unit: 'For mass-produced steel forks' },
      { label: 'Shift in labor', value: 'Consolidated', unit: 'From local artisans to global mega-factories' },
      { label: 'Plastic alternative', value: 'PLA / Bamboo', unit: 'Rising markets due to plastic bans' }
    ],
    pullQuote: 'The automation of the steel industry turned an elite status symbol into something given away freely at cafeterias.',
    timeline: [
      { year: '1600s', event: 'Forks remain a rare luxury for European nobility, often traveling with them in custom cases' },
      { year: '1840s', event: 'Electroplating invented, allowing cheap metals to be coated in silver, democratizing "silverware"' },
      { year: '20th Century', event: 'Disposable plastic forks invented, creating a parallel massive, but wasteful, market' },
      { year: '2020s', event: 'Surge in demand for cheap, reusable metal cutlery driven by anti-plastic legislation' }
    ]
  },
  {
    id: 'legal',
    number: 6,
    title: 'Laws & Regulation',
    subtitle: 'Food safety and the plastic ban',
    hook: 'The humble fork is heavily policed to ensure it doesn\'t poison your food or choke the oceans.',
    color: '#475569',
    body: [
      'Because forks enter human mouths, they are strictly governed by Food Contact Materials (FCM) regulations. Agencies like the FDA in the US and the EFSA in Europe enforce rigorous testing to ensure flatware does not leach harmful heavy metals.',
      'Manufacturers must subject their forks to "migration testing." This involves submerging the fork in an acidic solution (like 4% acetic acid, mimicking vinegar or tomato sauce) at high temperatures for hours. If unsafe levels of nickel, lead, or other impurities migrate from the steel into the liquid, the entire batch is legally barred from sale.',
      'The most massive regulatory shift in the flatware industry today is environmental. Single-use plastic forks contribute significantly to marine pollution. In 2021, the European Union implemented the Single-Use Plastics Directive, legally banning plastic cutlery across all member states.',
      'Similar laws are sweeping across states in the US and nations like India and Canada. This regulatory crackdown is forcing a massive supply chain pivot. Airlines, fast-food chains, and delivery apps are now legally required to transition to biodegradable forks, or return to offering lightweight, reusable stainless steel options.'
    ],
    facts: [
      { label: 'Regulation category', value: 'FCM', unit: 'Food Contact Materials laws' },
      { label: 'Testing protocol', value: 'Migration', unit: 'Testing for heavy metal leaching into acids' },
      { label: 'Major EU Law (2021)', value: 'SUP Directive', unit: 'Banned single-use plastic cutlery' },
      { label: 'Target pollutant', value: 'Polystyrene', unit: 'The primary plastic being phased out' }
    ],
    pullQuote: 'To protect human health, a fork must survive boiling acid in a lab before it ever touches your dinner plate.',
    timeline: [
      { year: '1958', event: 'Food Additives Amendment in the US regulates materials that come into contact with food' },
      { year: '2004', event: 'EU Regulation (EC) 1935/2004 establishes modern standards for safe Food Contact Materials' },
      { year: '2021', event: 'The EU completely bans single-use plastic cutlery' },
      { year: '2022', event: 'India implements a nationwide ban on single-use plastic items, including forks' }
    ]
  }
];