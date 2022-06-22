import React from "react";
import { Code } from "../../components/Code";
import { Highlight } from "../../components/Highlight";
import { InlineCode } from "../../components/InlineCode";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";

export const Mutables = () => (
    <Page>
        <PageHeader>Variables - Mutables</PageHeader>
        <PageContent>
            <Paragraph>
                <Highlight>Mutable variables</Highlight> are variables are able
                to change value throughout the program execution.
            </Paragraph>
            <Paragraph>
                To create a mutable variable, you need to use the{" "}
                <Highlight>keyword</Highlight> <InlineCode>let</InlineCode>:
                <Code>
                    let x = 1;{"\n"}console.log(x);{"\n"}x = 3;{"\n"}
                    console.log(x);
                </Code>
            </Paragraph>
            <Paragraph>
                Another example:
                <Code>
                    let life = 3;{"\n"}console.log("Lives left:", life);{"\n"}
                    console.log("You stumble into a hole of spikes.");{"\n"}life
                    = 2;{"\n"}console.log("Lives left:", life);
                </Code>
            </Paragraph>
            <Paragraph>
                Next, we will look at{" "}
                <InlineLink to="/data-types/intro">data types</InlineLink>.
            </Paragraph>
        </PageContent>
    </Page>
);
