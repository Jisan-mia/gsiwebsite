"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function registerPlugins() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export default function SiteAnimations() {
  useEffect(() => {
    registerPlugins();

    const cleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(
          ".glossy-shell",
          { y: -24, autoAlpha: 0, scale: 0.98 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.9 },
        )
        .fromTo(
          "#hero-heading",
          { y: 32, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9 },
          "-=0.45",
        )
        .fromTo(
          "#main-content section:first-of-type .animate-on-scroll",
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 },
          "-=0.55",
        );

      gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((element) => {
        if (element.closest("section")?.matches("#main-content section:first-of-type")) {
          return;
        }

        const variant = element.dataset.gsapReveal;
        const fromVars =
          variant === "left"
            ? { autoAlpha: 0, x: -48, scale: 0.985 }
            : variant === "right"
              ? { autoAlpha: 0, x: 48, scale: 0.985 }
              : { autoAlpha: 0, y: 36, scale: 0.985 };

        gsap.fromTo(element, fromVars, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='float']").forEach((element, index) => {
        gsap.to(element, {
          y: -16 - index * 3,
          x: index % 2 === 0 ? 6 : -6,
          duration: 3.2 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='pulse']").forEach((element) => {
        gsap.to(element, {
          scale: 1.05,
          opacity: 0.9,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -10, xPercent: -2 },
          {
            yPercent: 10,
            xPercent: 2,
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

      gsap.utils.toArray<HTMLElement>(".gsap-nav-item").forEach((item) => {
        const enter = () => gsap.to(item, { y: -2, duration: 0.22, ease: "power2.out" });
        const leave = () => gsap.to(item, { y: 0, duration: 0.22, ease: "power2.out" });
        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-magnetic").forEach((element) => {
        const strength = element.dataset.magneticStrength ? Number(element.dataset.magneticStrength) : 0.22;

        const move = (event: MouseEvent) => {
          const bounds = element.getBoundingClientRect();
          const x = event.clientX - bounds.left - bounds.width / 2;
          const y = event.clientY - bounds.top - bounds.height / 2;
          gsap.to(element, {
            x: x * strength,
            y: y * strength,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "elastic.out(1, 0.45)",
          });
        };

        element.addEventListener("mousemove", move);
        element.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          element.removeEventListener("mousemove", move);
          element.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card) => {
        const move = (event: MouseEvent) => {
          const bounds = card.getBoundingClientRect();
          const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
          const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
          gsap.to(card, {
            rotationY: offsetX * 9,
            rotationX: offsetY * -9,
            y: -10,
            transformPerspective: 1200,
            transformOrigin: "center",
            duration: 0.35,
            ease: "power2.out",
            boxShadow: "0 28px 60px rgba(2, 8, 23, 0.42)",
          });
        };

        const leave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "transformPerspective,transformOrigin",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
          });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray<HTMLElement>(".glossy-orb").forEach((orb, index) => {
        gsap.to(orb, {
          rotate: index % 2 === 0 ? 14 : -14,
          scale: 1.08,
          duration: 7 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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
