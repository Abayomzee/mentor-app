import React from "react";
import Tag from "./Tag";
import useActiveTabpane from "./../../../utils/hooks/useActiveTabpane";

interface Props {
  tags: Array<string>;
}
const TagContainer: React.FC<Props> = ({ tags = [] }) => {
  const [activeIndex, setActivePane] = useActiveTabpane(0);
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <Tag
          text={tag}
          key={index}
          handleClick={() => setActivePane(index)}
          cssClass={activeIndex === index ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default TagContainer;
