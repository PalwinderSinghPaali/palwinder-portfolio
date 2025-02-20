"use client";
import { Column, Card, Line, SmartLink, Row, Flex, Text, Heading, SmartImage } from "@/once-ui/components";
import { expertise } from "@/app/resources/content";
import { useRouter } from "next/navigation";

interface ProjectsProps {
  range?: [number, number?];
}

export function TechStack({ range }: ProjectsProps) {
  const router = useRouter();

  const displayedProjects = range
    ? expertise.slice(range[0] - 1, range[1] ?? expertise.length)
    : expertise;

  return (
    <Column fillWidth  marginBottom="40" gap="24">
      {/* Title */}
      <Heading as="h2" wrap="balance" variant="display-strong-xs">
        Expertise
      </Heading>

      {/* Cards Section */}
      <Flex wrap={true} gap="16" center={true}>
        {displayedProjects && displayedProjects.map((post, index) => (
          <Card key={index} maxWidth={15} maxHeight={20} radius="l-4" direction="column" onClick={() => router.push(post.url)}>
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
          href={"/about"}
        >
          <Text variant="body-default-s">View More</Text>
        </SmartLink>
      </Row>
    </Column>
  );
}
