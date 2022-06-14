import React from "react";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";

export const Toolbox = () => {
    return (
        <Page>
            <PageHeader>Learn Programming</PageHeader>
            <PageContent>
                <Paragraph>
                    To be able to program efficiently and sanely, a developer
                    needs their tools.
                </Paragraph>
                <Paragraph>
                    The toolbox is a collection of tools that a developer can
                    use to learn how to program.
                </Paragraph>
                <Paragraph>
                    Here are the tools we will be using in this course:
                </Paragraph>
                <ul className="text-xl list-inside list-disc mb-10">
                    <li>
                        Code editor:{" "}
                        <InlineLink to="https://code.visualstudio.com/download">
                            Visual Studio Code
                        </InlineLink>
                    </li>
                    <li>
                        Programming language runtime (choose the LTS version):{" "}
                        <InlineLink to="https://nodejs.org/en/download/">
                            Node.js
                        </InlineLink>
                    </li>
                </ul>
                <Paragraph>
                    Once you have downloaded and installed the tools, you can
                    head over to the <InlineLink to="">next section</InlineLink>{" "}
                    (coming soon) .
                </Paragraph>
            </PageContent>
        </Page>
    );
};
