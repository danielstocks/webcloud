import { createComponent } from "react-fela";
import { createComponentWithProxy } from "react-fela";
import { Paragraph } from "../components/paragraph";
import { Flex } from "../components/flex";
import { Spacer } from "../components/spacer";
export const Job = createComponent(
  { display: "flex", flexDirection: "column", marginBottom: "24px" },
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
  "div"
);
export const JobDuration = createComponent({}, "span");

export const JobLocation = createComponent({}, "span");

export const JobMeta = ({ children }) => (
  <Flex
    extend={{
      fontSize: "12px",
      fontWeight: 500,
      flexDirection: "row",
      color: "var(--colors-fg-alt)",
      marginBottom: "16px",
      paddingBottom: "16px",
      borderBottom: "1px solid var(--colors-border)"
    }}
  >
    {React.Children.toArray(children).map((item, i) => (
      <React.Fragment key={i}>
        {i !== 0 && (
          <>
            <Spacer />
            {"|"}
            <Spacer />
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
      textDecoration: "none",
      display: "inline-flex",
      whiteSpace: "nowrap",
      "& svg": {
        verticalAlign: "bottom",
        opacity: 0.8
      },
      "&:hover svg": {
        opacity: 1
      },
      "&:hover span": {
        color: "var(--colors-fg)"
      },
      "&:hover span:after": {
        width: "100%",
        left: "0"
      },
      "& span": {
        color: "var(--colors-primary)",
        position: "relative",
        transition: "color 0.2s ease-in-out",
        position: "relative",
        background: `linear-gradient(to top, var(--colors-primary-light) 0%, rgba(0, 0, 0, 0) 1px)`,
        "&:after": {
          background: "none repeat scroll 0 0 transparent",
          bottom: 0,
          content: "' '",
          display: "block",
          height: "1px",
          left: "50%",
          position: "absolute",
          background: "var(--colors-primary)",
          transition: "width 0.2s ease 0s, left 0.2s ease 0s",
          width: 0
        }
      }
    }}
    {...props}
  >
    {children}
  </Paragraph>
);
