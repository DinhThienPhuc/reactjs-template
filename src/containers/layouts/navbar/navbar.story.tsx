/* LAYOUT NAVBAR COMPONENT STORYBOOK
   ========================================================================== */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navbar from "./navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Navbar",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Navbar",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Navbar",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Navbar",
};
