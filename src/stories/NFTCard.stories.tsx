import { ComponentStory, Meta } from "@storybook/react";
import NFTCard from "../components/NFTCard";

export default {
  title: "Features/NFTCard",
  component: NFTCard,
} as Meta;

const Template = (args: any) => <NFTCard {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  name: "Bored Ape Yacht Club",
  imageURL: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
};
