import React from "react";
import { Code } from "../../components/Code";
import { Highlight } from "../../components/Highlight";
import { InlineCode } from "../../components/InlineCode";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageHeader } from "../../components/PageHeader";
import { PageSectionHeader } from "../../components/PageSectionHeader";
import { Paragraph } from "../../components/Paragraph";

export const If = () => (
    <Page>
        <PageHeader>Control Structures - If</PageHeader>
        <Paragraph>
            So far, we've been looking at different ways of constructing
            expressions and assigning them to variables and also performing
            operations on them. But to be able to create a program that can do
            different things depending on values, we need{" "}
            <Highlight>control structures</Highlight>.
        </Paragraph>
        <PageSectionHeader>If Statement</PageSectionHeader>
        <Paragraph>
            We will start with a simple example:
            <Code>{`
let health = 5;
if (health > 0) {
    console.log("You are alive.");
}
            `}</Code>
        </Paragraph>
        <Paragraph>
            This is called an <Highlight>if statement</Highlight>. The
            expression inside the parentheses{" "}
            <InlineCode>{"( ... )"}</InlineCode> is called the{" "}
            <Highlight>predicate</Highlight>, and the code inside the curly
            brackets <InlineCode>{"{ ... }"}</InlineCode> is called the{" "}
            <Highlight>body</Highlight>.
        </Paragraph>
        <Paragraph>
            When the code execution reaches an{" "}
            <Highlight>if statement</Highlight>, it evaluates the{" "}
            <Highlight>predicate</Highlight> expression. If the expression
            evaluates to <InlineCode>true</InlineCode>, the code inside the{" "}
            <Highlight>body</Highlight> will get executed. If the{" "}
            <Highlight>predicate</Highlight> would instead evaluate to{" "}
            <InlineCode>false</InlineCode>, the code inside the{" "}
            <Highlight>body</Highlight> will not execute.
        </Paragraph>
        <PageSectionHeader>Else Statement</PageSectionHeader>
        <Paragraph>
            Furthermore, we have the <Highlight>else statement</Highlight>. You
            may follow an <Highlight>if statement</Highlight> with an{" "}
            <Highlight>else statement</Highlight>:
            <Code>{`
let health = 5;
if (health > 0) {
    console.log("You are alive.");
} else {
    console.log("You are dead.");
}
            `}</Code>
        </Paragraph>
        <Paragraph>
            Try changing the value of <InlineCode>health</InlineCode> to 0 and
            see what happens.
        </Paragraph>
        <Paragraph>
            The <Highlight>else statement</Highlight> is a lot like the{" "}
            <Highlight>if statement</Highlight>, but it does not have a{" "}
            <Highlight>predicate</Highlight>. Instead, the code inside it's{" "}
            <Highlight>body</Highlight> will execute if the{" "}
            <Highlight>predicate</Highlight> of the previous{" "}
            <Highlight>if statement</Highlight> evaluated to{" "}
            <InlineCode>false</InlineCode>.
        </Paragraph>
        <PageSectionHeader>Else-If Statement</PageSectionHeader>
        <Paragraph>
            Lastly, we have the <Highlight>else-if statement</Highlight>. It is
            basically just like an <InlineCode>if</InlineCode> and an{" "}
            <InlineCode>else</InlineCode> combined:
            <Code>{`
let health = 5;
if (health >= 3) {
    console.log("You are alive and healthy.");
} else if (health >= 1) {
    console.log("You are barely alive.");
} else {
    console.log("You are dead.");
}
            `}</Code>
        </Paragraph>
        <Paragraph>
            Try changing <InlineCode>health</InlineCode> to different values to
            try and trigger the different statements.
        </Paragraph>
        <Paragraph>
            Note on predicates: In JavaScript there is something called{" "}
            <Highlight>truthy</Highlight> and <Highlight>falsy</Highlight>,
            which are classifications of valid values inside predicates. For
            example, any non-zero number is <Highlight>truthy</Highlight>, like{" "}
            <InlineCode>1</InlineCode> or <InlineCode>42</InlineCode> and will
            also cause the if statement body to be executed. Best practice is to
            only use <InlineCode>boolean</InlineCode> type values, though there
            are exceptions with <InlineCode>null</InlineCode> and{" "}
            <InlineCode>undefined</InlineCode> values that we will look at
            later.
        </Paragraph>
        <Paragraph>
            Next, we will look at{" "}
            <InlineLink to="/control-structures/for#top">for loops</InlineLink>.
        </Paragraph>
    </Page>
);
