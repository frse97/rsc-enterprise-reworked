export interface IRscRadio {
  /**
   * The identifier of the radio
   */
  id: string;
  /**
   * The label to display
   */
  label: string;
  /**
   * The name of the radio
   */
  name?: string;
  /**
   * The value of the radio
   */
  value: string;
  /**
   * A method on change
   */
  onChange?: (...event: any[]) => void;
  /**
   * A method on blur
   */
  onBlur?: (...event: any[]) => void;
  /**
   * The ref to the input
   */
  ref?: React.LegacyRef<HTMLInputElement>;
}
