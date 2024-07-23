
export default function Alerta({children}) {
  return (
   
    <div className="font-bold flex items-center p-2.5 mb-1 text-base text-red-900 border border-red-300 rounded-lg bg-red-200 dark:bg-red-70 dark:text-red-600 dark:border-red-800" role="alert">
    <div>
      {}{children}
    </div>
  </div>
  )
}
