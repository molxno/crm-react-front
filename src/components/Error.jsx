const Error = ({children}) => {
  return (
    <p className="bg-red-700 text-white p-3 text-center my-4 font-bold rounded-md">
        {children}
    </p>
  )
}

export default Error