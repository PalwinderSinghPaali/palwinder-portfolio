"use client";
import { Column, Card, Line, SmartLink, Row, Flex, Text, Heading, SmartImage } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { projects } from "@/app/resources/content";
import { useRouter } from "next/navigation";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const router = useRouter();

  const displayedProjects = range
    ? projects.slice(range[0] - 1, range[1] ?? projects.length)
    : projects;

  return (
    <Column fillWidth  marginBottom="40" gap="24">
      {/* Title */}
      <Heading as="h2" wrap="balance" variant="display-strong-xs">
        Projects
      </Heading>

      {/* Cards Section */}
      <Flex wrap={true} gap="16" center={true}>
        {displayedProjects && displayedProjects.map((post, index) => (
          <Card key={index} maxWidth={15} maxHeight={20} radius="l-4" direction="column" onClick={() => router.push("/work/traderedge")}>
            <SmartImage
              sizes="400px"
              fillWidth
              aspectRatio="4 / 3"
              radius="l"
              src={post?.image}
            />
            <Column fillWidth paddingX="16" paddingY="20" gap="8">
              <Text variant="body-default-xl">{post?.title}</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" >
                {post?.description}
              </Text>
              {/* {post.url && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={post.url}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )} */}
            </Column>
            <Line background="neutral-alpha-medium" />
          </Card>
        ))}
      </Flex>

      {/* View More Button */}
      <Row fillWidth horizontal="end" paddingX="16">
        <SmartLink
          suffixIcon="arrowRight"
          style={{ margin: "0", width: "fit-content" }}
          href={"/work"}
        >
          <Text variant="body-default-s">View More</Text>
        </SmartLink>
      </Row>
    </Column>
    // <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
    //   {displayedProjects.map((post, index) => (
    //     <ProjectCard
    //       priority={index < 2}
    //       key={post.slug}
    //       href={`work/${post.slug}`}
    //       images={post.metadata.images}
    //       title={post.metadata.title}
    //       description={post.metadata.summary}
    //       content={post.content}
    //       avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
    //       link={post.metadata.link || ""}
    //     />
    //   ))}
    // </Column>
  );
}
