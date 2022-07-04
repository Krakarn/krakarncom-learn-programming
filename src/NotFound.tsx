import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    InlineLink,
} from "@components";

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
