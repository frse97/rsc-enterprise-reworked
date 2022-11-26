import { memo, useCallback } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { colors } from "../../../shared";
import { RscButton } from "../../button";
import { RscCheckbox } from "../RscCheckbox";
import { RscInput } from "../RscInput";
import { IRscRadio, RscRadioGroup } from "../RscRadioGroup";
import { RscRange } from "../RscRange";
import { RscTextArea } from "../RscTextArea";
import "./ContactUsForm.scss";

const privateOrCompanyOptions: Omit<IRscRadio, "name">[] = [
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

const expectCollaborationOptions: Omit<IRscRadio, "name">[] = [
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
];

interface IContactUsFormData {
  name: string;
  email: string;
  privateOrCompany: "private" | "company";
  companyName?: string;
  blockchainUnderstanding?: number;
  expectCollaboration:
    | "web3Adoption"
    | "enterpriseBlockchain"
    | "awareness"
    | undefined;
  projectOrSolution?: string;
  privacyPolicy?: boolean;
}

const ContactUsForm: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<IContactUsFormData>({
    defaultValues: {
      name: "",
      email: "",
      privateOrCompany: "private",
      companyName: "",
      blockchainUnderstanding: 0,
      expectCollaboration: undefined,
      projectOrSolution: "",
      privacyPolicy: false,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IContactUsFormData> = useCallback((data) => {
    console.log("SUBMIT");
    console.log("FORM DATA", data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rsc-contact-form">
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscInput
            label="Name (*)"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscInput
            label="Email (*)"
            type="email"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Controller
        name="privateOrCompany"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscRadioGroup
            id="privateOrCompany"
            options={privateOrCompanyOptions}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            orientation="horizontal"
          />
        )}
      />
      <Controller
        name="companyName"
        control={control}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscInput
            label="What's the name of the company/brand you represent? (optional)"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Controller
        name="blockchainUnderstanding"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <RscRange
            id="blockchainUnderstanding"
            label="What's your level of understanding of the blockchain technology?"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            min={0}
            max={10}
            step={1}
            minLabel="Newbie"
            maxLabel="Expert"
          />
        )}
      />
      {/* 
        - Add option "other" and display input 
      */}
      <Controller
        name="expectCollaboration"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscRadioGroup
            id="expectCollaboration"
            label="What do you expect from a collaboration with RSC?"
            options={expectCollaborationOptions}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Controller
        name="projectOrSolution"
        control={control}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscTextArea
            label="Do you already have a project/solution in mind that you would like to discuss with us?"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <Controller
        name="privacyPolicy"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscCheckbox
            label="I acconsent to the treatment of my personal data and confirm that i rode the privacy policy"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <RscButton
        color={colors.light.callToAction}
        label="Submit"
        nativeType="submit"
        disabled={!formState.isValid}
      />
    </form>
  );
};

export default memo(ContactUsForm);
