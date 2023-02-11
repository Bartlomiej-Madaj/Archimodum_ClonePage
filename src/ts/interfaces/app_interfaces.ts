
export interface ProjectInterface {
    rootPath: string;
    title: string;
    image: string;
  }

export interface ProjectProps {
    project:{name: string,
    author?: string,
    description: string,
    image: string,
      path: string,
  }
  }

  export interface CurrentProjectInterface {
    country: string;
    title: string;
    year: string;
    description: string;
    image: string[];
  }

export interface SingleProjectProps {
    project: {
      rootPath: string;
      title: string;
      image: string;
    };
  }