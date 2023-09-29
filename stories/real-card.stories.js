import { html } from 'lit';
import '../src/real-card.js';

export default {
  title: 'RealCard',
  component: 'real-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <real-card
      style="--real-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </real-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
