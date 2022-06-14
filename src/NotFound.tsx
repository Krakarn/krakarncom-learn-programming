import React from "react";
import { InlineLink } from "./components/InlineLink";
import { Page } from "./components/Page";
import { PageContent } from "./components/PageContent";
import { PageHeader } from "./components/PageHeader";
import { Paragraph } from "./components/Paragraph";

export const NotFound = () => {
    return (
        <Page>
            <PageHeader>404 Not Found</PageHeader>
            <PageContent className="items-center">
                <Paragraph className="text-xl">
                    Whoops, this page did not exist.
                </Paragraph>
                <Paragraph className="text-xl">
                    <InlineLink to="/">Click here to get to safety.</InlineLink>
                </Paragraph>
            </PageContent>
        </Page>
    );
};
