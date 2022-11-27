import { IRscRadio } from "../RscRadioGroup";

export const privateOrCompanyOptions: Omit<IRscRadio, "name">[] = [
  {
    id: "private",
    label: "Private",
    value: "private",
  },
  {
    id: "company",
    label: "Company",
    value: "company",
  },
];

export const expectCollaborationOptions: Omit<IRscRadio, "name">[] = [
  {
    id: "web3Adoption",
    label: "Learn more about Web3Adoption",
    value: "web3Adoption",
  },
  {
    id: "enterpriseBlockchain",
    label: "Integrate Enterprise Blockchain in my Corporation",
    value: "enterpriseBlockchain",
  },
  {
    id: "awareness",
    label: "Blockchain awareness",
    value: "awareness",
  },
  {
    id: "other",
    label: "Project/Solution or other",
    value: "other",
  },
];
