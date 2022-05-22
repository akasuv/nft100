import faker from "@faker-js/faker";
import CollectionGrid from "../components/CollectionGrid";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/CollectionGrid",
  component: CollectionGrid,
} as ComponentMeta<typeof CollectionGrid>;

const Template: ComponentStory<typeof CollectionGrid> = (args) => (
  <CollectionGrid {...args} />
);

export const Default = Template.bind({});
const nfts = new Array(10).fill(0).map(() => ({
  name: faker.name.findName(),
  imageURL: faker.image.people(),
  contractAddress: faker.finance.ethereumAddress(),
  backgroundImage: faker.image.nature(),
}));

Default.args = {
  collections: nfts,
};
