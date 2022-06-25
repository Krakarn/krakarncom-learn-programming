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
import { referenceWarning } from "../reference-warning";

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
            <PageSectionHeader>Concatenation</PageSectionHeader>
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
                    const myName = "Developer Programmer";{"\n"}
                    const age = 45;{"\n"}console.log(`Hi, my name is{" "}
                    {"${myName}"} and I am {"${age}"} years old.`);
                </Code>
                Note: You have to use the backtick character{" "}
                <InlineCode>`</InlineCode> to use string interpolation.
            </Paragraph>
            <Paragraph>
                Another example:
                <Code>
                    {`const roomName = "the waiting room";
const itemsInRoom = "some chairs, some magazines on a table, a clock and a plant";
const pathways = "a hallway with the sign 'Doctors' and a door with the label 'Exit'";
console.log(\`You are in \${roomName}.\`)
console.log(\`You see \${itemsInRoom}.\`)
console.log(\`There's \${pathways}.\`)`}
                </Code>
            </Paragraph>
            <Paragraph>
                Excercise: Try making up your own scenario in the example above,
                edit the code to fit your imagination. See if you can add more
                things to see, for example: a player inventory.
            </Paragraph>
            <PageSectionHeader>Comparisons</PageSectionHeader>
            <Paragraph>
                Comparing strings will evaulate to a{" "}
                <Highlight>boolean</Highlight> value of either{" "}
                <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>:
                <Code>
                    {`console.log(\`"a" > "b":\`, "a" > "b");\n`}
                    {`console.log(\`"a" < "b":\`, "a" < "b");\n`}
                    {`console.log(\`"a" === "b":\`, "a" === "b");\n`}
                    {`console.log(\`"a" === "a":\`, "a" === "a");\n`}
                </Code>
            </Paragraph>
            <Paragraph>
                Comparing strings with <InlineCode>{"<"}</InlineCode> (less
                than) or <InlineCode>{">"}</InlineCode> (greater than) is
                comparing the order of the characters as they appear in the
                alphabet.
            </Paragraph>
            <PageSectionHeader>Reference</PageSectionHeader>
            <Paragraph>
                For a full reference on strings,{" "}
                <InlineLink
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
                    external
                    target="_blank"
                >
                    click here
                </InlineLink>
                . {referenceWarning}
            </Paragraph>
            <Paragraph>
                Next, we will look at{" "}
                <InlineLink to="/data-types/booleans#top">booleans</InlineLink>.
            </Paragraph>
        </PageContent>
    </Page>
);
