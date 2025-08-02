import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { LatestFilms } from "src/app/components/LatestFilms"
import { LatestSongs } from "src/app/components/LatestSongs"

const NUMBER_OF_ACTIVITIES = 4

/**
 * A section displaying my latest listens and watches.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Activity({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={clsx(className, "content content-lg")} {...props}>
      <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
        Activity
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-gray-500 dark:text-gray-350">
        What I’ve recently listened to and watched.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <LatestSongs
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
        <LatestFilms
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
      </div>
    </section>
  )
}
