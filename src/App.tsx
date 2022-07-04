import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    InlineLink,
} from "@components";

export const App = () => {
    return (
        <Page>
            <PageHeader>Learn Programming</PageHeader>
            <PageContent className="items-center">
                <Paragraph className="text-xl">
                    Welcome to my educational page about learning how to
                    program.
                </Paragraph>
                <Paragraph className="text-xl">
                    <InlineLink to="/intro/getting-started">
                        Click here to get started.
                    </InlineLink>
                </Paragraph>
            </PageContent>
        </Page>
    );
};
