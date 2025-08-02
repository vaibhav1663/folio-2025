import { clsx } from "clsx"
import type { ComponentProps } from "react"

/**
 * A section listing roles and degrees.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Experience({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={clsx(className, "content content-lg")} {...props}>
      <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
        Experience
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-gray-500 dark:text-gray-350">
        The places I’ve worked and studied at.
      </p>
      <ul className="mt-8">

        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="overflow-hidden focusable aspect-square w-13 h-13 flex-none cursor-pointer rounded-md bg-framer/10 text-framer transition hover:bg-framer/20 focus:ring-framer/40 dark:bg-framer-dark/20 dark:text-framer-dark dark:hover:bg-framer-dark/30 dark:focus:ring-framer-dark/40"
            href="https://www.hilti.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="https://nvastudio.com/wp-content/uploads/2005/07/HILTI-3.png" alt="Hilti logo" className="h-full w-full overflow-hidden" />
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Hilti Tech
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-gray-100 p-1 text-xs font-medium leading-none text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                Jan 2024
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  —
                </span>
                Present
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                QA Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <div className="aspect-square w-13 flex-none" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Hilti Tech
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-gray-100 p-1 text-xs font-medium leading-none text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                Jul
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  —
                </span>
                Dec 2024
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                SDE Intern
              </span>
            </p>
          </div>
        </li>

        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="p-2 focusable aspect-square w-13 h-13 flex-none cursor-pointer rounded-md bg-gray-800 hover:bg-gray-700 dark:bg-awkward/10 text-awkward transition dark:hover:bg-awkward/20 focus:ring-awkward/40 dark:bg-awkward-dark/20 dark:text-awkward-dark dark:hover:bg-awkward-dark/30 dark:focus:ring-awkward-dark/40"
            href="https://www.sdscoep.club/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="https://www.sdscoep.club/sds.png" alt="SDS logo" className="h-full w-full" />
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                SDS, COEP
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-gray-100 p-1 text-xs font-medium leading-none text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                2021
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  —
                </span>
                2024
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Software developer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="focusable aspect-square w-13 p-2 flex-none cursor-pointer rounded-md bg-gray-800 hover:bg-gray-700 dark:bg-awkward/10 text-awkward transition dark:hover:bg-awkward/20 focus:ring-awkward/40 dark:bg-awkward-dark/20 dark:text-awkward-dark dark:hover:bg-awkward-dark/30 dark:focus:ring-awkward-dark/40"
            href="https://www.coeptech.ac.in/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="https://www.coeptech.ac.in/wp-content/uploads/2023/10/brand-white.svg" alt="Coep logo" className="h-full w-full" />
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                College of Engineering, Pune
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-gray-100 p-1 text-xs font-medium leading-none text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                2020
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  —
                </span>
                24
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Bachelor's degree
              </span>
            </p>
          </div>
        </li>

      </ul>
    </section>
  )
}
