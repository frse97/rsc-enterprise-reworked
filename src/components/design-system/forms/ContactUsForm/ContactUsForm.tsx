import { memo, useCallback } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { colors } from "../../../shared";
import { RscButton } from "../../button";
import { FormErrorView } from "../FormErrorView";
import { RscCheckbox } from "../RscCheckbox";
import { RscInput } from "../RscInput";
import { RscRadioGroup } from "../RscRadioGroup";
import { RscRange } from "../RscRange";
import { RscTextArea } from "../RscTextArea";
import {
  expectCollaborationOptions,
  privateOrCompanyOptions,
} from "./ContactUsForm.data";
import "./ContactUsForm.scss";
import { IContactUsFormData } from "./ContactUsForm.types";

const ContactUsForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactUsFormData>({
    defaultValues: {
      name: "",
      email: "",
      privateOrCompany: undefined,
      companyName: "",
      blockchainUnderstanding: 0,
      expectCollaboration: undefined,
      projectOrSolution: "",
      privacyPolicy: false,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IContactUsFormData> = useCallback((data) => {
    alert(
      `Name: ${data.name}, Email: ${data.email}, Type: ${data.privateOrCompany}, Blockchain understanding: ${data.blockchainUnderstanding}, Collaboration: ${data.expectCollaboration}, Idea: ${data.projectOrSolution}, PrivacyPolicy: ${data.privacyPolicy}`
    );
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rsc-contact-form">
      <div className="nameEmail">
        <div className="field">
          {errors.name && <FormErrorView message={errors.name.message} />}
          <Controller
            name="name"
            control={control}
            rules={{ required: { message: "Name is required", value: true } }}
            render={({ field: { onChange, onBlur, name, ref } }) => (
              <RscInput
                ariaInvalid={errors.name ? true : false}
                label="Name (*)"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                style={{
                  marginTop: !errors.name && errors.email ? "32px" : "0px",
                }}
              />
            )}
          />
        </div>
        <div className="field">
          {errors.email && <FormErrorView message={errors.email.message} />}
          <Controller
            name="email"
            control={control}
            rules={{
              required: { message: "Email is required", value: true },
              pattern: {
                message: "Please enter a valid email",
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            }}
            render={({ field: { onChange, onBlur, name, ref } }) => (
              <RscInput
                ariaInvalid={errors.email ? true : false}
                label="Email (*)"
                type="email"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                style={{
                  marginTop: !errors.email && errors.name ? "32px" : "0px",
                }}
              />
            )}
          />
        </div>
      </div>
      {errors.privateOrCompany && (
        <FormErrorView message={errors.privateOrCompany.message} />
      )}
      <Controller
        name="privateOrCompany"
        control={control}
        rules={{
          required: { message: "Please select an option below", value: true },
        }}
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
      {watch("privateOrCompany") === "company" && (
        <Controller
          name="companyName"
          control={control}
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <RscInput
              label="What's the name of the company/brand you represent?"
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          )}
        />
      )}
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

      {errors.expectCollaboration && (
        <FormErrorView message={errors.expectCollaboration.message} />
      )}
      <Controller
        name="expectCollaboration"
        control={control}
        rules={{
          required: { message: "Please select an option below", value: true },
        }}
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
      {watch("expectCollaboration") === "other" && errors.projectOrSolution && (
        <FormErrorView message={errors.projectOrSolution.message} />
      )}
      {watch("expectCollaboration") === "other" && (
        <Controller
          name="projectOrSolution"
          control={control}
          rules={{
            required: { message: "Please add a description", value: true },
          }}
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <RscTextArea
              label="What other collaboration idea do you have? Please describe the project/solution that you would like to discuss with us here"
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          )}
        />
      )}
      {errors.privacyPolicy && (
        <FormErrorView message={errors.privacyPolicy.message} />
      )}
      <Controller
        name="privacyPolicy"
        control={control}
        rules={{
          required: {
            message:
              "It is necessary that you accept the treatment of your data to confirm the form",
            value: true,
          },
        }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <RscCheckbox
            label="I acconsent to the treatment of my personal data and confirm that i read the privacy policy"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
      <div className="submit-container">
        <RscButton
          color={colors.light.callToAction}
          label="Submit"
          nativeType="submit"
        />
      </div>
    </form>
  );
};

export default memo(ContactUsForm);
