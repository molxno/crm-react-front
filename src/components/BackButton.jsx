import { useNavigate } from "react-router-dom"

const BackButton = ({route, text}) => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-end mt-2">
        <button className="bg-slate-800 hover:bg-slate-600 transition-colors text-white px-3 py-1 font-bold uppercase rounded-md" onClick={() => navigate(route)}>
          {text}
        </button>
      </div>
  )
}

export default BackButton