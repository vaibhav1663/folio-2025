import type { BrightProps } from "bright"
import { Code as Bright } from "bright"
import { clsx } from "clsx"
import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import elementsFood from "public/visuals/elements/food.png"
import elementsMusic from "public/visuals/elements/music.png"
import framerMotion from "public/visuals/framer-motion/static.png"
import liveblocksEmojiPicker from "public/visuals/liveblocks/emoji-picker.png"
import liveblocksInbox from "public/visuals/liveblocks/inbox.png"
import liveblocksMentionSuggestions from "public/visuals/liveblocks/mention-suggestions.png"
import liveblocksThread from "public/visuals/liveblocks/thread.png"
import masterThesis from "public/visuals/master/thesis.png"
import { withExternalCdn } from "src/utils/with-external-cdn"

interface BrowserProps extends Omit<ComponentProps<"div">, "title"> {
  /**
   * Whether the window is a popup.
   */
  popup?: boolean

  /**
   * The window's current URL or title.
   */
  title?: ReactNode
}

interface CodeProps extends Omit<ComponentProps<"div">, "title"> {
  /**
   * The editor's content.
   */
  code?: string

  /**
   * The editor's language.
   */
  language?: BrightProps["lang"]

  /**
   * The window's current title.
   */
  title?: ReactNode
}

interface PhoneProps extends ComponentProps<"div"> {
  /**
   * The phone's direction.
   */
  direction: "left" | "right"
}

/**
 * A Safari-like browser window.
 *
 * @param props - A set of `div` props.
 * @param [props.popup] - Whether the window is a popup.
 * @param [props.title] - The window's current URL or title.
 * @param [props.children] - The window's content.
 * @param [props.className] - A list of one or more classes.
 */
