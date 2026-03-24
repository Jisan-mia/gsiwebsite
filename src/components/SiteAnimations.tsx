"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

function registerPlugins() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}

export default function SiteAnimations() {
  useEffect(() => {
    registerPlugins();

    const cleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap='float']")
        .forEach((element, index) => {
          gsap.to(element, {
            y: -14 - index * 2,
            duration: 2.8 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap='pulse']")
        .forEach((element) => {
          gsap.to(element, {
            scale: 1.04,
            opacity: 0.9,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap='parallax']")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.01,
            duration: 0.35,
            ease: "power2.out",
            boxShadow: "0 28px 60px rgba(2, 8, 23, 0.38)",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }, document.body);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
