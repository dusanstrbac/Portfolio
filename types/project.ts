export interface ProjectDetails {
  id: string;
  title: string;
  description: {
    sr: string;
    en: string;
  };
  bigDescription: {
    sr: string;
    en: string;
  };
  image: string;
  tech: string[];
  gallery: string[];
  github: string;
  demo: string;
}

export interface ProjectCardProps {
  // OBA polja moraju koristiti ProjectDetails
  project: ProjectDetails;
  onOpen: (project: ProjectDetails) => void;
}