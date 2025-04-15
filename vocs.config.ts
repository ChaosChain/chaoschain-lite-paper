import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'ChaosChain',
  description: 'The future of governance is a computational arms race',
  
  rootDir: './docs',
  basePath: '',
  
  // Configure Vite to allow external hosts
  vite: {
    server: {
      host: true,
      cors: true,
      hmr: { clientPort: 443 },
      allowedHosts: ['*']
    }
  },
  
  logoUrl: '/chaoschain-logo.png',
  iconUrl: '/favicon.ico',
  
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/chaoschain'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/thechaoschain'
    }
  ],
  
  sidebar: [
      {
        text: 'Lite Paper',
        items: [
          {
            text: 'Vision and Mission',
            link: '/vision'
          },
          {
            text: 'Approach',
            items: [
              {
                text: 'Ethereum Agentic Core Development',
                link: '/approach/ethereum-core-dev'
              },
              {
                text: 'Customizable L2s Launchpad',
                link: '/approach/l2-launchpad'
              },
              {
                text: 'Core Dev DAO Support',
                link: '/approach/dao-support'
              }
            ]
          },
          {
            text: 'Research Questions',
            link: '/research'
          }
        ]
      }
    ],
  
  theme: {
    accentColor: '#7C3AED',
    colorScheme: 'system'
  }
}) 