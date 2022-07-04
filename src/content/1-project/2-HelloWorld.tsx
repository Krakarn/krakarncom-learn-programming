import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    Code,
    TerminalCommand,
    TerminalOutput,
    Exercise,
    InlineLink,
    Highlight,
} from "@components";

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
                Note: This is an exercise. If you complete the given task the
                border of the exercise becomes green. You can see the output of
                your program below the code. The output section can also contain
                errors or hints, depending on what you type in the code. Your
                code will be locally saved on this computer, so if you refresh
                this page the code will not disappear.
                <Exercise
                    header="Logging to the Console"
                    description={
                        <>
                            Print "I am beginning my journey to become a
                            programmer." to the console.
                        </>
                    }
                    saveKey="1-project-2-hello-world-0"
                    iterations={1}
                    correctCode="console.log('I am beginning my journey to become a programmer.')"
                    initialCode=""
                />
            </Paragraph>
            <Paragraph>
                Next, we will start to get into the meat of programming. First
                up is{" "}
                <InlineLink to="/variables/constants#top">variables</InlineLink>
                .
            </Paragraph>
        </PageContent>
    </Page>
);

export default HelloWorld;
