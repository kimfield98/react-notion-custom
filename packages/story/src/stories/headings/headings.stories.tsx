import type { Meta, StoryObj } from "@storybook/react";
import Component from "../../lib/Notion";
import json from "./headings.json";

const blocks = json.blocks as any;

const meta: Meta<typeof Component> = {
  title: "Blocks/Headings",
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Headings: Story = {
  args: {
    title: "Headings",
    blocks: blocks,
  },
};
