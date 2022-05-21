import { Grid } from "@mui/material";
import { ComponentStory, Meta } from "@storybook/react";
import NFTCard from "../components/NFTCard";
import { faker } from "@faker-js/faker";

export default {
  title: "Features/NFTCard",
  component: NFTCard,
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

const nfts = new Array(10).fill(0).map(() => ({
  name: faker.name.findName(),
  imageURL: faker.image.people(),
  contractAddress: faker.finance.ethereumAddress(),
  backgroundImage: faker.image.nature(),
}));

export const CardGrid = () => (
  <Grid container spacing={3}>
    {nfts.map(({ name, imageURL, contractAddress, backgroundImage }) => (
      <Grid item xs key={contractAddress}>
        <NFTCard
          name={name}
          imageURL={imageURL}
          contractAddress={contractAddress}
          backgroundImage={backgroundImage}
        />
      </Grid>
    ))}
  </Grid>
);
