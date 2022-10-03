import { HasChildren } from "../models";

interface IRscBlockQuote extends HasChildren {
  /**
   * The citation source
   */
  cite?: string;
}

/**
 * Defines independent, self-contained content.
 * Example: <article> <h2>Title</h2> <p>Description text</p> </article>
 */
export const RscArticle: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <article>{content}</article>;
};

/**
 * Defines a section that is quoted from another source
 * Example: <blockquote></blockquote>
 */
export const RscBlockQuote: React.FC<IRscBlockQuote> = (props) => {
  const { cite, content } = props;
  return <blockquote cite={cite}>{content}</blockquote>;
};

/**
 * Defines the title of a work
 * Example: <p><cite>Title</cite> by ... </p>
 */
export const RscCite: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <cite>{content}</cite>;
};

/**
 * Defines a piece of computer code
 */
export const RscCode: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <code>{content}</code>;
};
/**
 * Defines a sample output from a computer program
 */
export const RscSamp: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <samp>{content}</samp>;
};
/**
 * Defines a keyboard input
 */
export const RscKeyboardInput: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <kbd>{content}</kbd>;
};
/**
 * Defines a text variable
 */
export const RscVarText: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <var>{content}</var>;
};
/**
 * Defines a preformatted text
 */
export const RscPreText: React.FC<HasChildren> = (props) => {
  const { content } = props;
  return <pre>{content}</pre>;
};