function Browser({
  title,
  popup,
  children,
  className,
  ...props
}: BrowserProps) {
  return (
    <div
      className={clsx(
        className,
        "browser dark:highlight-invert overflow-hidden rounded-lg bg-gray-50/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200 dark:bg-gray-800/80"
      )}
      {...props}
    >
      <div
        className={clsx(
          "browser-header relative grid flex-none items-center gap-2",
          popup ? "h-5 px-1.5" : "h-8 px-3"
        )}
      >
        <div className={clsx("flex", popup ? "gap-1" : "gap-1.5")}>
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
        </div>
        {title &&
          (popup ? (
            <div className="text-center text-3xs text-black/40 dark:text-white/40">
              {title}
            </div>
          ) : (
            <div className="flex h-5 select-none items-center justify-center rounded bg-black/5 px-3 text-3xs text-black/40 dark:bg-white/10 dark:text-white/40">
              <span className="max-w-full truncate text-center leading-none">
                {title}
              </span>
            </div>
          ))}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

/**
 * A code editor.
 *
 * @param props - A set of `div` props.
 * @param [props.title] - The window's current title.
 * @param [props.code] - The editor's content.
 * @param [props.language] - The editor's language.
 * @param [props.className] - A list of one or more classes.
 */
function Code({ title, code, language, className, ...props }: CodeProps) {
  return (
    <div
      className={clsx(
        className,
        "code highlight-invert overflow-hidden rounded-lg bg-gray-800/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200"
      )}
      {...props}
    >
      <div className="code-header relative grid h-5 flex-none items-center gap-2 px-1.5">
        <div className="flex gap-1">
          <div className="aspect-square w-2 rounded-full bg-white/20" />
          <div className="aspect-square w-2 rounded-full bg-white/20" />
          <div className="aspect-square w-2 rounded-full bg-white/20" />
        </div>
        {title && (
          <div className="text-center text-3xs text-white/40">{title}</div>
        )}
      </div>
      <div aria-hidden className="flex-1">
        <Bright
          className="bright"
          lang={language}
          lineNumbers
          theme="poimandres"
        >
          {code}
        </Bright>
      </div>
    </div>
  )
}

/**
 * An iPhone-like device.
 *
 * @param props - A set of `div` props.
 * @param props.direction - The phone's direction.
 * @param [props.children] - The phone's content.
 * @param [props.className] - A list of one or more classes.
 */
function Phone({ direction, children, className, ...props }: PhoneProps) {
  return (
    <div
      className={clsx(
        className,
        "phone dark:highlight-invert bg-white/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200 before:absolute before:inset-0 before:rounded-[inherit] before:shadow-phone dark:bg-gray-800/80 dark:before:shadow-phone-invert",
        `phone-${direction}`
      )}
      {...props}
    >
      <div className="phone-screen-container absolute drop-shadow-phone">
        <svg className="absolute" height={0} role="presentation" width={0}>
          <clipPath clipPathUnits="objectBoundingBox" id="phone-mask">
            <path d="M0.779,0.011 V0.011 c0,0.011,-0.019,0.026,-0.062,0.026 h-0.432 C0.241,0.037,0.222,0.022,0.222,0.011 v0 c0,-0.005,0,-0.011,-0.02,-0.011 H0.116 C0.043,0,0,0.02,0,0.053 v0.893 C0,0.98,0.043,1,0.116,1 h0.769 C0.957,1,1,0.98,1,0.947 V0.053 C1,0.02,0.957,0,0.884,0 h-0.085 C0.779,0,0.779,0.005,0.779,0.011" />
          </clipPath>
        </svg>
        <div className="phone-screen absolute inset-0">{children}</div>
      </div>
    </div>
  )
}

/**
 * An Apple Vision Pro-like device.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The headset's content.
 * @param [props.className] - A list of one or more classes.
 */
function Headset({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(className, "headset will-change-transform")}
      {...props}
    >
      <div className="headset-screen absolute inset-0">
        <svg height={0} role="presentation" width={0}>
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="headset-mask">
              <path d="M0.299217 0.016482C0.198539 0.033167 0.089533 0.07584 0.035864 0.243777C-0.023752 0.428302 -0.006564 0.706696 0.06955 0.866579C0.145208 1.02629 0.270395 1.03794 0.365784 0.92305C0.401042 0.873963 0.448941 0.789116 0.5 0.789116C0.551067 0.789116 0.598965 0.874015 0.634216 0.92305C0.725134 1.03794 0.850321 1.02629 0.925979 0.866579C1.00035 0.706699 1.01941 0.428299 0.964219 0.243777C0.912177 0.075841 0.800367 0.033168 0.70014 0.016482C0.567707 -0.005477 0.431516 -0.005477 0.299217 0.016482Z" />
            </clipPath>
          </defs>
        </svg>
        <img
          aria-hidden
          className="pointer-events-none absolute z-10 h-full w-full mix-blend-overlay"
          height="960"
          src="/various/headset-reflections.png"
          width="540"
        />
        <img
          aria-hidden
          className="pointer-events-none absolute z-10 h-full w-full opacity-50"
          height="960"
          src="/various/headset-reflections.png"
          width="540"
        />
        {children}
      </div>
    </div>
  )
}

/**
 * A book.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The book's cover.
 * @param [props.className] - A list of one or more classes.
 */
function Book({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, "book")} {...props}>
      <div className="book-back-cover absolute bg-current shadow-floaty" />
      <div className="book-pages absolute z-20" />
      <div className="book-cover absolute inset-0 z-20 overflow-hidden bg-current">
        {children}
      </div>
    </div>
  )
}

const liveblocksPrimitivesCode = `
import {
  Composer,
  Comment,
} from "@liveblocks/react-comments/primitives"

function CustomComposer(props) {
  return (
    <Composer.Form {...props}>
      <Composer.Editor
        components={{
          Mention,
          MentionSuggestions,
          Link,
        }}
      />
      <Composer.Submit>Create thread</Composer.Submit>
    </Composer.Form>
  );
}`.trim()

/**
 * A section displaying a selection of projects.
 *
 * @param props - A set of `section` props.
 */
