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
        </PageContent>
    </Page>
);
