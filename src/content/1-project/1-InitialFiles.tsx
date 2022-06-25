import React from "react";
import { Highlight } from "../../components/Highlight";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";
import { TerminalCommand } from "../../components/TerminalCommand";

export const InitialFiles = () => (
    <Page>
        <PageHeader>Project - Initial Files</PageHeader>
        <PageContent>
            <Paragraph>
                Visual Studio Code has support for more languages than just
                JavaScript. However, we will only be using JavaScript for this
                course.
            </Paragraph>
            <Paragraph>
                To create a JavaScript project, you will need one of the tools
                that we downloaded earlier, <Highlight>Node.js</Highlight>.
            </Paragraph>
            <Paragraph>
                Node.js is a JavaScript runtime that can run JavaScript code.
                After installing it, it exposes some commands:
            </Paragraph>
            <Paragraph>
                <ul className="list-inside list-disc">
                    <li>
                        <Highlight>node</Highlight> - The JavaScript interpreter
                        that can run the code.
                    </li>
                    <li>
                        <Highlight>npm</Highlight> - The package manager that
                        can install and manage packages.
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                We won't be using third-party packages for now, but we will use{" "}
                <Highlight>npm</Highlight> to create the initial JavaScript
                project files.
            </Paragraph>
            <Paragraph>
                Run this command in the terminal to{" "}
                <Highlight>create the initial files</Highlight> (make sure to cd
                to the project folder first):
                <TerminalCommand>npm init -y</TerminalCommand>
            </Paragraph>
            <Paragraph>
                After running the command, you will see a file named{" "}
                <Highlight>
                    <code>package.json</code>
                </Highlight>{" "}
                created in the project folder. This is the project file and it
                contains information about the project.
            </Paragraph>
            <Paragraph>
                You are now ready to start{" "}
                <InlineLink to="/project/hello-world#top">
                    creating JavaScript files
                </InlineLink>{" "}
                in your project.
            </Paragraph>
        </PageContent>
    </Page>
);
