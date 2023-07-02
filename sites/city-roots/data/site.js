module.exports = {
  title: 'City Roots Foundation - Advancing Urban Sustainability',
  url: 'https://city-roots.dustinheisey.com',
  description:
    'City Roots Foundation is a dedicated organization aiming to improve urban sustainability. Through education, infrastructure development, and policy advocacy, we’re building a future where cities become greener and healthier.',
  navigation: {
    logo: {
      src: './public/svg/logo',
      alt: 'City Roots Project'
    },
    header: {
      variant: 'spaced',
      links: [
        {
          label: 'About',
          url: '/about'
        },
        {
          label: 'Learn',
          url: '/learn',
          subLinks: [
            { label: 'Environmental Protection', url: '/learn/environmental-protection' },
            { label: 'Human Centric Urban Design', url: '/learn/human-centric' },
            { label: 'Sustainable Urban Design', url: '/learn/sustainability' },
            { label: 'Resources', url: '/learn/resources' }
          ]
        },
        {
          label: 'Our Work',
          url: '/our-work',
          subLinks: [{ label: 'Impact', url: '/our-work/impact' }]
        },
        { label: 'Get Involved', url: '/get-involved' }
      ],
      action: { label: 'Contact', url: '/contact' }
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: 'home' },
        { label: 'About', url: '/about', icon: 'about' },
        { label: 'Learn', url: '/learn', icon: 'about' },
        { label: 'Our Work', url: '/our-work', icon: 'advocate' },
        { label: 'Get Involved', url: '/resources', icon: 'books' }
      ],
      fab: { label: 'Contact', url: '/contact', icon: 'about' }
    },
    footer: {
      variant: 'mission-bg',
      groups: [
        {
          title: 'Learn',
          links: [
            { label: 'Environmental Protection', url: '/learn/environmental-protection' },
            { label: 'Human Centric Urban Design', url: '/learn/human-centric' },
            { label: 'Sustainable Urban Design', url: '/learn/sustainability' },
            { label: 'Resources', url: '/learn/resources' }
          ]
        },
        {
          title: 'Nonprofit',
          links: [
            { label: 'Home', url: '/', icon: 'home' },
            { label: 'About', url: '/about', icon: 'about' },
            {
              label: 'Our Work',
              url: '/our-work'
            },
            { label: 'Impact', url: '/impact' },
            { label: 'Get Involved', url: '/get-involved' },
            { label: 'Contact', url: '/contact' }
          ]
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'Privacy Policy',
              url: 'https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b'
            },
            {
              label: 'Terms of Service',
              url: 'https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5'
            },
            {
              label: 'Cookies',
              url: 'https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df'
            },
            { label: 'Sitemap', url: '/sitemap.xml' }
          ]
        }
      ],
      social: [
        {
          label: 'Medium',
          icon: 'logo-medium',
          url: 'https://medium.com/@dustin_heisey'
        },
        {
          label: 'Dribbble',
          icon: 'logo-dribbble',
          url: 'https://dribbble.com/dustin_heisey'
        },
        {
          label: 'Behance',
          icon: 'logo-behance',
          url: 'https://www.behance.net/dustin_heisey'
        },
        {
          label: 'LinkedIn',
          icon: 'logo-linkedin',
          url: 'https://www.linkedin.com/in/heiseydustin/'
        }
      ],
      copywrite: '© 2023 City Roots Collective. All rights reserved.'
    }
  },
  pages: [
    {
      url: 'index',
      title: 'Urban Visionaries | Sustainable and Human-Centric Urban Design',
      description:
        'Urban Visionaries strive to create sustainable and human-centric urban designs promoting walkability, inclusivity, and environmental protection. Join us in creating a better tomorrow.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Welcome to Urban Visionaries',
          overline: 'Creating sustainable and human-centric urban design for a better tomorrow',
          body: "At Urban Visionaries, we believe that the cities of the future must be designed with people in mind. That's why we strive to create sustainable and human-centric urban design that promotes walkability and inclusivity, while protecting the environment. Our mission is to meet the needs of all citizens and create a better tomorrow for everyone. Join us in our journey towards a more sustainable and inclusive future.",
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        problem: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'list',
            variant: '',
            style: { theme: '' },
            headline: 'The Challenge We Face',
            overline: 'Urbanization without consideration for sustainability and inclusivity',
            body: 'Rapid urbanization is leading to numerous challenges - lack of green spaces, increased pollution, and a disconnect from nature. These issues are further compounded by designs that do not consider all citizens, leading to a lack of inclusivity and accessibility.',
            icon: 'remove',
            items: [{ icon: 'remove', text: '' }]
          }
        },
        guide: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Meet Your Guide',
            overline: 'Urban Visionaries - Your partner in creating sustainable and inclusive cities',
            body: 'We, at Urban Visionaries, are your guides in navigating these challenges. With our expertise in sustainable and human-centric urban design, we are committed to transforming our cities into spaces that are not just livable, but also sustainable, inclusive, and in harmony with nature.'
          }
        },
        plan: {
          layout: 'stack',
          style: {
            theme: '',
            cover: false
          },
          headline: 'Our Plan',
          overline: 'A strategic approach to sustainable and inclusive urban design',
          body: 'Our plan involves a comprehensive approach that includes research, design, implementation, and education. We work on various projects that promote sustainable practices, design spaces that are inclusive, and educate the public about the importance of sustainable and human-centric urban design.',
          items: [
            {
              component: 'article',
              style: {
                theme: ''
              },
              img: { src: '', alt: '' },
              overline: '',
              time: '',
              headline: '',
              body: ''
            }
          ]
        },
        success: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Achieve Success',
            overline: 'Create cities of the future',
            body: 'With your support, we can create cities that are not just structures and buildings, but thriving ecosystems that are sustainable, inclusive, and in harmony with nature. This is the success we aim for - cities that are designed for people and the planet.'
          },
          end: {
            component: 'stats',
            style: { theme: '' },
            overline: '',
            headline: '',
            body: '',
            items: [
              {
                headline: '',
                body: ''
              }
            ]
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of the solution',
          body: 'Join us in our mission to transform our cities. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'about',
      title: 'About Us | Urban Visionaries',
      description:
        'Discover the story, mission, team, and impact of Urban Visionaries, dedicated to sustainable and human-centric urban design. Join us in transforming our cities.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Our Story',
          overline: 'How we started and what we believe in',
          body: "Urban Visionaries was founded with a vision to create sustainable and human-centric urban design that meets the needs of all citizens while protecting the environment. We believe that the cities of the future must be designed with people in mind, and that's what we're striving to achieve.",
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        mission: {
          layout: 'center',
          style: {
            theme: '',
            cover: true
          },
          content: {
            component: 'text',
            style: { theme: '' },
            size: 'page',
            headline: 'Our Mission',
            overline: 'Creating sustainable and human-centric urban design',
            body: 'Our mission is to create cities that are sustainable, inclusive, and designed with people in mind. We strive to meet the needs of all citizens, ensuring that everyone has access to green spaces, clean air, and a safe, walkable environment.'
          }
        },
        team: {
          layout: 'stack',
          style: {
            theme: '',
            cover: false
          },
          headline: 'Our Team',
          overline: 'Meet the visionaries',
          body: 'Our team is made up of passionate urban planners, designers, and environmentalists who are dedicated to transforming our cities. With diverse backgrounds and expertise, we bring a holistic approach to urban design.',
          items: [
            {
              component: 'article',
              style: {
                theme: ''
              },
              img: { src: '', alt: '' },
              overline: '',
              time: '',
              headline: '',
              body: ''
            }
          ]
        },
        impact: {
          layout: 'stack',
          style: {
            theme: '',
            cover: false
          },
          headline: 'Our Impact',
          overline: 'Making a difference',
          body: 'We are proud of the impact we have made in creating sustainable and human-centric urban design. From designing public spaces to promoting sustainable transportation, we are making a positive impact in the world.',
          items: [
            {
              component: 'stats',
              variant: 'inline',
              style: { theme: '' },
              items: [
                {
                  headline: '',
                  body: ''
                }
              ]
            }
          ]
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'learn',
      title: 'Learn with Us | Urban Visionaries',
      description:
        'Explore the world of sustainable and human-centric urban design with Urban Visionaries. Learn about our commitment to environmental protection and inclusivity.',
      regions: {
        intro: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'page',
            headline: 'Learn with Us',
            overline: 'Explore the world of sustainable and human-centric urban design',
            body: "At Urban Visionaries, we're passionate about educating people on the importance of sustainable and human-centric urban design. That's why we're inviting you to learn with us and explore the world of sustainable and human-centric urban design."
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        sustainability: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Sustainable Urban Design',
            overline: 'Creating cities that are in harmony with nature',
            body: 'Learn about sustainable urban design and how it can transform our cities into spaces that are not just livable, but also sustainable, inclusive, and in harmony with nature.',
            btn: { variant: 'secondary', label: 'Learn About Sustainable Design', url: '/learn/sustainability' }
          }
        },
        human: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Human-Centric Design',
            overline: 'Designing with people in mind',
            body: 'Discover the principles of human-centric design and how it can create cities that are designed with people in mind. From walkability to accessibility, learn how human-centric design can make our cities more inclusive.',
            btn: { variant: 'secondary', label: 'Learn About Human Centric Design', url: '/learn/human-centric' }
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        environment: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Environmental Protection',
            overline: 'Protecting our planet',
            body: 'Understand the importance of environmental protection in urban design. Learn how sustainable and human-centric urban design can help protect our environment and create a sustainable future for all.',
            btn: {
              variant: 'secondary',
              label: 'Learn About Environmental Protection',
              url: '/learn/environmental-protection'
            }
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'learn/sustainability',
      title: 'Sustainable Urban Design | Urban Visionaries',
      description:
        'Learn about our approach to sustainable urban design. See how we are transforming cities into livable, sustainable, inclusive spaces in harmony with nature.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Sustainable Urban Design',
          overline: 'Creating sustainable urban environments that prioritize people and the planet',
          body: 'At Urban Visionaries, we believe in creating sustainable urban environments that not only meet the needs of all citizens, but also prioritize the health of our planet. Learn about our approach to sustainable urban design and how it can transform our cities into spaces that are not just livable, but also sustainable, inclusive, and in harmony with nature.',
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        problem: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'The Problem',
            overline: 'Rapid urbanization and environmental degradation',
            body: 'Rapid urbanization is leading to numerous challenges - lack of green spaces, increased pollution, and a disconnect from nature. These issues are further compounded by designs that do not consider the environment, leading to a degradation of our natural resources.'
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        solution: {
          layout: 'bg-pattern',
          style: {
            theme: '',
            cover: false
          },
          pattern: 'wave',
          headline: 'Our Solution',
          overline: 'Sustainable Urban Design',
          body: 'Our solution is sustainable urban design - an approach that prioritizes the environment and creates spaces that are in harmony with nature. We incorporate green spaces, promote sustainable transportation, and use materials and designs that minimize environmental impact.'
        },
        benefits: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'The Benefits',
          overline: 'Healthier cities and a healthier planet',
          body: 'The benefits of sustainable urban design are manifold - healthier cities with clean air and green spaces, a reduction in environmental degradation, and a better quality of life for all citizens. By prioritizing sustainable urban design, we can create a better future for all.',
          items: [
            {
              component: 'blurb',
              style: {
                theme: ''
              },
              icon: 'remove',
              overline: '',
              headline: '',
              body: ''
            }
          ]
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'learn/human-centric',
      title: 'Human-Centric Design | Urban Visionaries',
      description:
        'Discover our commitment to human-centric design, prioritizing comfort, inclusivity, and a high quality of life in urban environments. Join us in creating cities designed for people.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Human-Centric Design',
          overline: 'Designing cities with people in mind',
          body: 'At Urban Visionaries, we believe in designing cities with people in mind. Human-centric design is about creating urban environments that are not only functional and efficient, but also comfortable, inclusive, and conducive to a high quality of life.',
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        problem: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'The Problem',
            overline: 'Cities not designed for people',
            body: 'Many of our cities are designed for cars, not people. This leads to environments that are not conducive to walking, cycling, or spending time outdoors. It also leads to a lack of accessibility for those who are unable to drive.'
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        solution: {
          layout: 'bg-pattern',
          style: {
            theme: '',
            cover: false
          },
          pattern: 'wave',
          headline: 'Our Solution',
          overline: 'Human-Centric Design',
          body: 'Our solution is human-centric design - an approach that prioritizes people over cars. We design cities that are walkable, bikeable, and accessible to all, creating environments where people can thrive.'
        },
        benefits: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'The Benefits',
          overline: 'Healthier, happier communities',
          body: 'The benefits of human-centric design are manifold - healthier, happier communities, reduced traffic congestion, improved air quality, and a better quality of life for all citizens. By prioritizing human-centric design, we can create cities that are truly designed for people.',
          items: {
            component: 'blurb',
            style: {
              theme: ''
            },
            icon: 'remove',
            overline: '',
            headline: '',
            body: ''
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'learn/environmental-protection',
      title: 'Environmental Protection | Urban Visionaries',
      description:
        'Understand our dedication to protecting the planet through sustainable urban design. Join us in creating urban environments in harmony with nature.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Environmental Protection',
          overline: 'Protecting our planet through sustainable urban design',
          body: 'At Urban Visionaries, we believe in protecting our planet through sustainable urban design. We strive to create urban environments that are not only sustainable and efficient, but also in harmony with nature.',
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        problem: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'The Problem',
            overline: 'Environmental degradation and climate change',
            body: 'Rapid urbanization is leading to environmental degradation and contributing to climate change. From air and water pollution to loss of green spaces, our cities are facing numerous environmental challenges.'
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        solution: {
          layout: 'bg-pattern',
          style: {
            theme: '',
            cover: false
          },
          pattern: 'wave',
          headline: 'Our Solution',
          overline: 'Sustainable Urban Design',
          body: 'Our solution is sustainable urban design - an approach that prioritizes the environment and creates spaces that are in harmony with nature. We incorporate green spaces, promote sustainable transportation, and use materials and designs that minimize environmental impact.'
        },
        benefits: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'The Benefits',
          overline: 'Healthier cities and a healthier planet',
          body: 'The benefits of sustainable urban design are manifold - healthier cities with clean air and green spaces, a reduction in environmental degradation, and a better quality of life for all citizens. By prioritizing sustainable urban design, we can create a better future for all.',
          items: [
            {
              component: 'blurb',
              style: {
                theme: ''
              },
              icon: 'remove',
              overline: '',
              headline: '',
              body: ''
            }
          ]
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'learn/resources',
      title: 'Resources | Urban Visionaries',
      description:
        'Discover a wealth of resources to understand more about sustainable and human-centric urban design. Stay updated, learn, and get inspired.',
      regions: {
        intro: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'page',
            headline: 'Resources',
            overline: 'Learn more about sustainable and human-centric urban design',
            body: "At Urban Visionaries, we believe in the power of education. That's why we've compiled a range of resources to help you learn more about sustainable and human-centric urban design. From blogs and webinars to guides and reports, our resources are designed to inform, inspire, and empower."
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        gallery: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          overline: '',
          headline: '',
          body: '',
          items: [
            {
              component: 'card',
              style: {
                theme: '',
                span: 2
              },
              headline: 'Blogs',
              overline: 'Stay updated with the latest trends',
              body: 'Our blogs cover a wide range of topics related to sustainable and human-centric urban design. Stay updated with the latest trends, learn about innovative solutions, and get insights from experts in the field.'
            },
            {
              component: 'card',
              style: {
                theme: '',
                span: 1
              },
              headline: 'Webinars',
              overline: 'Learn from the experts',
              body: 'Our webinars offer in-depth discussions on various topics related to sustainable and human-centric urban design. Learn from the experts, ask questions, and deepen your understanding of the field.'
            },
            {
              component: 'card',
              style: {
                theme: '',
                span: 1
              },
              headline: 'Guides',
              overline: 'Get practical guidance',
              body: "Our guides provide practical guidance on various aspects of sustainable and human-centric urban design. Whether you're a professional or a student, our guides can help you apply the principles of sustainable and human-centric urban design in your work."
            }
          ]
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'contact',
      title: 'Contact Us | Urban Visionaries',
      description:
        "Get in touch with Urban Visionaries. We're eager to connect and hear your thoughts, suggestions, or any questions you might have.",
      regions: {
        form: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'form',
            style: { theme: '' },
            headline: "Let's Connect",
            overline: 'Get in touch with us',
            body: "We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hi, we're here to listen. You can reach us by phone, email, or social media. Let's connect and work together towards a more sustainable and inclusive future.",
            inputs: [
              { required: true, label: '', id: '', type: 'text' },
              { required: true, label: '', id: '', type: 'email' },
              { required: true, label: '', id: '', type: 'textarea' }
            ],
            submit: ''
          }
        }
      }
    },
    {
      url: 'get-involved',
      title: 'Get Involved | Urban Visionaries',
      description:
        'Join our community and be a part of the change you want to see in the world. Find out how you can contribute to our mission of sustainable urban design.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Our Community',
          overline: 'Be a part of the change you want to see in the world',
          body: "At Urban Visionaries, we believe that change starts with each and every one of us. That's why we're inviting you to join our community and be a part of the change you want to see in the world.",
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        mission: {
          layout: 'center',
          style: {
            theme: '',
            cover: false
          },
          content: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Our Mission',
            overline: 'Creating sustainable and human-centric urban design',
            body: 'Our mission is to create cities that are sustainable, inclusive, and designed with people in mind. We strive to meet the needs of all citizens, ensuring that everyone has access to green spaces, clean air, and a safe, walkable environment. By getting involved, you can be a part of this mission.'
          }
        },
        ways: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'Ways to Get Involved',
          overline: 'Donate, Volunteer, Spread the Word',
          body: 'There are several ways you can get involved with Urban Visionaries. You can donate to support our projects, volunteer your time and skills, or simply spread the word about our mission. Every action counts, and together, we can make a difference.',
          items: [
            {
              component: 'card',
              style: {
                theme: '',
                span: 1
              },
              time: '',
              overline: '',
              headline: '',
              body: ''
            }
          ]
        },
        success: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Success Stories',
            overline: 'Making a Difference',
            body: 'Hear from individuals who have gotten involved with Urban Visionaries and made a difference in their communities. Their stories are a testament to the power of community action and the impact of sustainable and human-centric urban design.'
          },
          end: {
            component: 'stats',
            variant: 'grid',
            style: { theme: '' },
            overline: '',
            headline: '',
            body: '',
            items: [
              {
                headline: '',
                body: ''
              }
            ]
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join the Movement',
          overline: 'Be a part of Urban Visionaries',
          body: 'We invite you to join the movement and become a part of Urban Visionaries. By getting involved, you can help us create a sustainable and inclusive future for all. Join us today, and be a part of the change you want to see in the world.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'our-work/impact',
      title: 'Our Impact | Urban Visionaries',
      description:
        "Explore the tangible impact of our work in sustainable and human-centric urban design. Discover how we're transforming urban environments for the better.",
      regions: {
        intro: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'page',
            headline: 'Our Impact',
            overline: 'Discover the impact of our work on sustainable and human-centric urban design',
            body: "At Urban Visionaries, we're proud of the impact we've made in creating sustainable and human-centric urban environments. Discover the tangible changes we've brought about and the lives we've touched through our work."
          },
          end: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        projects: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'Our Projects',
          overline: 'Transforming urban environments',
          body: 'Our projects have transformed urban environments, making them more sustainable, inclusive, and people-friendly. From creating green spaces to promoting walkability, our projects have made a real difference in the lives of urban dwellers.',
          items: [
            {
              component: 'blurb',
              style: {
                theme: ''
              },
              icon: 'remove',
              overline: '',
              headline: '',
              body: ''
            }
          ]
        },
        numbers: {
          layout: 'start-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'stats',
            variant: 'grid',
            style: { theme: '' },
            headline: 'By the Numbers',
            overline: 'Measuring our impact',
            body: "We believe in the power of numbers to tell a story. Our impact can be seen in the number of projects we've completed, the amount of green spaces we've created, and the number of people we've reached through our work.",
            items: [
              {
                headline: '',
                body: ''
              }
            ]
          }
        },
        success: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'blockquote',
            style: {
              theme: ''
            },
            headline: 'Success Stories',
            overline: "Hear from those we've impacted",
            body: 'Hear from individuals and communities who have been positively impacted by our work. Their stories are a testament to the transformative power of sustainable and human-centric urban design.',
            quote: '',
            author: ''
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    },
    {
      url: 'our-work',
      title: 'Our Work | Urban Visionaries',
      description:
        'Delve into our projects, research, and partnerships driving sustainable and human-centric urban design. Join us in our mission for a better future.',
      regions: {
        hero: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Our Impact',
          overline: 'Creating sustainable and human-centric urban design that makes a difference',
          body: "At Urban Visionaries, we're proud of the impact we've made in creating sustainable and human-centric urban design that promotes walkability and inclusivity. Our work has helped to create a better tomorrow for everyone, by meeting the needs of all citizens while protecting the environment.",
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        },
        projects: {
          layout: 'gallery',
          style: {
            theme: '',
            cover: false,
            col: 3
          },
          headline: 'Our Projects',
          overline: 'Transforming cities, one project at a time',
          body: 'From designing public spaces to promoting sustainable transportation, our projects aim to transform the way we live in cities. We work closely with local communities, governments, and other stakeholders to ensure that our designs meet the needs of all citizens.',
          items: [
            {
              component: 'blurb',
              style: {
                theme: ''
              },
              img: { src: '', alt: '' },
              overline: '',
              headline: '',
              body: ''
            }
          ]
        },
        research: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          },
          end: {
            component: 'list',
            variant: '',
            style: { theme: '' },
            headline: 'Our Research',
            overline: 'Driving innovation through research',
            body: 'Our research focuses on finding innovative solutions to urban challenges. We study the latest trends in sustainable and human-centric urban design, and apply our findings to our projects. Our research helps us stay at the forefront of sustainable urban design.',
            icon: 'remove',
            items: [{ icon: 'remove', text: '' }]
          }
        },
        partnerships: {
          layout: 'end-heavy',
          style: {
            theme: '',
            cover: false
          },
          start: {
            component: 'text',
            style: { theme: '' },
            size: 'region',
            headline: 'Our Partnerships',
            overline: 'Collaborating for a better future',
            body: "We believe in the power of collaboration. That's why we partner with other organizations, governments, and communities to achieve our mission. Our partnerships allow us to leverage resources, share knowledge, and make a bigger impact."
          },
          end: {
            component: 'subgallery',
            variant: 'grid',
            style: { theme: '' },
            overline: '',
            headline: '',
            body: '',
            items: [
              {
                img: { src: 'wave.png', alt: 'wave' }
              },
              {
                img: { src: 'wave.png', alt: 'wave' }
              },
              {
                img: { src: 'wave.png', alt: 'wave' }
              },
              {
                img: { src: 'wave.png', alt: 'wave' }
              },
              {
                img: { src: 'wave.png', alt: 'wave' }
              },
              {
                img: { src: 'wave.png', alt: 'wave' }
              }
            ]
          }
        },
        action: {
          layout: 'bg-center',
          style: {
            theme: '',
            cover: true
          },
          headline: 'Join Us',
          overline: 'Be a part of our mission',
          body: 'We invite you to join us in our mission to create a sustainable and inclusive future. Whether you are an urban planner, a designer, a student, or a concerned citizen, there are several ways you can get involved. Donate, volunteer, or simply spread the word - every action counts.',
          btn: { label: 'Get Involved', url: '/get-involved' },
          bg: {
            component: 'img',
            style: {
              theme: '',
              ar: 'square'
            },
            src: 'wave.png',
            alt: 'wave'
          }
        }
      }
    }
  ]
}
