import '../src/scss/main.scss';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          '❖ • Core',
          [
            'Typography',
            'Colors',
            'Gradients',
            'Shadows',
            'Blur',
            'Backdrop Blur',
            'Grid System',
            'Container',
            'Spacing',
          ],
          '❖ • Components',
          [
            'Button',
            'Checkbox',
            'Toggle',
            'Slider',
            'Tooltip',
            'Input',
            'Textarea',
          ],
          '❖ • UI Components',
          [
            'Avatar',
            'Tabs',
            'Card',
            'Modal',
            'Breadcrumbs',
            'Toast',
            'Alert',
            'Badge',
            'Table',
          ],
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      values: [
        {
          name: 'bootwind',
          value: '#F3F4F6',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
