import React from "react";
import { createComponent } from "react-fela";
import { Paragraph } from "../components/paragraph";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";

export const Job = createComponent(
  {
    display: "flex",
    pageBreakInside: "avoid",
    flexDirection: "column",
    paddingTop: "24px"
  },
  "div"
);
export const JobTitle = createComponent(
  { fontSize: "24px", fontWeight: 200, marginBottom: "16px" },
  "div"
);
export const JobCompany = createComponent(
  {
    marginBottom: "16px",
    fontSize: "16px",
    fontWeight: 500
  },
  "span"
);
export const JobDuration = createComponent({}, "span");

export const JobLocation = createComponent({}, "span");

export const JobMeta = ({ children }) => (
  <Flex
    extend={{
      fontSize: "12px",
      display: "block",
      fontWeight: 500,
      flexDirection: "row",
      color: "var(--color-fg-alt)",
      marginBottom: "16px",
      paddingBottom: "16px",
      borderBottom: "1px solid var(--color-border)"
    }}
  >
    {React.Children.toArray(children).map((item, i) => (
      <React.Fragment key={i}>
        {i !== 0 && (
          <>
            &nbsp;{"|"}&nbsp;
          </>
        )}
        {item}
      </React.Fragment>
    ))}
  </Flex>
);

export const JobDescription = ({ children }) => (
  <Flex extend={{ marginBottom: "16px" }}>
    {React.Children.toArray(children).map((item, i) => (
      <React.Fragment key={i}>
        {item}
        <Spacer size={2} />
      </React.Fragment>
    ))}
  </Flex>
);

export const SocialLink = ({ children, ...props }) => (
  <Paragraph
    as="a"
    extend={{
      flexShrink: 0,
      flexGrow: 1,
      textDecoration: "none",
      display: "inline-flex",
      "& svg": {
        verticalAlign: "bottom",
        opacity: 0.8
      },
      "&:hover svg": {
        opacity: 1,
        transition: "all 0.2s ease-in-out"
      },
      "&:hover span": {
        color: "var(--color-fg)"
      },
      "&:hover span:after": {
        width: "100%",
        left: "0"
      },
      "& span": {
        color: "var(--color-primary)",
        lineHeight: "24px",
        borderBottom: "1px solid var(--color-border)",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          color: "var(--color-fg)",
          borderBottom: "1px solid var(--color-primary)"
        }
      }
    }}
    {...props}
  >
    {children}
  </Paragraph>
);
