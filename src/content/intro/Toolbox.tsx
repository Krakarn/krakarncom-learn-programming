import React from "react";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";

export const Toolbox = () => {
    return (
        <Page>
            <PageHeader>Toolbox</PageHeader>
            <PageContent>
                <Paragraph>
                    To be able to program efficiently and sanely, a developer
                    needs their tools.
                </Paragraph>
                <Paragraph>
                    Here are the tools we will be using in this course:
                </Paragraph>
                <Paragraph>
                    <ul className="text-xl list-inside list-disc">
                        <li>
                            Code editor:{" "}
                            <InlineLink
                                to="https://code.visualstudio.com/download"
                                external={true}
                                target="_blank"
                            >
                                Visual Studio Code
                            </InlineLink>
                        </li>
                        <li>
                            Programming language runtime (choose the LTS
                            version):{" "}
                            <InlineLink
                                to="https://nodejs.org/en/download/"
                                external={true}
                                target="_blank"
                            >
                                Node.js
                            </InlineLink>
                        </li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    Once you have downloaded and installed the tools, you can
                    head over to the{" "}
                    <InlineLink to="/project/root-folder">
                        next section
                    </InlineLink>
                    .
                </Paragraph>
            </PageContent>
        </Page>
    );
};
