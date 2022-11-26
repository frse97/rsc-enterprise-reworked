export interface IRscCheckbox {
  /**
   * A method to change the input
   */
  onChange: (...event: any[]) => void;
  /**
   * A method on blur
   */
  onBlur: (...event: any[]) => void;
  /**
   * The label of the input
   */
  label?: string;
  /**
   * The name of the input
   */
  name?: string;
  /**
   * The ref to the input
   */
  ref: React.LegacyRef<HTMLInputElement>;
}
