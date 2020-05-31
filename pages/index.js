import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

export default function index() {
  return (
    <div>
      <h1 css={styles.title}>Hello there people!</h1>
    </div>
  );
}

var styles = {
  title: css`
    ${tw`font-display`}
  `,
};
