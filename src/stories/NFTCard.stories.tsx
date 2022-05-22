import { Grid } from "@mui/material";
import { ComponentStory, Meta } from "@storybook/react";
import NFTCard from "../components/NFTCard";
import { faker } from "@faker-js/faker";

export default {
  title: "Features/NFTCard",
  component: NFTCard,
  argTypes: {
    name: {
      description: "Project Name",
    },
    imageURL: {
      description: "Project Profile URL",
    },
    backgroundImage: {
      description: "Project Background Image URL",
    },
    contractAddress: {
      description: "Project Contract Address",
    },
  },
} as Meta;

const Template = (args: any) => <NFTCard {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  name: "Bored Ape Yacht Club",
  imageURL: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
  contractAddress: "0x49cf6f5d44e7...053f30ada28b",
  backgroundImage:
    "https://img.seadn.io/files/00e5b31155563c68db56ef79eacbb364.png?auto=format&h=720&w=720",
};

export const Hovering: any = Template.bind({});
Hovering.args = {
  name: "Bored Ape Yacht Club",
  imageURL: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
  contractAddress: "0x49cf6f5d44e7...053f30ada28b",
  backgroundImage:
    "https://img.seadn.io/files/00e5b31155563c68db56ef79eacbb364.png?auto=format&h=720&w=720",
};
