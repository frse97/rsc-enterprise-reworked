export interface IContactUsFormData {
  name: string;
  email: string;
  privateOrCompany: "private" | "company";
  companyName?: string;
  blockchainUnderstanding?: number;
  expectCollaboration:
    | "web3Adoption"
    | "enterpriseBlockchain"
    | "awareness"
    | "other";
  projectOrSolution?: string;
  privacyPolicy?: boolean;
}
