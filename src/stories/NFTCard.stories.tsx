import { ComponentStory } from "@storybook/react";
import NFTCard from "../components/NFTCard";

export default {
  title: "Features/NFTCard",
  component: NFTCard,
};

const Template = (args) => <NFTCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Bored Ape Yacht Club",
  imageURL: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
};
