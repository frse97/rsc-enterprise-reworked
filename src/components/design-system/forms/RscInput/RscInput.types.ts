export interface IRscInput {
  /**
   * The aria property for invalidation
   */
  ariaInvalid?: boolean;
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
   * The type of the input
   * @default 'text'
   */
  type?: "text" | "email";
  /**
   * The name of the input
   */
  name?: string;
}
