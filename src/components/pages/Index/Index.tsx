import React from "react";
import { Link } from "react-router-dom";

import Usercard from "./../../common/Usercard/Usercard";
import SideCard from "./../../common/SideCard/SideCard";
import TagContainer from "./../../common/Tag/TagContainer";
import Typography from "../../common/Typography/Typography";
import RoadMap from "./../../common/RoadMap/RoadMap";
import Header from "./../../common/Header/Header";
import FeedbackCard from "./../../common/FeedbackCard/FeedbackCard";

interface Props {}
const Index: React.FC<Props> = () => {
  const tags = ["All", "UI", "UX", "Bug", "Enhancement", 'Feature'];
  const fedbacks = [
    {
      frequency: "112",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "Enhancement",
      commentCount: "2",
    },
    {
      frequency: "327",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "Feature",
      commentCount: "9",
    },
    {
      frequency: "132",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "Feature",
      commentCount: "3",
    },
    {
      frequency: "411",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "Bug",
      commentCount: "6",
    },
    {
      frequency: "112",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "UX",
      commentCount: "2",
    },
    {
      frequency: "112",
      title: "Add tags for solution",
      description: "Easier to search for solution based on a specific task",
      tagCategory: "Enhancement",
      commentCount: "2",
    },
  ];
  return (
    <main>
      <section className="center">
        <main className="main__layout">
          <aside className="aside__side-container">
            <Usercard title="Frontend" subTitle="Me of all now now" />
            <SideCard>
              <TagContainer tags={tags} />
            </SideCard>
            <SideCard>
              <div className="flex-r-jcbetween-aicenter m-b-30px">
                <Typography Element="h5" text="Roadmap" cssClass="h-2" />
                <Link to="#" className="link link--1">
                  View
                </Link>
              </div>

              <RoadMap title="Planned" value="2" type="warn" />
              <RoadMap title="In Progress" value="3" type="primary" />
              <RoadMap title="Live" value="1" type="default" />
            </SideCard>
          </aside>

          <main className="main__content">
            <Header />
            <section className="m-t-30px">
              {fedbacks.map((feedback, index) => (
                <FeedbackCard
                  frequency={feedback.frequency}
                  title={feedback.title}
                  description={feedback.description}
                  tagCategory={feedback.tagCategory}
                  commentCount={feedback.commentCount}
                  key={index}
                />
              ))}
            </section>
          </main>
        </main>
      </section>
    </main>
  );
};

export default Index;
