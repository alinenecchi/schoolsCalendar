import React from "react";
import Title from "../../components/atoms/title";
import Footer from "../../components/organisms/footer";
import { userService } from "../../services";
import Link from "../../components/atoms/link";

import css from "./home.module.scss";

export default function Home(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <div className={css["title"]}>
        <Title> Hello </Title>
      </div>
      <div className="p-4">
        <div className="container">
          <h1>Hi {userService.userValue?.firstName}!</h1>
          <p>
            <Link href="/users">Manage Users</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
