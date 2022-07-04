import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    InlineLink,
} from "@components";

export const GettingStarted = () => {
    return (
        <Page>
            <PageHeader>Getting Started</PageHeader>
            <PageContent>
                <Paragraph>
                    You will need a few things to get started with programming.
                </Paragraph>
                <Paragraph>
                    First, head over to the{" "}
                    <InlineLink to="/intro/toolbox#top">Toolbox</InlineLink>{" "}
                    section to get the tools you need as a developer.
                </Paragraph>
            </PageContent>
        </Page>
    );
};

export default GettingStarted;
