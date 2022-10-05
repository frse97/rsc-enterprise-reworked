import { CSSProperties, ReactNode } from "react";

export interface HasChildren {
  /**
   * The children to pass
   */
  children: ReactNode;
}

export interface HasClassName {
  /**
   * A way to add additional classnames
   */
  className?: string;
}

export interface HasStyle {
  /**
   * A way to add additional styles
   */
  style?: CSSProperties;
}

export interface CommonProps extends HasChildren, HasClassName, HasStyle {}
