import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  title_en?: string;
  description_en?: string;
}

export interface Project extends ProjectMetadata {
  content: string;
  content_en?: string;
}

export function getSortedProjectsData(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      let content = matterResult.content;
      let content_en = "";
      if (content.includes("<!-- EN -->")) {
        const parts = content.split("<!-- EN -->");
        content = parts[0];
        content_en = parts[1];
      }

      // Combine the data with the id
      return {
        id,
        content,
        content_en,
        ...(matterResult.data as Omit<ProjectMetadata, 'id'>),
      };
    });
    
  // Sort projects by date
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectData(id: string): Project {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  let content = matterResult.content;
  let content_en = "";
  if (content.includes("<!-- EN -->")) {
    const parts = content.split("<!-- EN -->");
    content = parts[0];
    content_en = parts[1];
  }

  // Combine the data with the id
  return {
    id,
    content,
    content_en,
    ...(matterResult.data as Omit<ProjectMetadata, 'id'>),
  };
}
