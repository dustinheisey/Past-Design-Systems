const config = {
  title: 'TODO - site title',
  url: 'TODO - site url',
  navigation: {
    logo: {
      src: './public/img/logo',
      alt: 'TODO - site title'
    },
    header: {
      variant: 'TODO - header variant',
      links: [
        // TODO links
        /* Simple Link
          {
            label: 'label',
            external: true || false,
            url: 'path'
          },
        */
        /*
          Link with Sub Links
          {
            label: 'label',
            url: 'path',
            external: true || false
            subLinks: [
              { label: 'label', url: 'path' , external: true || false },
              ...
            ]
          }
        */
      ],
      action: {
        label: 'TODO - action button label',
        url: 'TODO - action button path'
        // external:  true || false
      },
      bottombar: {
        links: [
          // TODO bottombar links
          /* Simple Link
            {
              label: 'label',
              url: 'path',
              icon: 'icon'
            },
          */
        ],
        fab: {
          label: 'TODO - fab label',
          url: 'TODO - fab path',
          icon: 'icon'
        }
      }
    },
    footer: {
      variant: 'TODO - footer variant',
      links: [
        // TODO - footer links
        /* Simple Link
          {
            label: 'label',
            external: true || false,
            url: 'path'
          },
        */
      ],
      // carbon: true || false, (show carbon calculator in footer)
      social: [
        // TODO - social links
        /* Social Link
          {
            label: 'label',
            icon: 'logo-${icon}',
            url: 'social url'
          },
        */
      ],
      copywrite: '© 2024 TODO - site title'
    }
  },
  pages: [
    // TODO pages
    {
      url: 'index',
      header: false,
      title: 'TODO - SEO friendly page title',
      description: 'TODO - SEO friendly page description',
      regions: {
        // TODO page regions
        wakeUp: {
          layout: 'start-heavy',
          end: {
            component: 'text',
            size: 'region',
            overline: "You've Slept Far Too Long",
            headline: 'Awaken in a World You No Longer Recognize',
            body: 'You open your eyes in a cold, desolate bunker, and it feels like you’re still trapped in a dream—a nightmare. A thousand years have passed, and the world you knew has vanished. Can you survive long enough to uncover the truth?'
          },
          start: {
            component: 'img',
            loading: 'lazy',
            src: 'bunker.webp',
            ar: 'square',
            alt: 'Underground Bunker'
          }
        },
        rebuild: {
          layout: 'gallery',
          overline: 'Piece Together What’s Left',
          variant: 'masonry',
          text: 'start',
          headline: 'Rebuild to Remember',
          body: 'As you rebuild the shattered world, fragments of your memory return, and you begin to wake up, piece by piece. Each step forward reveals a truth you’ve long forgotten—about yourself, the past, and the role you played in humanity’s downfall. Will rebuilding the world help you wake from this nightmare?',
          items: [
            {
              component: 'card',
              icon: 'leather',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/leather-making',
              headline: 'Leather making'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/nightmares/cold',
              body: 'I am sitting in an office chair, looking at my desktop. It has multiple files open, showing schematic plans for an underground bunker.'
            },
            {
              component: 'card',
              icon: 'compass',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/navigation',
              headline: 'Navigation'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/nightmares/undead',
              body: 'I read multiple reports of a strange illness affecting people across the world, causing their skin to rot and their minds to become increasingly confused and violent.'
            },
            {
              component: 'card',
              icon: 'ingot',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/metallurgy',
              headline: 'Metallurgy'
            },
            {
              component: 'card',
              icon: 'sprout',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/milestones/agriculture',
              headline: 'Agriculture'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/nightmares/exotic',
              body: "I'm reading news that mass die-offs of wild fish have been occurring due to ocean acidification."
            },
            {
              component: 'card',
              icon: 'tree',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/milestones/natural-magic',
              headline: 'Natural Magic'
            },

            {
              component: 'card',
              icon: 'needle',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/textiles',
              headline: 'Textiles'
            },
            {
              component: 'card',
              icon: 'pottery',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/pottery',
              headline: 'Pottery'
            },
            {
              component: 'card',
              icon: 'blood',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/blood-magic',
              headline: 'Blood Magic'
            },
            {
              component: 'card',
              icon: 'pig',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/animal-husbandry',
              headline: 'Animal Husbandry'
            },

            {
              component: 'card',
              icon: 'palette',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/dye-making',
              headline: 'Dye making'
            },
            {
              component: 'card',
              icon: 'electronics',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/electronics',
              headline: 'Electronics'
            },
            {
              component: 'card',
              icon: 'gunpowder',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/gunpowder',
              headline: 'Gunpowder'
            },

            {
              component: 'card',
              icon: 'cooking',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/cooking',
              headline: 'Cooking'
            },
            {
              component: 'card',
              icon: 'barrel',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/petroleum',
              headline: 'Petroleum'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/nightmares/wither',
              body: "I'm watching the news of a Category 6 hurricane that has been sweeping through the country for weeks now. It's bringing with it massive floods that have forced millions to evacuate and lose their homes."
            }
          ],
          btn: {
            url: 'https://wiki.inconvenient.gg/milestones',
            label: 'See Dozens More Milestones'
          }
        },
        explore: {
          layout: 'reel',
          size: 'region',
          overline: "The Past Won't Stay Buried",
          headline: 'Explore New Worlds to Discover the Truth',
          body: "The ruins of humanity’s downfall are scattered across distant worlds. Only by traveling through these dimensions can you uncover the hidden stories of what happened while you slept. Can you piece together the truth before you're lost in the chaos of the past?",
          items: [
            {
              component: 'card',
              variant: 'flip',
              img: {
                ar: 'square',
                src: 'everbright.webp',
                alt: 'Everbright',
                loading: 'lazy'
              },
              headline: 'Everbright',
              body: 'Step into the snowy expanses of Everbright, where a mysterious, long-lost civilization once thrived. The frosty beauty of this land hides the darker truths of a world that ignored its warnings. Will you explore its icy secrets?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: {
                src: 'undergarden.webp',
                alt: 'Undergarden',
                loading: 'lazy'
              },
              headline: 'Undergarden',
              body: 'In the eerie caverns of Undergarden, something far worse than darkness awaits. Nature has reclaimed this place, but it left behind a haunting legacy. Can you navigate its forgotten depths?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'everdawn.webp', alt: 'Everdawn', loading: 'lazy' },
              headline: 'Everdawn',
              body: 'Everdawn is alive with heat and chaos. Its warm lands are teeming with life, but something more sinister lurks beneath. The remnants of past disasters remain. What will you uncover here?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: {
                src: 'twilight.webp',
                alt: 'The Twilight Forest',
                loading: 'lazy'
              },
              headline: 'The Twilight Forest',
              body: 'In the abandoned streets of The Twilight Forest, echoes of a great tragedy persist. This once-flourishing land now lies in silence. Can you face the shadows of its forgotten past?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'nether.webp', alt: 'The Nether', loading: 'lazy' },
              headline: 'The Nether',
              body: "Once a thriving landscape, The Nether now burns from the effects of unchecked climate devastation. Fire and brimstone fill the air, leaving a grim reminder of the cost of ignoring nature's limits. What role will you play?"
            },
            {
              component: 'card',
              variant: 'flip',
              img: {
                src: 'bumblezone.webp',
                alt: 'The Bumblezone',
                loading: 'lazy'
              },
              headline: 'The Bumblezone',
              body: 'Explore the buzzing world inside The Bumblezone, a realm of endless honeycombs and hidden danger. But don’t be fooled by its golden glow—this world has seen better days. Will you find hope here?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'blueleaf.webp', alt: 'Blueleaf', loading: 'lazy' },
              headline: 'Blueleaf',
              body: 'A paradise rich in oil-filled oceans and prized rose marble, Blueleaf glimmers with beauty and opportunity. But beneath its alluring surface lies the heavy toll of exploitation and environmental strain. Will you join the rush for resources, or choose a different path?'
            }
          ]
        },
        choice: {
          layout: 'split-slider',
          start: {
            component: 'text',
            size: 'region',
            overline: 'The Future is in Your Hands',
            headline:
              'Will You Dream of a New World or Stay Trapped in The Nightmare?',
            body: 'We’ve been living in a dream—a nightmare that we mistake for reality. You now have the power to wake up, to reject the broken path we’re on, dream a new dream, and create a new world. Or will you stay trapped, letting the Earth spiral further into chaos? The future is yours to decide.',
            btn: {
              label: 'Play Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            }
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'action',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Shape the World with Your Choices',
          body: 'Every decision you make in An Inconvenient Modpack leaves a mark on the world. The fate of the Earth is in your hands. Download the modpack and start crafting a story that’s uniquely yours.',
          btns: [
            {
              label: 'Download Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            },
            {
              variant: 'secondary',
              label: 'Visit the Wiki',
              url: 'https://wiki.inconvenient.gg'
            }
          ]
        }
      }
    }
  ]
};

module.exports = config;
