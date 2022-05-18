import Button from "../components/Button";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  children: "Clickx",
};
