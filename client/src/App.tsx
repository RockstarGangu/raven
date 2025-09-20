import Library from "./pages/Library"
import Sidebar from "./components/Sidebar"
import RequestTabs from "./pages/RequestTabs"

function App() {
  return (
    <div className="flex flex-row" >
      <Sidebar/>
      <Library/>
      <RequestTabs/>
    </div>
  )
}

export default App