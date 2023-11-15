import React, { useEffect, RefObject } from "react";

export const useOnClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
 useEffect(() => {
   const handleClickOutside = (event: MouseEvent | TouchEvent) => {
     if (ref.current && !ref.current.contains(event.target as Node)) {
       callback()
     }
   }

   const handleEscape = (event: KeyboardEvent) => {
     if (event.key === "Escape") {
       callback()
     }
   }

   document.addEventListener("mousedown", handleClickOutside);
   document.addEventListener("keydown", handleEscape);

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
     document.removeEventListener("keydown", handleEscape);
   };
 }, [ref, callback]);
};