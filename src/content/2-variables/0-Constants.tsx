import React from "react";
import { Code } from "../../components/Code";
import { Help } from "../../components/Help";
import { Highlight } from "../../components/Highlight";
import { InlineCode } from "../../components/InlineCode";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { PageSectionHeader } from "../../components/PageSectionHeader";
import { Paragraph } from "../../components/Paragraph";

export const Constants = () => (
    <Page>
        <PageHeader>Variables - Constants</PageHeader>
        <PageContent>
            <Paragraph className="text-sm text-orange-700 dark:text-orange-300">
                Note: You can hover over <Highlight>highlighted</Highlight>{" "}
                parts of the text to get more information (sometimes).
            </Paragraph>
            <PageSectionHeader>Variables</PageSectionHeader>
            <Paragraph>
                <Highlight>Variables</Highlight> are containers. Depending on
                the programming language, they can contain everything from
                numbers or text to entire databases, images, music or other
                arbitrary things. You can also say that they are a way of
                assigning names to values.
            </Paragraph>
            <Paragraph>
                Let's look at how we can use variables in the code:
                <Code>const x = 1;{"\n"}console.log(x);</Code>
            </Paragraph>
            <Paragraph>
                Let's look at the code in more detail. First, we are creating a{" "}
                <Highlight>constant variable</Highlight> named{" "}
                <InlineCode>x</InlineCode> and making it equal to{" "}
                <InlineCode>1</InlineCode>.
                <Help>
                    Another way of saying the same thing, but using more
                    technical terms: We <Highlight>define</Highlight> a{" "}
                    <Highlight>constant variable</Highlight> with the{" "}
                    <Highlight>identifier</Highlight> <InlineCode>x</InlineCode>{" "}
                    and <Highlight>assign</Highlight> it to the{" "}
                    <Highlight>value</Highlight> <InlineCode>1</InlineCode>.
                </Help>
                <Code>const x = 1;</Code>
            </Paragraph>
            <Paragraph>
                Then, we are <Highlight>logging</Highlight> it to the{" "}
                <Highlight>console</Highlight>:
                <Code hideOutput>console.log(x);</Code>
            </Paragraph>
            <Paragraph>
                You can assign any <Highlight>value</Highlight> to a variable. A
                value can be a <Highlight>literal</Highlight>, another variable
                or an <Highlight>expression</Highlight>.
            </Paragraph>
            <PageSectionHeader>Constants</PageSectionHeader>
            <Paragraph>
                Constant variables (also called constants) are variables that
                have a <Highlight>constant value</Highlight>. It means that the
                assigned value will not change. In other words, the identifier
                will always be assigned to the same value.
            </Paragraph>
            <Paragraph>
                Constants cannot be changed:
                <Code hideOutput>
                    const x = 5;{"\n"}x = 3; // This will produce an error
                </Code>
                Note: <InlineCode>// This will produce an error</InlineCode> is
                a <Highlight>comment</Highlight>. It does not affect the code,
                it is just there for clarification to programmers that is
                reading the code. The program will just ignore any comments you
                have in your code.
            </Paragraph>
            <Paragraph>
                This is useful if you want to be certain that a value will not
                change throughout the program. Best practice is to always define
                variables as constants, but then later you can change them into{" "}
                <Highlight>mutable variables</Highlight> once you know that you
                need to.
            </Paragraph>
            <Paragraph>
                Next, we will look at{" "}
                <InlineLink to="/variables/mutables">
                    mutable variables
                </InlineLink>
                .
            </Paragraph>
        </PageContent>
    </Page>
);
