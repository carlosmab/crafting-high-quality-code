import MainPanel from "@features/quality-attributes/components/main-panel/MainPanel"
import NavPanel from "@features/quality-attributes/components/nav-panel/NavPanel"
import TitleBar from "@features/quality-attributes/components/title-bar/TitleBar"

function QualityAttributesPage() {
  return (
    <div data-testid="quality-attributes">
      <TitleBar />
      <NavPanel />
      <MainPanel />
    </div>
  )
}

export default QualityAttributesPage