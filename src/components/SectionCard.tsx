import { TagClose, TagOpen } from "@/components/TagsSection.tsx";

type SectionCardProps = {
  sectionTitle: string;
  children: React.ReactNode;
}

export default function SectionCard({ sectionTitle, children }: SectionCardProps) {
  return (
    <section className="w-full flex flex-col items-center">

      <article className="my-6 w-full md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-AZUL-dark dark:shadow-AZUL-light">

        <TagOpen section={sectionTitle} />

        <div className="flex w-full gap-2">
          <section className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">

            {children}

          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </section>
        </div>

        <TagClose />
      </article>

    </section >
  )
}
