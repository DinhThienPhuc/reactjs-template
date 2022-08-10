/* TEXT-FIELD COMPONENT STORYBOOK
   ========================================================================== */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextField from "./text-field";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "TextField",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "TextField",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "TextField",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
