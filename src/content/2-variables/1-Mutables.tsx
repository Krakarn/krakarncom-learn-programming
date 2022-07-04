import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    InlineCode,
    Code,
    Exercise,
    InlineLink,
    Highlight,
} from "@components";

export const Mutables = () => (
    <Page>
        <PageHeader>Variables - Mutables</PageHeader>
        <PageContent>
            <Paragraph>
                <Highlight>Mutable variables</Highlight> are variables are able
                to change value throughout the program execution.
            </Paragraph>
            <Paragraph>
                To create a mutable variable, you need to use the{" "}
                <Highlight>keyword</Highlight> <InlineCode>let</InlineCode>:
                <Code>
                    let x = 1;{"\n"}console.log(x);{"\n"}x = 3;{"\n"}
                    console.log(x);
                </Code>
            </Paragraph>
            <Paragraph>
                Another example:
                <Code>
                    let life = 3;{"\n"}console.log("Lives left:", life);{"\n"}
                    console.log("You stumble into a hole of spikes.");{"\n"}life
                    = 2;{"\n"}console.log("Lives left:", life);
                </Code>
            </Paragraph>
            <Paragraph>
                <Exercise
                    saveKey="2-variables-1-mutables-0"
                    header="Mutables in a Text Adventure"
                    description={
                        <>
                            Print a text adventure log to the console given
                            these requirements:{" "}
                            <ul className="list-decimal list-inside">
                                <li>
                                    A <Highlight>player's health</Highlight> is
                                    being kept track by the variable{" "}
                                    <InlineCode>health</InlineCode>. It should
                                    start at <InlineCode>5</InlineCode>.
                                </li>
                                <li>
                                    Print the player's health to the console
                                    like so: "Health: 5".
                                </li>
                                <li>
                                    Print the predefined{" "}
                                    <InlineCode>damageDescription</InlineCode>{" "}
                                    to the console.
                                </li>
                                <li>Decrease the player's health by 2.</li>
                                <li>
                                    Print the updated player's health to the
                                    console again.
                                </li>
                            </ul>
                        </>
                    }
                    preCode={`let health;\nconst damageDescription = "You take 2 damage from the Dark Wizard's Lightning Bolt spell.";`}
                    postCode={`if (health !== 3) throw new Error("health is not 3");`}
                    initialCode={``}
                    correctCode={`health = 5;console.log("Health:", health);console.log(damageDescription);health = 3;console.log("Health:", health);`}
                    iterations={1}
                    hidePostCode
                ></Exercise>
            </Paragraph>
            <Paragraph>
                Next, we will look at{" "}
                <InlineLink to="/data-types/intro#top">data types</InlineLink>.
            </Paragraph>
        </PageContent>
    </Page>
);

export default Mutables;
