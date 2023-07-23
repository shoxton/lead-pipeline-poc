type PipelineBoardProps = {
  title: string
  theme: string
}

export function PipelineBoard({ title, theme }: PipelineBoardProps) {
  console.log(themesMapping[theme])

  return (
    <div
      className={`${themesMapping[theme].gradient} flex w-52 flex-col gap-3 rounded-lg bg-gradient-to-b to-transparent p-3`}
    >
      <span
        className={`${themesMapping[theme].title} text-sm font-bold leading-none tracking-wide`}
      >
        {title}
      </span>
      <div className={`${themesMapping[theme].box} h-5 w-28 rounded-full`}>
        <div
          className={`${themesMapping[theme].accent} h-full w-10 rounded-full`}
        ></div>
      </div>
      <div
        className={`-mx-1 h-48 w-48 rounded-lg border ${themesMapping[theme].border}`}
      ></div>
    </div>
  )
}

type Theme = {
  gradient: string
  title: string
  box: string
  border: string
  accent: string
}

type ThemeList = {
  [id: string]: Theme
}

const themesMapping: ThemeList = {
  purple: {
    title: `text-purple-900`,
    gradient: `from-purple-100 via-purple-100`,
    border: `border-purple-200`,
    box: `bg-purple-200`,
    accent: `bg-purple-300`,
  },
  orange: {
    title: `text-orange-900`,
    gradient: `from-orange-100 via-orange-100`,
    border: `border-orange-200`,
    box: `bg-orange-200`,
    accent: `bg-orange-300`,
  },
  sky: {
    title: `text-sky-900`,
    gradient: `from-sky-100 via-sky-100`,
    border: `border-sky-200`,
    box: `bg-sky-200`,
    accent: `bg-sky-300`,
  },
  green: {
    title: `text-green-900`,
    gradient: `from-green-100 via-green-100`,
    border: `border-green-200`,
    box: `bg-green-200`,
    accent: `bg-green-300`,
  },
  red: {
    title: `text-red-900`,
    gradient: `from-red-100 via-red-100`,
    border: `border-red-200`,
    box: `bg-red-200`,
    accent: `bg-red-300`,
  },
  slate: {
    title: `text-slate-900`,
    gradient: `from-slate-100 via-slate-100`,
    border: `border-slate-200`,
    box: `bg-slate-200`,
    accent: `bg-slate-300`,
  },
}
