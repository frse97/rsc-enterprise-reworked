import { HasChildren } from "../../models";

export interface IRscBlockQuote extends HasChildren {
  /**
   * The citation source
   */
  cite?: string;
}
