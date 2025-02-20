"use client";
import { Column, Card, Line, SmartLink, Row, Flex, Text, Heading, SmartImage } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { projects } from "@/app/resources/content";
import { useRouter } from "next/navigation";

interface ProjectsProps {
  range?: [number, number?];
}

export function ProjectCrousel({ range }: ProjectsProps) {
  const router = useRouter();

  const displayedProjects = range
    ? projects.slice(range[0] - 1, range[1] ?? projects.length)
    : projects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.title}
          href={post.path}
          images={post.image}
          title={post.title}
          description={post.description}
          link={post.url || ""}
        />
      ))}
    </Column>
  );
}
