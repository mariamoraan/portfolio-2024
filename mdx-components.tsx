import { Link } from "@/core/components/markdown/link/link.component";
import { Paragraph } from "@/core/components/markdown/paragraph/paragraph.component";
import { Pre } from "@/core/components/markdown/pre/pre.component";
import { Ul } from "@/core/components/markdown/ul/ul.component";
import type { MDXComponents } from "mdx/types";

const H1 = ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <H1>{children}</H1>,
    a: ({ href, children }) =>
      href ? <Link href={href}>{children}</Link> : <p>{children}</p>,
    code: ({ children }) => <Pre>{children}</Pre>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    ul: ({ children }) => <Ul>{children}</Ul>,
    ...components,
  };
}
