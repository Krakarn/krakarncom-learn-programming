import React from "react";
import { InlineLink } from "./components/InlineLink";
import { Page } from "./components/Page";
import { PageContent } from "./components/PageContent";
import { PageHeader } from "./components/PageHeader";
import { Paragraph } from "./components/Paragraph";

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
