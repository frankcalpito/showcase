import '../app/globals.scss';
import type { Preview } from '@storybook/react'
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.GA_ID || '', {
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
    },
  }
}

export default preview
