export interface IRscRange {
  /**
   * The id of the range component
   */
  id: string;
  /**
   * An additional label
   */
  label?: string;
  /**
   * The name of the range component
   */
  name: string;
  /**
   * The min value of the range
   */
  min?: number;
  /**
   * The label for the min value
   */
  minLabel?: string;
  /**
   * The label for the max value
   */
  maxLabel?: string;
  /**
   * The max value of the range
   */
  max?: number;
  /**
   * The step value
   */
  step?: number;
  /**
   * The value of the range component
   */
  value?: number;
  /**
   * A method on change
   */
  onChange: (...event: any[]) => void;
  /**
   * A method on blur
   */
  onBlur: (...event: any[]) => void;
  /**
   * The ref to the input
   */
  ref: React.LegacyRef<HTMLInputElement>;
}
