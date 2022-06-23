import React from "react";
import { Code } from "../../components/Code";
import { Highlight } from "../../components/Highlight";
import { InlineCode } from "../../components/InlineCode";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { PageSectionHeader } from "../../components/PageSectionHeader";
import { Paragraph } from "../../components/Paragraph";

export const Strings = () => (
    <Page>
        <PageHeader>Data Types - Strings</PageHeader>
        <PageContent>
            <Paragraph>
                Variables with the type <InlineCode>string</InlineCode> contains
                text.
            </Paragraph>
            <Paragraph>
                There are a lot of operations you can do with strings. We will
                look at a few of them.
            </Paragraph>
            <Paragraph>
                This operation is called{" "}
                <Highlight>string concatenation</Highlight>. It puts two strings
                together into one:
                <Code>console.log("Hello" + ", world!");</Code>
            </Paragraph>
            <Paragraph>
                You can also concatenate numbers or other types with strings:
                <Code>
                    const age = 25;{"\n"}console.log("I am " + age + " years
                    old.");
                </Code>
            </Paragraph>
            <Paragraph>
                Here we have <Highlight>string interpolation</Highlight>. It is
                another way of concatenating expressions into a string:
                <Code>
                    const name = "Developer Programmer";{"\n"}
                    const age = 45;{"\n"}console.log(`Hi, my name is {"${name}"}{" "}
                    and I am {"${age}"} years old.`);
                </Code>
                Note: You have to use the backtick character{" "}
                <InlineCode>`</InlineCode> to use string interpolation.
            </Paragraph>
        </PageContent>
    </Page>
);
