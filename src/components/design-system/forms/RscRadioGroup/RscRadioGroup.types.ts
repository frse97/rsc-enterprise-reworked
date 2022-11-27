import { IRscRadio } from "./components";

export interface IRscRadioGroup {
  /**
   * The id of the radio group
   */
  id: string;
  /**
   * The name of the radio group
   */
  name: string;
  /**
   * An optional label for the radio group
   */
  label?: string;
  /**
   * The options to display
   */
  options?: Omit<IRscRadio, "name">[];
  /**
   * A method on change
   */
  onChange: (...event: any[]) => void;
  /**
   * A method on blur
   */
  onBlur: (...event: any[]) => void;
  /**
   * The radio orientation
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical";
}
