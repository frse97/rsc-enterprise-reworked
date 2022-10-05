import { HasChildren } from "../../models";
import { IRscBlockQuote } from "./RscTextContainers.types";

/**
 * Defines independent, self-contained content.
 * Example: <article> <h2>Title</h2> <p>Description text</p> </article>
 */
export const RscArticle: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <article>{children}</article>;
};

/**
 * Defines a section that is quoted from another source
 * Example: <blockquote></blockquote>
 */
export const RscBlockQuote: React.FC<IRscBlockQuote> = (props) => {
  const { cite, children } = props;
  return <blockquote cite={cite}>{children}</blockquote>;
};

/**
 * Defines the title of a work
 * Example: <p><cite>Title</cite> by ... </p>
 */
export const RscCite: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <cite>{children}</cite>;
};

/**
 * Defines a piece of computer code
 */
export const RscCode: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <code>{children}</code>;
};
/**
 * Defines a sample output from a computer program
 */
export const RscSamp: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <samp>{children}</samp>;
};
/**
 * Defines a keyboard input
 */
export const RscKeyboardInput: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <kbd>{children}</kbd>;
};
/**
 * Defines a text variable
 */
export const RscVarText: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <var>{children}</var>;
};
/**
 * Defines a preformatted text
 */
export const RscPreText: React.FC<HasChildren> = (props) => {
  const { children } = props;
  return <pre>{children}</pre>;
};
