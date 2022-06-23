import React from "react";
import { Code } from "../../components/Code";
import { Highlight } from "../../components/Highlight";
import { InlineLink } from "../../components/InlineLink";
import { Page } from "../../components/Page";
import { PageContent } from "../../components/PageContent";
import { PageHeader } from "../../components/PageHeader";
import { Paragraph } from "../../components/Paragraph";
import { TerminalCommand } from "../../components/TerminalCommand";
import { TerminalOutput } from "../../components/TerminalOutput";

export const HelloWorld = () => (
    <Page>
        <PageHeader>Project - Hello World</PageHeader>
        <PageContent>
            <Paragraph>
                We will now create a small script that will print "Hello,
                world!" to the console.
            </Paragraph>
            <Paragraph>
                Create a new file in the project folder named{" "}
                <Highlight>hello.js</Highlight>. Tip: You can hover over the{" "}
                <Highlight>Explorer</Highlight> section where you see your
                project files, and some buttons will appear. These can be used
                to quickly create files and folders.
            </Paragraph>
            <Paragraph>
                In the file, write the following code:
                <Code hideOutput>console.log("Hello, world!");</Code>
            </Paragraph>
            <Paragraph>
                Save the file with Ctrl+S (or File {"->"} Save).
            </Paragraph>
            <Paragraph>
                Run the file in the terminal with the following command:
                <TerminalCommand>node hello.js</TerminalCommand>
            </Paragraph>
            <Paragraph>
                You will now see the <Highlight>output</Highlight> of the the
                program:
                <TerminalOutput>Hello, world!</TerminalOutput>
            </Paragraph>
            <Paragraph>
                Congratulations, you have now successfully created a program in
                JavaScript and executed it on your local machine!
            </Paragraph>
            <Paragraph>
                Next, we will start to get into the meat of programming. First
                up is{" "}
                <InlineLink to="/variables/constants">variables</InlineLink>.
            </Paragraph>
        </PageContent>
    </Page>
);
