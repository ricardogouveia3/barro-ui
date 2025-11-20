/**
 * Properties for the PostsItem component.
 */
export type PostsItemProps = {
  /**
   * The title of the post.
   */
  title: string;
  /**
   * A brief description or excerpt of the post.
   */
  description: string;
  /**
   * The URL the post links to.
   */
  link: string;
  /**
   * The source URL of the post's image.
   */
  imgSrc: string;
  /**
   * Alt text for the image. Defaults to "Auto generated description: {title}".
   */
  imgAlt?: string;
  /**
   * Whether to enable the animated border effect on hover.
   * @default false
   */
  animatedBorder?: boolean;
};
