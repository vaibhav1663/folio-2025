import { clsx } from "clsx"
import Image from "next/image"
import type { ComponentProps } from "react"
import { CustomizableTitle } from "../components/CustomizableTitle"
import { TofuPolaroid } from "../components/TofuPolaroid"
import portrait from "public/portrait.jpg"
import { Characters } from "src/components/Characters"

/**
 * An introduction section with a short bio.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Introduction({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={clsx(className, "content")} {...props}>
      <div>
        <div className="relative size-[80px]">
          <div className="highlight dark:highlight-invert absolute h-full w-full select-none rounded-full bg-gray-800/10 dark:bg-gray-100/10">
            <Image
              alt="Vaibhav Khating"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden rounded-full"
              priority
              quality={95}
              src={portrait}
              title="Vaibhav Khating"
              width="80"
            />
          </div>
          <TofuPolaroid className="bottom-[-4.35rem] right-[-3.65rem] w-[8.5rem]" />
        </div>
        <h1 className="mb-2.5 mt-5 text-2xl font-semibold text-gray-800 dark:text-white">
          Vaibhav Khating
        </h1>
        <p className="text-lg text-gray-400 dark:text-gray-450">
          Detail-obsessed Developer
        </p>
      </div>
      <div className="mb-10 mt-11 text-gray-500 dark:text-gray-350">
        <p className="my-4 max-w-[64ch] leading-loose">
          Writing the code AI can't (with the help of AI).
        </p>
        <p className="my-4 max-w-[56ch] leading-loose">
          I’m currently living in Pune, India and working on
          <a
            className="group relative ml-[-0.05em] whitespace-nowrap pl-[0.25em] pr-[0.2em] font-medium text-liveblocks-alternate focus:outline-none dark:text-liveblocks-alternate-dark"
            href="https://threejs.org/"
            rel="noreferrer"
            target="_blank"
          >
            Three.js
          </a>
          and
          <a
            className="group relative ml-[-0.05em] whitespace-nowrap pl-[0.25em] pr-[0.2em] font-medium text-liveblocks-alternate focus:outline-none dark:text-liveblocks-alternate-dark"
            href="https://nextjs.org/"
            rel="noreferrer"
            target="_blank"
          >
            Next.js
          </a>
          Projects.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
        <a
          aria-label="Twitter (or X)"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-twitter transition hover:text-twitter/50 hover:shadow-twitter/5 focus:ring-twitter/40 dark:text-twitter-dark dark:hover:text-twitter-dark/50 dark:focus:ring-twitter-dark/40"
          href="https://x.com/VaibhavKhating"
          rel="me noreferrer"
          target="_blank"
          title="Twitter (or X)"
        >
          <svg
            className=""
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>

        <a
          aria-label="GitHub"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-github transition hover:text-github/50 hover:shadow-github/5 focus:ring-github/40 dark:text-github-dark dark:hover:text-github-dark/50 dark:focus:ring-github-dark/40"
          href="https://github.com/vaibhav1663"
          rel="me noreferrer"
          target="_blank"
          title="GitHub"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          aria-label="Linkedin"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-twitter transition hover:text-twitter/50 hover:shadow-twitter/5 focus:ring-twitter/40 dark:text-twitter-dark dark:hover:text-twitter-dark/50 dark:focus:ring-twitter-dark/40"
          href="https://www.linkedin.com/in/vaibhav-khating-6b7940203/"
          rel="me noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <svg
            role="presentation"
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path
              clipRule="evenodd" fill="currentColor"
              fillRule="evenodd" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </a>
        <a
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-red-500 transition hover:text-red-500/50 hover:shadow-red-500/5 focus:ring-red-500/40 dark:text-red-400 dark:hover:text-red-400/50 dark:focus:ring-red-400/40"
          href="mailto:vaibhavkhating@gmail.com"
          title="Email"
        >
          <svg
            aria-label="Email"
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
