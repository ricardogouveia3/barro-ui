import type { PostsItemProps } from './PostItem.types.ts';
import { motion } from 'framer-motion';
import { animatedBorderMotionProps } from '../../layout/Animation.tsx';
import { useState } from 'react';

export default function PostsItem({
  title,
  description,
  link,
  imgSrc,
  imgAlt = `Auto generated description: ${title}`,
  animatedBorder = false,
}: Readonly<PostsItemProps>) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <article>
      <motion.a
        href={link}
        target="_blank"
        onHoverStart={() => setShowBorder(true)}
        onHoverEnd={() => setShowBorder(false)}
        onFocus={() => setShowBorder(true)}
        onBlur={() => setShowBorder(false)}
        className="border-box default-border hover-background relative flex w-full flex-col items-center overflow-hidden rounded-lg p-px md:flex-row"
      >
        {showBorder && animatedBorder && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate="animate"
            {...animatedBorderMotionProps}
          />
        )}

        <div className="border-box smooth-noisy-background hover-background relative z-10 overflow-hidden rounded-md">
          <div
            className={`above-noise-content-background hover-background flex h-full w-full flex-col sm:min-h-40 md:h-32 md:flex-row`}
          >
            <picture className="h-48 w-full object-cover md:h-full md:w-auto md:max-w-52">
              <source
                srcSet={imgSrc}
                type="image/jpg"
              />
              <img
                src={imgSrc}
                alt={imgAlt}
                decoding="async"
                loading="lazy"
                className={`h-48 w-full object-cover md:h-full md:w-auto md:max-w-52`}
                width={420}
                height={195}
              />
            </picture>
            <div className="z-10 flex flex-col justify-center gap-2 p-4 py-3 leading-normal">
              <h4 className="default-text-color text-base font-bold">{title}</h4>
              <p className="smooth-text-color text-sm">{description}</p>
            </div>
          </div>
        </div>
      </motion.a>
    </article>
  );
}
