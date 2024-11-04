import React from "react";
import { createComponent, createComponentWithProxy } from "react-fela";
import { Paragraph } from "../components/paragraph";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";

export const Job = createComponentWithProxy(
  {
    display: "flex",
    pageBreakInside: "avoid",
    flexDirection: "column",
    paddingTop: "24px",
    "@media not print": {
      "[open] summary:before": {
        content: "'-'"
      }
    }
  },
  "details"
);

export const JobSummary = createComponent(
  {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "16px",
    paddingLeft: 0,
    marginBottom: "16px",
    borderBottom: "1px solid var(--color-border)",
    position: "relative",
    listStyle: "none",
    "::-webkit-details-marker": {
      display: "none"
    },
    "@media not print": {
      ":before": {
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "24px",
        fontWeight: "200",
        position: "absolute",
        right: "16px",
        color: "var(--color-primary)",
        content: "'+'"
      },
      ":hover": {
        cursor: "pointer",
        borderBottom: "1px solid var(--color-fg)",
        ":before": {
          color: "var(--color-fg)"
        }
      }
    },
  },
  "summary"
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
      color: "var(--color-fg-alt)"
    }}
  >
    {React.Children.toArray(children).map((item, i) => (
      <React.Fragment key={i}>
        {i !== 0 && <>&nbsp;{"|"}&nbsp;</>}
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
        flexShrink: 0,
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
