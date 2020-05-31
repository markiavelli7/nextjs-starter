import React from "react";
import { Global, css } from "@emotion/core";

// TODO: Add fonts to public folder, and then import them in here
export default function FontGlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Montserrat";
          font-weight: 400;
          src: url("/fonts/Montserrat/Montserrat-Regular.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Montserrat";
          font-weight: 500;
          src: url("/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Montserrat";
          font-weight: 600;
          src: url("/fonts/Montserrat/Montserrat-SemiBold.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Montserrat";
          font-weight: 700;
          src: url("/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Montserrat";
          font-weight: 900;
          src: url("/fonts/Montserrat/Montserrat-ExtraBold.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Nunito Sans";
          font-weight: 500;
          src: url("/fonts/NunitoSans/NunitoSans-Regular.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Nunito Sans";
          font-weight: 600;
          src: url("/fonts/NunitoSans/NunitoSans-SemiBold.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Nunito Sans";
          font-weight: 700;
          src: url("/fonts/NunitoSans/NunitoSans-Bold.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Nunito Sans";
          font-weight: 800;
          src: url("/fonts/NunitoSans/NunitoSans-ExtraBold.ttf")
            format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Nunito Sans";
          font-weight: 900;
          src: url("/fonts/NunitoSans/NunitoSans-Black.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 400;
          src: url("/fonts/Prompt/Prompt-Regular.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 500;
          src: url("/fonts/Prompt/Prompt-Medium.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 600;
          src: url("/fonts/Prompt/Prompt-SemiBold.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 700;
          src: url("/fonts/Prompt/Prompt-Bold.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 800;
          src: url("/fonts/Prompt/Prompt-ExtraBold.ttf") format("truetype");
          font-display: auto;
        }
        @font-face {
          font-family: "Prompt";
          font-weight: 900;
          src: url("/fonts/Prompt/Prompt-Black.ttf") format("truetype");
          font-display: auto;
        }
      `}
    />
  );
}
