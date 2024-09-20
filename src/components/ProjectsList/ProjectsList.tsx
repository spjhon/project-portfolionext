
import PortfolioProjectsModalContent from "../PortfolioProjectsModalContent/PortfolioProjectsModalContent";

interface ProjectListProps {
  title: string;
  modalProjectArray: ImageData[];
}

export interface ImageData {
  id: string;
  image: string; // Cambia src a JSX.Element para manejar componentes SVG
  label: string; // Agrega la propiedad label a la interfaz
  link: string;
  modalImage: string;
  jsonTranslationCategory: string;
  technologies: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({ title, modalProjectArray }) => {



  return (
    <fieldset className="flex flex-col p-4 border-2 m-2 rounded-xl">
      <legend>{title}</legend>
      <div className="flex flex-wrap gap-4">
        {modalProjectArray.map((data) => (
             <div key={data.id}>
            <PortfolioProjectsModalContent modalProjectInfo={data}></PortfolioProjectsModalContent>
            </div>
        ))}
      </div>
    </fieldset>
  );
};

export default ProjectList;
