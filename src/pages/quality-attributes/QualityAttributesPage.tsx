import MainPanel from "@features/quality-attributes/components/main-panel/MainPanel"
import NavPanel from "@features/quality-attributes/components/nav-panel/NavPanel"
import TitleBar from "@features/quality-attributes/components/title-bar/TitleBar"
import QualityAttributesProvider from "@src/features/quality-attributes/context/QualityAttributesContextProvider"

function QualityAttributesPage() {

  return (
    <QualityAttributesProvider>
      <div data-testid="quality-attributes" className="flex flex-col">
      <div className="bg-gray-800 py-4 w-screen row-span-1">
        <TitleBar />
      </div>
      <div className="bg-gray-100 py-4 row-span-1">
        <div className="w-1/6">
          <NavPanel />
        </div>
        <div className="w-5/6">
          <MainPanel />
        </div>
      </div>  
    </div>
    </QualityAttributesProvider>
  )
}

export default QualityAttributesPage