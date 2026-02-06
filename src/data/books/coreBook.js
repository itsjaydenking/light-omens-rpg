// P, Quote, List, Ordered List, Image, etc.

export const coreBook = {
  id: "core",
  title: "Light Omens Core Rules (Ashcan Edition)",
  subtitle: "Basic Rules for Playtesting and Feedback",
  description:
    "This is the Ashcan version of the Light Omens core rules for playtesting and feedback. It is not the final version of the rules, but it contains the core concepts and mechanics of the game.",
  version: "0.2",
  updatedAt: "2026-02-05",

  // Chapter Data
  chapters: [
    // Chapter 1 - Welcome to Light Omens
    {
      id: "welcome",
      title: "Welcome to Light Omens",
      sections: [
        {
          id: "welcome__introduction-to-the-world-of-hiraeth",
          title: "Introduction to the World of Hiraeth",
          blocks: [
            {
              type: "p",
              text: "Welcome to the realm of **Light Omens**, where light and shadow intertwine, forging destinies and reshaping the cultures of **Hiraeth**. A land reclaimed from the tyranny of primeval forces, Hiraeth bears the scars of its past; wars waged, empires toppled, and the energy of **Grim Light** that forever altered its fate.",
            },
            {
              type: "p",
              text: "Hiraeth was once a battlefield dominated by dragons, giants, and elemental forces that enslaved humanity. The arrival of the Grim Light shattered that cycle, empowering the Erathans to rise as heroes and liberators. Yet, their victory came at a cost: the world remains fractured, its peace fragile, and its lands haunted by both the remnants of its oppressors and the unintended consequences of its salvation.",
            },
            {
              type: "p",
              text: "For Seekers like you, Hiraeth is a canvas painted with hidden truths, untamed power, and the faint but unyielding glimmer of hope. Its landscapes tell stories of towering cities humming with latent energy, of wild frontiers marked by mystery, and of ruins that whisper the secrets of ancient civilizations.",
            },
            {
              type: "p",
              text: "Every corner of Hiraeth holds a challenge, and every shadow hides a choice.",
            },
            {
              type: "list",
              items: [
                "Seek relics of the Grim Forges.",
                "Navigate volatile faction alliances.",
                "Survive the wilds and write your legend.",
              ],
            },
          ],
        },

        {
          id: "welcome__themes-of-light-and-shadow",
          title: "Themes of Light and Shadow",
          blocks: [
            {
              type: "p",
              text: "At the heart of Light Omens lies the eternal tension between two forces: the radiant promise of light and the insidious pull of shadow. The Grim Light, the world’s defining source of power, is both a beacon of hope and a reminder of sacrifice. It offers immense potential to those who wield it, but its allure comes with costs, personal, societal, and moral.",
            },
            {
              type: "p",
              text: "Shadows, meanwhile, are ever-present, not just as literal darkness but as symbols of the fears, doubts, and ambitions that reside in every heart. They are the lingering echoes of the Everlasting Night and the forces that threaten to reclaim the light. For the people of Hiraeth, shadows are both external foes and internal struggles, shaping lives and testing wills.",
            },
            {
              type: "p",
              text: "As a player, you’ll navigate this duality. Will you embrace the power of the Grim Light, knowing it may change you forever? Will you resist the shadows, or will you find a way to understand and wield their strength? Will you ignore a source of Grim Light to save a town, knowing it could draw Light Eaters from the darkness?",
            },
            {
              type: "p",
              text: "Every decision shapes not only your character but also the evolving world around them. This interplay of light and shadow forms the core of your journey, offering depth and moral complexity at every turn.",
            },
          ],
          subsections: [
            {
              id: "welcome__themes-of-light-and-shadow__hopepunk-vs-grimdark-the-emotional-landscape",
              title: "Hopepunk vs. Grimdark: The Emotional Landscape",
              blocks: [
                {
                  type: "p",
                  text: "In Light Omens, narrative tone exists on a spectrum, blending the optimistic determination of **Hopepunk** with the gritty realism of **Grimdark**. These opposing perspectives enrich the storytelling experience, allowing for moments of triumph amidst despair.",
                },
                {
                  type: "list",
                  items: [
                    "**Hopepunk**: This theme celebrates defiance in the face of darkness. It thrives on the belief that collective action, compassion, and persistence can illuminate even the bleakest circumstances. In this light, Seekers build bridges across divides, rekindle lost connections, and strive to leave the world better than they found it.",
                    "**Grimdark**: By contrast, Grimdark reveals the weight of survival in a world where power corrupts and hope is a fragile flame. It asks difficult questions: What are you willing to sacrifice? How do you confront the inevitability of loss? Grimdark moments challenge players with the moral ambiguity of their choices, enriching the story’s complexity.",
                  ],
                },

                {
                  type: "p",
                  text: "Together, these tones create a dynamic emotional landscape. Your Seeker stands at this crossroads, choosing when to fight for hope and when to confront the harsh truths of survival. The balance between these themes is yours to explore, offering both resilience and realism as you illuminate your path forward.",
                },
              ],
            },
          ],
        },

        {
          id: "welcome__the-world-right-now-at-a-glance",
          title: "The World Right Now (At a Glance)",
          blocks: [
            {
              type: "p",
              text: "Hiraeth stands in the uneasy calm after the catastrophe. The Grim Forges that once powered empires now lie broken, volatile, or fiercely guarded. The Light Eaters are no longer a unified swarm, but they remain a lurking terror in ruins and scarlands where the Everlasting Night still echoes. Ark Rifts split the world like wounds, opening into Traversal Worlds rich with relics and riddled with horrors.",
            },
            {
              type: "p",
              text: "Most people don’t chase legends. They cling to settlements, trade routes, and whatever fragile order they can salvage. They fear famine, raids, plague, and the return of shadowed things that should have died with the Hive. They also fear the temptation of Grim Light, because it still works miracles and miracles always demand a price.",
            },
            {
              type: "p",
              text: "Seekers live in the space between survival and change. When a community needs medicine from a ruin, a faction needs a lost artifact, or a Rift opens where it shouldn’t, Seekers answer the call. You are not the rulers of this world, you are the ones willing to walk into what everyone else avoids.",
            },
            {
              type: "p",
              text: "In Light Omens, most adventures revolve around four truths:",
            },
            {
              type: "list",
              items: [
                "The past is not buried. Ruins, relics, and memories still shape the present.",
                "Power has consequences. Grim Light can save lives, but it changes those who rely on it.",
                "Factions need you. Whether as allies, tools, or threats, Seekers matter.",
                "Hope is an action. You don’t “have” hope, you choose it, again and again.",
              ],
            },
          ],
        },

        {
          id: "welcome__playing-as-a-seeker",
          title: "Playing as a Seeker",
          blocks: [
            {
              type: "p",
              text: "Seekers are the stubborn hope of Hiraeth, intrepid adventurers who confront the unknown and seek meaning in a world of chaos. Whether you are a scavenger in the ruins of the Grim Forges, a diplomat navigating the volatile alliances of the Revenites or Technocrats, or a warrior defending your people from the encroaching darkness, your journey shapes the world around you.",
            },
            {
              type: "p",
              text: "Seekers are defined not by a singular purpose but by their individual motivations. Some pursue the mysteries of Grim Light, drawn by curiosity to its whispers of untold power. Others seek to safeguard their communities, using knowledge, diplomacy, or strength to build a brighter future. Yet others are driven by ambition, hunting for relics and resources to claim their mark on history.",
            },
            {
              type: "p",
              text: "Whatever your goal as a Seeker, you are not merely an observer of history but an author. Each choice you make, each ally you gain, and each truth you uncover builds your legend, influencing the fate of Hiraeth itself.",
            },
          ],
          subsections: [
            {
              id: "welcome__playing-as-a-seeker__your-path-as-a-seeker",
              title: "Your Path as a Seeker",
              blocks: [
                {
                  type: "p",
                  text: "As a Seeker, your journey is shaped by the paths you choose and the actions you take. Use your character’s origin, archetypes, and tendencies to craft a story uniquely your own. Your Seeker is not just a character on a page, they are the embodiment of your aspirations, flaws, and dreams. These are some of the defining avenues you may explore:",
                },
                {
                  type: "list",
                  items: [
                    "**Discover Lost Knowledge**: Unearth the secrets of the Grim Forges, Ark Rifts, and the ancient civilizations built around them. Every text, relic, and memory holds the potential to reshape your understanding of the world, and your role within it.",
                    "**Protect a Home**: Prepare and protect the people and places that hold meaning to you from the encroaching darkness and the ever growing despair.",
                    "**Forge Alliances**: Align yourself with factions such as the Aethernauts, Revenites, or Erathans, or even carve your own independent path. Your choices will determine your allies, enemies, and influence in the fractured political landscape.",
                    "**Master the Grim Light**: Harness the transformative power of this strange energy. Forge weapons, summon latent forces, or manipulate the elements to overcome adversity.",
                  ],
                },
              ],
            },

            {
              id: "welcome__playing-as-a-seeker__the-seekers-tools",
              title: "The Seekers’ Tools",
              blocks: [
                {
                  type: "p",
                  text: "Every Seeker is equipped with not only physical tools but with conceptual ones that define their approach to challenges and triumphs.",
                },
                {
                  type: "p",
                  text: "**Truths**: Narrative elements that shape the world and its events. Personal, situational, and environmental truths provide both opportunities and obstacles, allowing players to interact dynamically with their surroundings.",
                },
                {
                  type: "p",
                  text: "**Momentum and Chaos**: These resources reflect the balance between calculated risk and collective success. Use Momentum to inspire allies and shape favorable outcomes; embrace Chaos to confront danger and defy the odds.",
                },
                {
                  type: "p",
                  text: "**Hope**: The most personal and vital of resources, Hope represents your character’s resilience and determination. It is the spark that keeps the light alive in the face of overwhelming odds.",
                },
              ],
            },

            {
              id: "welcome__playing-as-a-seeker__the-seekers-cycle",
              title: "The Seeker’s Cycle",
              blocks: [
                {
                  type: "p",
                  text: "Seekers thrive on momentum. Most journeys begin with a need: a settlement running out of food, a relic that could wage a war, a rift that opens near a trade road, or a rumor that something beneath the ruins is waking again.",
                },
                {
                  type: "p",
                  text: "From there, the pattern is simple, but never safe:",
                },
                {
                  type: "list",
                  items: [
                    "**Investigate**: Learn what’s truly happening and what it will cost.",
                    "**Journey**: Cross wild frontiers, broken roads, and scarlands shaped by Sublimation.",
                    "**Confront**: Face guardians, rival Seekers, faction agents, and the shadows that feed on desperation.",
                    "**Claim or Save**: Take the relic, seal the rift, rescue the lost, or choose not to. Because sometimes the right answer is leaving power behind.",
                    "**Return Changed**: Bring something back: resources,truth, consequence, or a new threat.",
                  ],
                },
                {
                  type: "p",
                  text: "Every completed journey leaves a mark. A town survives. A faction gains leverage in a region. A fragment of a Forge ignites something. A shadow learns your name. In Hiraeth, nothing stays contained for long, and Seekers are the reason, for better or for worse.",
                },
              ],
            },
          ],
        },
      ],
    },

    // Chapter 2 - Legends and Legacies
    {
      id: "legends",
      title: "Legends and Legacies",
      sections: [
        {
          id: "legends__origin-of-hiraeth",
          title: "The Origin of Hiraeth",
          blocks: [
            {
              type: "p",
              text: "Long before the first Seeker walked these lands, Hiraeth was a crucible of conflict. It was a battleground ruled by dragons, giants, and elementals, all beings of immense power that dominated humanity and forced them into servitude. This age of Primeval Dominance was unrelenting, with survival dictated by appeasement and subjugation.",
            },
            {
              type: "p",
              text: "Life was bleak, and hope was a fragile ember. Legends claim another world once faced a similar fate, one called Terra. Its people fled a dying home, searching the stars for refuge.",
            },
            {
              type: "p",
              text: "This changed when the night sky was torn asunder, and a star streaked across the heavens. Its impact reshaped Hiraeth forever. From the wreckage emerged the Terrans, bearers of a strange and luminous energy they called the New Clear Energy. Humanity began to rise, wielding the radiating energy that we understand to be Grim Light to challenge their oppressors. Those who embraced its power, and survived, became the first Erathans. Warriors and mages who could wrest control of Hiraeth from the primordial forces.",
            },
            {
              type: "p",
              text: "The Grim Light, however, was no ordinary gift. It seeped into the very fabric of the world, transforming its wielders and the land alike. Thus began the Grand Upheaval, a turning point that reshaped both the destiny of Hiraeth and the hearts of those who called it home.",
            },
          ],
          subsections: [
            {
              id: "legends__origin-of-hiraeth__grand-upheaval-and-the-grim-forges",
              title: "The Grand Upheaval and the Grim Forges",
              blocks: [
                {
                  type: "p",
                  text: "The aftermath of the Terran arrival saw humanity ascend, but not without consequence. The Grim Light crystallized into immense nodes of power, known as Grim Forges, scattered across the land. These charged crystalline structures became focal points of society, fueling both wondrous advancements and devastating conflicts.",
                },
                {
                  type: "p",
                  text: "Each Forge resonated uniquely, creating profound societal and philosophical shifts. Over time, distinct cultures arose around these Forges, each defined by their relationship to the Grim Light.",
                },

                {
                  type: "list",
                  items: [
                    "**Revenites **sought to master death itself, forging deep connections with the afterlife through the black Obscuran Forge.",
                    "**Technocrats **pushed the boundaries of technology, crafting automatons and mechanical marvels from the blue Cobalite Forge.",
                    "**Mythoterics **embraced their primal natures, forging pacts with monsters and mastering transformation through the yellow Chimeran Forge.",
                    "**Aethernauts **unlocked the vast potential of magic, shaping reality itself with the red Aetherium Forge.",
                    "**Erathans**, those closest to the origin of Grim Light, rejected its excesses, seeking a balance between innovation and tradition.",
                  ],
                },

                {
                  type: "p",
                  text: "The Grim Forges fueled these factions’ ambitions, but they also bred rivalry and distrust. Hiraeth became a fractured world, a mosaic of philosophies and powers teetering on the brink of chaos.",
                },
              ],
            },

            {
              id: "legends__origin-of-hiraeth__grand-upheaval-and-the-grim-forges__factions-and-philosophies",
              title: "Factions and Philosophies",
              blocks: [
                {
                  type: "p",
                  text: "The factions of Hiraeth are more than political entities, they are reflections of the world’s deepest struggles and aspirations. Each represents a unique response to the challenges posed by the Grim Light. These factions shape the world of Hiraeth, providing players opportunities to align, challenge, or redefine their philosophies in their journey.",
                },
                {
                  type: "list",
                  items: [
                    "Revenites (Obscuran Forge): Cultures born from Revenite society focus on mastery over death. Revenites are stewards of memory, weaving the stories of the departed into the fabric of life. Their communities thrive on multigenerational bonds and the pursuit of immortality, whether physical, spiritual, or through legacy.",
                    "Technocrats (Cobalite Forge): Cultures born from Technocrat society blend technology with arcane power sources. Technocrats construct and manufacture structures that defy the natural order. They are driven by an unyielding belief in progress, even at the cost of humanity’s connection to nature.",
                    "Mythoterics (Chimeran Forge): Cultures born from Mythoteric society bond deeply with nature. Mythoterics are both feared and revered as guardians of the wilderness, forever battling the beast within themselves.",
                    "Aethernauts (Aetherium Forge): Cultures born from Aethernaut society see magic as a blessing not to be ignored. Aethernauts value curiosity above all, seeing reality as a tapestry to be unraveled and rewoven through arcane mastery.",
                    "Erathans (Forgeless): Cultures not born from, or are distantly related to other factions vary in their behavior with Grim Light. Generally, Erathans prefer little to no interaction with Grim Light if possible, embracing a philosophy of sustainability and community.",
                  ],
                },
              ],
            },

            {
              id: "legends__origin-of-hiraeth__ark-rifts-and-traversal-worlds",
              title: "Tales of the Ark Rifts and Traversal Worlds",
              blocks: [
                {
                  type: "p",
                  text: "While Grim Light manifested Grim Forges and other crystals with distinct properties, in other places it did something different by tearing the fabric of the world. The Ark Rifts remain a testament to Hiraeth’s fractured reality.",
                },
                {
                  type: "p",
                  text: "Expeditions into the rifts have uncovered artifacts, advanced technologies, and entirely new ecosystems. Yet, few return unscathed, as the rifts are often unstable and filled with hostile entities.",
                },
                {
                  type: "p",
                  text: "Some factions, like the Aethernauts, see the Traversal Worlds as the key to reclaiming Hiraeth’s lost glory. Others, like the Erathans, view them with suspicion, fearing the further destabilization of reality.",
                },
                {
                  type: "p",
                  text: "Looming over all is the Astrum Star, the dimmed sun of Hiraeth. Some speculate it is itself an Ark, while others see it as a gate to even greater mysteries. Its faint glow continues to shape the world, inspiring both hope and unease.",
                },
              ],
            },

            {
              id: "legends__origin-of-hiraeth__night-parade-and-everlasting-night",
              title: "The Night Parade and the Everlasting Night",
              blocks: [
                {
                  type: "p",
                  text: "As Hiraeth’s reliance on Grim Light grew, so too did the world’s vulnerability to its unintended consequences. From the fractured Ark Rifts emerged the Light Eaters, shadowy entities whose hunger for Grim Light and other energy sources drove them to multiply uncontrollably. What began as isolated phenomena soon escalated into a world-spanning calamity, culminating in the era known as the Night Parade.",
                },
                {
                  type: "p",
                  text: "The Night Parade was marked by the rise of the Light Eaters into an organized and overwhelming force, their presence plunging Hiraeth into chaos. Their sheer numbers and relentless hunger culminated in the Everlasting Night, a time when the Astrum Star’s light was obscured entirely by the shadow of their amassed forms. This era was a trial for humanity, driving even the most bitter rivals to unite in the face of annihilation.",
                },
                {
                  type: "p",
                  text: "Initially dismissed as anomalies, the Light Eaters soon began appearing in waves, descending upon settlements, Grim Forges, and Ark Rift zones with terrifying precision.",
                },
                {
                  type: "p",
                  text: "As the Light Eaters consumed energy sources, they grew in size and strength, their replication rates accelerating exponentially. These incursions came to be known as the Night Parade, processions of living shadows that left devastation in their wake.",
                },
                {
                  type: "p",
                  text: "Entire regions were abandoned as survivors fled to fortified enclaves. Factions that had once vied for control of Grim Forges and Ark Petals now found themselves pushed to the brink of extinction.",
                },
              ],
            },

            {
              id: "legends__origin-of-hiraeth__grim-sublimation-and-the-fall-of-the-hive",
              title: "The Grim Sublimation and the Fall of the Hive",
              blocks: [
                {
                  type: "p",
                  text: "Desperation forced humanity to undertake a final, cataclysmic stand against the Light Eaters. United by necessity, the factions of Hiraeth marshaled their forces and unleashed the full potential of the Grim Forges in a coordinated assault on the Light Eaters’ hive, the epicenter of their proliferation.",
                },
                {
                  type: "p",
                  text: "Harnessing the raw, destructive power of Grim Light, humanity deployed armies of Revenants (spirits and flesh given form), Vitamechs (machines powered by life force), primal Cryptomachs (humanoids shifted into great titans), and reality-bending Aethernaut spells in an unprecedented show of force.",
                },
                {
                  type: "p",
                  text: "The hive, a massive nexus of Light Eaters, was annihilated in the assault, severing their coordination and eradicating the majority of their population. The victory was decisive but came at an unimaginable cost.",
                },
                {
                  type: "p",
                  text: "The concentrated release of Grim Light during the battle caused Grim Sublimation, a catastrophic eruption of energy that reshaped the very landscape of Hiraeth.",
                },
                {
                  type: "list",
                  items: [
                    "Entire regions were rendered uninhabitable, scarred by energy storms and rift-like anomalies.",
                    "The Grim Forges were left irreparably damaged, their energy reserves spent in the final attack.",
                    "What few fragments of Grim Light remained became rare and coveted resources.",
                    "Survivors emerged into a fractured world, their homes destroyed and their societies weakened.",
                  ],
                },
                {
                  type: "p",
                  text: "The Grim Sublimation marked the beginning of the Grim Dawn.",
                },
              ],
            },
          ],
        },

        {
          id: "legends__grim-dawn-world-in-balance",
          title: "The Grim Dawn, a World in Balance",
          blocks: [
            {
              type: "p",
              text: "The Grim Dawn marks an era of rebuilding and rediscovery. It is a period defined by the fractured remnants of a once vibrant civilization, where survival and ingenuity go hand in hand. Though the Light Eaters’ hive is gone, their legacy continues to haunt the land, shaping the roles of factions, settlements, and explorers alike.",
            },
            {
              type: "p",
              text: "In this age, players take on the roles of Seekers, individuals from various walks of life who traverse the ruins of Hiraeth in search of power, knowledge, and meaning. Whether motivated by duty, ambition, or curiosity, Seekers are integral to shaping the world’s fragile future.",
            },
          ],
          subsections: [
            {
              id: "legends__grim-dawn-world-in-balance__lingering-threats",
              title: "Lingering Threats",
              blocks: [
                {
                  type: "p",
                  text: "Even as the shadow of the Everlasting Night fades, the dangers of the Grim Dawn are pervasive. These threats underscore the challenges that Seekers must face.",
                },
                {
                  type: "list",
                  items: [
                    "Remnants of the once-mighty swarm of Light Eaters stalk abandoned ruins, preying on the unwary. These silent predators are no longer a unified threat but remain deadly in their isolation.",
                    "Even in their absence, there are scarred regions where their activity once thrived. These areas are plagued by shadow constructs, despair-inducing auras, and lingering energy distortions. These zones often hold lost relics but come with harrowing risks.",
                    "Beyond the Light Eaters' direct influence are the lingering traces of the Dusk Plague, an infection that eats away at the mental, emotional, and physical aspects of humanity. Eventually those that succumb do not perish, but become Umbralings. Hollowed out beings that pose both a physical and emotional challenge to those they encounter.",
                  ],
                },
                {
                  type: "p",
                  text: "The Grim Dawn is as much about rediscovery as it is survival, with every new revelation bringing fresh questions.",
                },
                {
                  type: "p",
                  text: "The Astrum Star and its dimming glow continues to puzzle scholars and mystics alike. The question continues, 'is it a dying celestial body or a dormant engine of horror beginning to wake?'",
                },
                {
                  type: "p",
                  text: "Once the lifeblood of progress, the Grim Forges are now barren or volatile. Factions race to claim any remaining fragments of Grim Light and explore alternative energy sources such as Ark Rifts and Daemonata shards.",
                },
              ],
            },
            {
              id: "legends__grim-dawn-world-in-balance__seekers-architects-of-the-future",
              title: "The Seekers, Architects of the Future",
              blocks: [
                {
                  type: "p",
                  text: "Seekers are the anchor of society after the Grim Dawn, playing an essential role in the world’s recovery and evolution. Seekers come from all walks of life. From scholars seeking forbidden knowledge, warriors reclaiming their honor, mages harnessing Grim Light, and opportunists driven by greed or ambition. Each Seeker’s path is unique, but all share a willingness to face the unknown.",
                },
                {
                  type: "p",
                  text: "What drives them? Seekers are motivated by diverse goals. Some seek sincere restoration, to rebuild Hiraeth’s broken world by rediscovering lost legacies of technology and magic. Others seek glory, to carve their names into the annals of history through daring exploits. A few simply seek the truth, to uncover the secrets of Grim Light, the Traversal Worlds, and the Astrum Star. ",
                },
                {
                  type: "p",
                  text: "Every Seeker adapts to the dangers of the Grim Dawn with ingenuity and resourcefulness. Seekers utilize recovered relics imbued with residual energy, offering abilities or insights. Many Seekers are shaped by the philosophies of their cultures, granting them unique skills and perspectives. ",
                },
                {
                  type: "p",
                  text: "The actions of Seekers ripple through Hiraeth, influencing its factions, its people and its destiny. They uncover ancient truths, rebuild connections, and sometimes unwittingly, spark new conflicts.",
                },
              ],
            },
          ],
        },
      ],
    },

    // Chapter 3 - BASE6: The Hope Engine
    {
      id: "hope-engine",
      title: "BASE6: The Hope Engine",
      sections: [
        {
          id: "origin-of-hiraeth",
          title: "Origin of Hiraeth",
          blocks: [
            {
              type: "p",
              text: "test",
            },
          ],
        },
      ],
    },

    // Chapter 4 - Character Creation
    {
      id: "character-creation",
      title: "Character Creation",
      sections: [
        {
          id: "origin-of-hiraeth",
          title: "Origin of Hiraeth",
          blocks: [
            {
              type: "p",
              text: "test",
            },
          ],
        },
      ],
    },

    // Chapter 5 - Conflict and Consequences
    {
      id: "conflict-and-consequences",
      title: "Conflict and Consequences",
      sections: [
        {
          id: "origin-of-hiraeth",
          title: "Origin of Hiraeth",
          blocks: [
            {
              type: "p",
              text: "test",
            },
          ],
        },
      ],
    },
  ],
};
