/* LAYOUT FOOTER COMPONENT STORYBOOK
   ========================================================================== */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Footer from "./footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Footer",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Footer",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Footer",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Footer",
};
