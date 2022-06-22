import React from "react";
import { Code } from "../../components/Code";
import { Highlight } from "../../components/Highlight";
import { InlineCode } from "../../components/InlineCode";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";

export const DataTypes = () => (
    <Page>
        <PageHeader>Data Types</PageHeader>
        <PageContent>
            <Paragraph>
                A <Highlight>data type</Highlight> is describing what type the
                data is. Some examples are numbers or strings. What type a
                variable or <Highlight>expression</Highlight> is will determine
                what kind of operations you can do on it.
            </Paragraph>
            <Paragraph>
                <Highlight>Primitives</Highlight> are built-in data types in a
                programming language.
            </Paragraph>
            <Paragraph>
                We will be working with three of the main primitives in
                JavaScript: <InlineCode>number</InlineCode>,{" "}
                <InlineCode>string</InlineCode> and{" "}
                <InlineCode>boolean</InlineCode>.
            </Paragraph>
            <Paragraph>
                There are some others as well, but we won't go through those in
                this course.
            </Paragraph>
            <Paragraph>
                Note: JavaScript is a <Highlight>dynamically typed</Highlight>{" "}
                language, which basically means that variables (except
                constants) can change their type during the course of the
                program. It is not really best practice to keep changing the
                types of your variables though.
            </Paragraph>
            <Paragraph>
                Let's look at some different data types:
                <Code>
                    const n = 1; // This is a number{"\n"}const s = "This is a
                    string."{"\n"}const b = true; // This is a boolean
                </Code>
            </Paragraph>
            <Paragraph>
                Next, we will look at{" "}
                <InlineLink to="/data-types/numbers">numbers</InlineLink> and
                what you can do with them.
            </Paragraph>
        </PageContent>
    </Page>
);
