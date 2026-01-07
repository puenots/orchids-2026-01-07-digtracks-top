"use client";

import NextImage, { ImageProps } from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface FadeInImageProps extends ImageProps {
  containerClassName?: string;
  showBlur?: boolean;
  showSkeleton?: boolean;
}

export function FadeInImage({ 
  className, 
  containerClassName,
  showBlur = true,
  showSkeleton = true,
  style, 
  onLoad,
  ...props 
}: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images which might not trigger onLoad
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div 
      className={cn(
        "overflow-hidden", 
        // Only show background when not loaded and use very subtle color
        !isLoaded && showSkeleton && "bg-zinc-100/10 dark:bg-zinc-900/10",
        props.fill ? "absolute inset-0" : "relative inline-block",
        containerClassName
      )}
    >
      <AnimatePresence>
        {!isLoaded && showSkeleton && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0 bg-zinc-200/20 dark:bg-zinc-800/20 animate-pulse"
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(props.fill && "h-full w-full")}
      >
        <NextImage
          {...props}
          ref={imgRef}
          style={style}
          className={cn(
            // Only force full size if fill is present
            props.fill && "h-full w-full",
            "transition-none", 
            className
          )}
          onLoad={(e) => {
            setIsLoaded(true);
            onLoad?.(e);
          }}
        />
      </motion.div>
    </div>
  );
}
