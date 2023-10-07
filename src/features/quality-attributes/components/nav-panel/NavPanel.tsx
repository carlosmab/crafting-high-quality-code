import { useContext } from "react";
import { QualityAttributesContext } from "../../context/QualityAttributesContextProvider";

function NavPanel() {
  const { qualityAttributes } = useContext(QualityAttributesContext);

  return (
    <div className="flex flex-col bg-gray-100 h-screen w-1/6" data-testid="nav-panel">
      <ul className="py-4 px-4">
        {qualityAttributes?.map((qualityAttribute) => (
          <li key={qualityAttribute.id}>{qualityAttribute.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NavPanel;