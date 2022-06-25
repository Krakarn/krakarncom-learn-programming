import React from "react";
import { Highlight } from "../../components/Highlight";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";

export const RootFolder = () => (
    <Page>
        <PageHeader>Project - Root Folder</PageHeader>
        <PageContent>
            <Paragraph>
                To be able to start building an application you need to create a
                new project.
            </Paragraph>
            <Paragraph>
                You will need a project root folder. This is where your project
                will live, and where all the project files will be stored.
            </Paragraph>
            <Paragraph>
                You can start with{" "}
                <Highlight>creating a project root folder</Highlight>:
            </Paragraph>
            <Paragraph>
                <ul className="list-decimal list-inside">
                    <li>
                        Open <Highlight>Visual Studio Code</Highlight>.
                    </li>
                    <li>
                        Click on the <Highlight>File</Highlight> menu in the
                        top-left of the Visual Studio Code window.
                    </li>
                    <li>
                        Click on the <Highlight>Open Folder</Highlight> option.
                    </li>
                    <li>
                        From here, choose a location where you want to create
                        your project. You can create a new folder or use an
                        existing one. Click <Highlight>Select Folder</Highlight>{" "}
                        in the bottom right of the window when you've either
                        highlighted the folder you want as a project root or
                        you've navigated into that folder.
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                You should now see the name of your folder on the left-hand side
                of the window, under the section <Highlight>Explorer</Highlight>
                .
            </Paragraph>
            <Paragraph>
                Now that we have a project root folder, we can start{" "}
                <InlineLink to="/project/initial-files#top">
                    adding files to build our application
                </InlineLink>
                .
            </Paragraph>
        </PageContent>
    </Page>
);
