import React from "react";
import { POST } from "../../Types";
import HomePageSection from "../HomePageSection";
import BlogPreview from "../BlogPreview";
import Button from "../Button";

interface Props {
  posts: POST[];
}

const BlogSection: React.FC<Props> = ({ posts }: Props) => {
  return (
    <HomePageSection title={"blog"}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post) => (
          <BlogPreview key={post.id} data={post} />
        ))}
      </div>
      <Button href={`/blog`} styles={"w-full mt-8"}>
        View All
      </Button>
    </HomePageSection>
  );
};

export default BlogSection;
