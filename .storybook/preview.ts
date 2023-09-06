import '../app/globals.scss';
import type { Preview } from '@storybook/react'
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID || 'G-6K7LZ602H3', {
  gtagOptions: { 
    debug_mode: true,
    content_group: 'storybook'
  }
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      showPanel: true,
      storySort: {
        order: ['Intro', 'Pages', 'Organisms', 'Molecules', 'Atoms', '*', 'WIP'],
      },
    },
  }
}

export default preview
