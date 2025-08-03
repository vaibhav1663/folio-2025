import Image from "next/image"
import { type ComponentProps, Suspense } from "react"
import splatoon from "public/projects/splatoon.png"
import { GitHubProjectCard } from "src/app/components/GitHubProjectCard"
import { ProjectCard, ProjectCardDate } from "src/app/components/ProjectCard"
import { Skeleton } from "src/components/Skeleton"

/**
 * A section displaying personal projects.
 *
 * @param props - A set of `section` props.
 */
export function Projects(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content content-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
          Projects
        </h2>
        <p className="max-w-[48ch] leading-relaxed text-gray-500 dark:text-gray-350">
          A selection of personal—and{" "}
          <a
            className="link text-gray-800 dark:text-white"
            href="https://github.com/vaibhav1663"
            rel="noreferrer"
            target="_blank"
          >
            open source
          </a>
          —projects.
        </p>
      </div>
      <div className="content content-lg mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
        <GitHubProjectCard repository="vaibhav1663/promt3d">
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
            Prompt3d
          </h3>
          <p className="leading-relaxed text-gray-500 dark:text-gray-350">
            A ThreeJS-powered virtual human being that uses a set of neat Azure APIs to do some talking!
          </p>
        </GitHubProjectCard>
        <GitHubProjectCard repository="vaibhav1663/talking_avatar_backend">
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
            Talking avatar backend
          </h3>
          <p className="leading-relaxed text-gray-500 dark:text-gray-350">
            Backend for the{" "} prompt3d project.
          </p>
        </GitHubProjectCard>
        <GitHubProjectCard repository="vaibhav1663/capto">
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
            Capto
          </h3>
          <p className="leading-relaxed text-gray-500 dark:text-gray-350">
            Web based screen recorder
          </p>
        </GitHubProjectCard>
        <GitHubProjectCard repository="vaibhav1663/certfast">
          <h3 className="mb-2 font-semibold text-amber-500 dark:text-amber-400">
            CertFast
          </h3>
          <p className="leading-relaxed text-gray-500 dark:text-gray-350">
            A web-based bulk certificate generator.
          </p>
        </GitHubProjectCard>
      </div>
    </section>
  )
}
