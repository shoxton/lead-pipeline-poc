import { NavStep } from "./components/nav-step"
import { PipelineOption } from "./components/pipeline-option"
import { PipelineBoard } from "./components/pipeline-board"
import { useState } from "react"

type BoardSchema = {
  title: string
  theme: string
  id: number
}

const boardsMock: BoardSchema[] = [
  { title: "LEAD", theme: "purple", id: 1 },
  { title: "RDP IN PROGRESS", theme: "orange", id: 2 },
  { title: "SUBMITTED", theme: "sky", id: 3 },
  { title: "WON", theme: "green", id: 4 },
  { title: "LOST", theme: "red", id: 5 },
  { title: "CLOSED", theme: "slate", id: 6 },
]

type PipelineOptions = {
  [key: string]: number[]
}

const pipelineOptions: PipelineOptions = {
  Basic: [1, 4, 5],
  Advanced: [1, 3, 4, 5],
  Expert: [1, 3, 4, 5, 6],
  Custom: [1, 2, 3, 4, 5, 6],
}

function App() {
  const pipelineBoards = boardsMock

  const [option, setOption] = useState<keyof PipelineOptions>("Basic")

  const filteredBoards = pipelineBoards.filter((board) =>
    pipelineOptions[option].includes(board.id),
  )

  return (
    <div className="flex h-screen flex-col bg-slate-200 px-5">
      <header className="flex w-full items-center justify-between py-10">
        <div className="h-8 w-8 rotate-45 rounded bg-slate-700"></div>
        <div className="flex gap-16">
          {["Sales Pipeline Settings", "Opportunity Details Settings"].map(
            (step, index) => (
              <NavStep
                selected={index === 0}
                stepNumber={index + 1}
                text={step}
                key={index}
              />
            ),
          )}
        </div>
        <button className="min-w-[5.5rem] rounded-full bg-blue-700 p-3 font-bold text-white">
          Next
        </button>
      </header>
      <main className="mb-4 flex flex-1 flex-col items-center gap-10 rounded-xl bg-white p-10">
        <h1 className="text-center text-2xl font-bold text-slate-700">
          Please select the type of sales pipeline that best fits to you company
        </h1>
        <div className="flex gap-5">
          {Object.keys(pipelineOptions).map((opt, index) => (
            <PipelineOption
              label={opt}
              value={opt}
              onChange={(e) => setOption(e.target.value)}
              key={index}
              name="pipeline"
              defaultChecked={opt === option}
            />
          ))}
        </div>
        <div className="flex h-full gap-4">
          {filteredBoards.map((board) => (
            <PipelineBoard
              key={board.id}
              title={board.title}
              theme={board.theme}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