export function Work(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content content-lg">
        <div className="relative z-10 mb-5 p-4 sm:p-10 sm:px-8 flex flex-col-reverse rounded-lg bg-gray-950 shadow-xl shadow-gray-950/10 dark:bg-gray-100 dark:shadow-gray-100/10 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 selection:bg-white/30 dark:selection:bg-gray-900/30 sm:basis-1/2 sm:mr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-gray-900">
              Hindustan Times
            </h3>
            <p className="leading-relaxed text-gray-100 dark:text-gray-900/80">
              My journey started when{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://thepipal.in"
                target="_blank"
                rel="noreferrer"
              >
                The Pipal Collective
              </a>{" "}
              approached me with a project for{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://www.hindustantimes.com"
                target="_blank"
                rel="noreferrer"
              >
                Hindustan Times
              </a>, where they needed a complete refresh of their existing website and school portal for the national-level{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://hindustanolympiad.in"
                target="_blank"
                rel="noreferrer"
              >
                Hindustan Olympiad
              </a>. We built the application using{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://www.mongodb.com"
                target="_blank"
                rel="noreferrer"
              >
                MongoDB
              </a>, deployed on{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://aws.amazon.com"
                target="_blank"
                rel="noreferrer"
              >
                AWS
              </a>, which successfully handled traffic from over{" "}
              <span className="font-medium">600,000 students</span> across India.
            </p>

          </div>
          <div className="relative flex flex-1 items-center justify-center pb-4 sm:pb-0 sm:basis-1/2">
            <video
              autoPlay
              className="h-full w-full border border-gray-800/10 rounded-lg object-cover"
              loop
              muted
              playsInline
              poster="/visuals/ht/poster.jpg"
              preload="metadata"
              src={withExternalCdn(
                "/visuals/ht/preview.mp4"
              )}
            />
          </div>
        </div>
        <div className="relative z-10 mb-5 p-4 sm:p-10 sm:px-8 flex flex-col-reverse rounded-lg bg-gray-950 shadow-xl shadow-gray-950/10 dark:bg-gray-100 dark:shadow-gray-100/10 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 selection:bg-white/30 dark:selection:bg-gray-900/30 sm:basis-1/2 sm:mr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-gray-900">
              Imprints
            </h3>
            <p className="leading-relaxed text-gray-100 dark:text-gray-900/80">
              I collaborated with{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://imprint.com/"
                target="_blank"
                rel="noreferrer"
              >
                Imprints
              </a>{" "}
              on a unique project where we built a web application for{" "}
              <span className="font-medium">3D cardboard box visualization</span>. The tool allowed users to generate live previews of 3D box designs from 2D templates using{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://webglfundamentals.org"
                target="_blank"
                rel="noreferrer"
              >
                WebGL
              </a>{", "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://threejs.org"
                target="_blank"
                rel="noreferrer"
              >
                Three.js
              </a>
              {" "}
              and{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="http://fabricjs.com"
                target="_blank"
                rel="noreferrer"
              >
                Fabric.js
              </a>, significantly improving the user experience by providing an interactive and accurate visualization tool.
            </p>

          </div>
          <div className="relative flex flex-1 items-center justify-center pb-4 sm:pb-0 sm:basis-1/2">
            <video
              autoPlay
              className="h-full w-full border border-gray-800/10 rounded-lg object-cover"
              loop
              muted
              playsInline
              poster="/visuals/imprints/poster.jpg"
              preload="metadata"
              src={withExternalCdn(
                "/visuals/imprints/preview.mp4"
              )}
            />
          </div>
        </div>

        <div className="relative z-10 mb-5 p-4 sm:p-10 sm:px-8 flex flex-col-reverse rounded-lg bg-gray-950 shadow-xl shadow-gray-950/10 dark:bg-gray-100 dark:shadow-gray-100/10 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 selection:bg-white/30 dark:selection:bg-gray-900/30 sm:basis-1/2 sm:mr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-gray-900">
              Blue Gulf Boats
            </h3>
            <p className="leading-relaxed text-gray-100 dark:text-gray-900/80">
              I also worked with{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://bluegulfboats.com"
                target="_blank"
                rel="noreferrer"
              >
                Blue Gulf Boats
              </a>, where I rebuilt their website using{" "}
              <span className="font-medium">HTML, CSS, and JavaScript</span>, leading to significant improvements in performance and user experience. Additionally, I developed interactive{" "}
              <span className="font-medium">3D boat configurators</span> powered by{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://webglfundamentals.org"
                target="_blank"
                rel="noreferrer"
              >
                WebGL
              </a>{" "}
              and{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-gray-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-gray-100/50 focus:ring-gray-100/30 dark:decoration-gray-900/20 dark:hover:decoration-gray-900/40 dark:focus:ring-gray-900/20"
                href="https://threejs.org"
                target="_blank"
                rel="noreferrer"
              >
                Three.js
              </a>, allowing users to explore and customize boat models in a highly immersive and visual way.
            </p>

          </div>
          <div className="relative flex flex-1 items-center justify-center pb-4 sm:pb-0 sm:basis-1/2">
            <video
              autoPlay
              className="h-full w-full border border-gray-800/10 rounded-lg object-cover"
              loop
              muted
              playsInline
              poster="/visuals/liveblocks.io/marketing.jpg"
              preload="metadata"
              src={withExternalCdn(
                "/visuals/liveblocks.io/marketing.mp4"
              )}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
