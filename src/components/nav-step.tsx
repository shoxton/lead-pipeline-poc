type NavStepProps = {
  stepNumber: number
  text: string
  selected: boolean
}

export function NavStep({ stepNumber, text, selected }: NavStepProps) {
  return (
    <div className="grid place-items-center gap-2 ">
      <div
        className={`grid h-12 w-12 place-items-center rounded-2xl border-2 border-transparent font-mono text-lg font-bold ordinal ${
          selected
            ? "bg-slate-700 text-white"
            : "border-zinc-300 bg-white text-slate-700"
        } `}
      >
        {stepNumber}
      </div>
      <p className="text-xs font-bold text-slate-700">{text}</p>
    </div>
  )
}
