import { CheckIcon } from "lucide-react"
import { InputHTMLAttributes } from "react"

type PipelineOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function PipelineOption({
  label,
  defaultChecked,
  ...props
}: PipelineOptionProps) {
  const ballonCornerStyle = `before:absolute before:bottom-0 before:left-1/2 before:block before:h-0 before:w-0 before:-translate-x-1/2 before:translate-y-[calc(100%+1px)] before:border-[0.8rem] before:border-b before:border-blue-500 before:border-x-transparent before:border-b-transparent after:absolute after:bottom-0 after:left-1/2 after:block after:h-0 after:w-0 after:-translate-x-1/2 after:translate-y-[calc(100%+1px)] after:border-[.5rem] after:border-b after:border-white after:border-x-transparent after:border-b-transparent`
  return (
    <label
      className={`group/item relative flex w-[210px] items-center gap-4 rounded-md border p-4 ${
        defaultChecked
          ? `border-transparent outline outline-blue-500 ${ballonCornerStyle}`
          : ""
      }`}
    >
      <div className="relative h-5 w-5">
        <input
          type="radio"
          className="group/option h-5 w-5 appearance-none rounded border-2 border-slate-300 bg-white checked:border-blue-500 checked:bg-blue-500"
          defaultChecked={defaultChecked}
          {...props}
        />
        {defaultChecked && (
          <div className="absolute inset-0 grid h-5 w-5 place-items-center text-white">
            <CheckIcon size={18} strokeWidth={3} />
          </div>
        )}
      </div>
      <span className="text-sm text-slate-950">{label}</span>
    </label>
  )
}
