import React from "react";
import {
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    InlineCode,
    PageSectionHeader,
    Code,
    InlineLink,
    Exercise,
    BlockyExercise,
    Highlight,
} from "@components";
import { referenceWarning } from "@content/reference-warning";

export const Numbers = () => (
    <Page>
        <PageHeader>Data Types - Numbers</PageHeader>
        <PageContent>
            <Paragraph>
                In general, programming languages have two distinct number
                types, <Highlight>integer</Highlight> and{" "}
                <Highlight>floating point</Highlight> numbers. The difference is
                that floating point numbers can have decimals.
            </Paragraph>
            <Paragraph>
                In JavaScript however, there is only one numeric data type:{" "}
                <InlineCode>number</InlineCode>. This data type can have
                decimals as well.
            </Paragraph>
            <Paragraph>
                There are some built-in operations that you can do to numbers in
                JavaScript, we will go through some of the most common ones
                here.
            </Paragraph>
            <PageSectionHeader>Algebraic Operations</PageSectionHeader>
            <Paragraph>
                Using <Highlight>operators</Highlight>, you can do addition,
                subtraction, multiplication and division as a built-in feature
                of the language:
                <Code>
                    const x = 5 + 3 - 1;{"\n"}const y = x * 2;{"\n"}const z = y
                    / 2;{"\n"}
                    console.log("x:", x, "y:", y, "z:", z);
                </Code>
            </Paragraph>
            <Paragraph>
                Other operations, like the square root, can be used by utilizing
                the built-in <InlineCode>Math</InlineCode> object:
                <Code>
                    const x = 25;{"\n"}const y = Math.sqrt(x);{"\n"}
                    console.log("x:", x, "y:", y);
                </Code>
            </Paragraph>
            <Paragraph>
                You can also access common mathematical constants:
                <Code>
                    const tau = Math.PI * 2;{"\n"}console.log("tau:", tau)
                </Code>
                Note: For a complete reference to the{" "}
                <InlineCode>Math</InlineCode> object,{" "}
                <InlineLink
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
                    external
                    target="_blank"
                >
                    click here
                </InlineLink>{" "}
                (or google "javascript math reference")
            </Paragraph>
            <Paragraph>
                If you have a <Highlight>mutable variable</Highlight> you can
                also use some shorthand syntax:
                <Code>
                    let health = 5;{"\n"}
                    console.log("Health:", health);{"\n"}
                    console.log("You take 1 slash damage.");{"\n"}
                    health -= 1;{"\n"}
                    console.log("Health:", health);{"\n"}
                    console.log("You drink a health potion.");{"\n"}
                    health += 1;{"\n"}
                    console.log("Health:", health);
                </Code>
            </Paragraph>
            <Paragraph>
                Note: There are variants for each type of algebraic operation:{" "}
                <InlineCode>+=</InlineCode>, <InlineCode>-=</InlineCode>,{" "}
                <InlineCode>*=</InlineCode> and <InlineCode>/=</InlineCode>
            </Paragraph>
            <Paragraph>
                <Exercise
                    saveKey="3-data-types-1-numbers-0"
                    header="Mutable Numbers"
                    description={
                        <>
                            You are provided three variables,{" "}
                            <InlineCode>x</InlineCode>,{" "}
                            <InlineCode>y</InlineCode> and{" "}
                            <InlineCode>z</InlineCode>.
                            <ul className="list-decimal list-inside">
                                <li>
                                    Set <InlineCode>x</InlineCode> to{" "}
                                    <InlineCode>x * x</InlineCode>.
                                </li>
                                <li>
                                    Set <InlineCode>y</InlineCode> to{" "}
                                    <InlineCode>y + x</InlineCode>.
                                </li>
                                <li>
                                    Set <InlineCode>z</InlineCode> to{" "}
                                    <InlineCode>z + x * y</InlineCode>.
                                </li>
                                <li>
                                    Create a new variable called{" "}
                                    <InlineCode>w</InlineCode> and set it to{" "}
                                    <InlineCode>z + y - x</InlineCode>.
                                </li>
                            </ul>
                        </>
                    }
                    preCode={`
let x = 3;
let y = 10;
let z = 1;
`}
                    postCode={`console.log('x:', x);\nconsole.log('y:', y)\nconsole.log('z:', z)\nconsole.log('w:', w);`}
                    initialCode={``}
                    correctCode={`x *= x; y += x; z += x * y; const w = z + y - x;`}
                    iterations={1}
                ></Exercise>
            </Paragraph>
            <Paragraph>
                <BlockyExercise
                    saveKey="3-data-types-1-numbers-1"
                    header="Blocky"
                    description={
                        <>
                            This is a <Highlight>Blocky Exercise</Highlight>.
                            The red square is <Highlight>Blocky</Highlight>.
                            Your goal in a Blocky Exercise is for Blocky to
                            reach the <Highlight>yellow square</Highlight>.
                        </>
                    }
                    preCode={`
let x = 0;
let y = 0;
`}
                    postCode={`drawBlocky(x, y, 1, 1);`}
                    initialCode={``}
                    correctCode={`x = 1; y = 1;`}
                    iterations={1}
                ></BlockyExercise>
            </Paragraph>
            <PageSectionHeader>Comparative Operations</PageSectionHeader>
            <Paragraph>
                You can compare numbers with each other, producing a{" "}
                <InlineCode>boolean</InlineCode> result. A{" "}
                <InlineCode>boolean</InlineCode> can be one of two values:{" "}
                <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
                We will look at booleans in more detail later, but just follow
                along for now.
            </Paragraph>
            <Paragraph>
                <Code>
                    const x = 5;{"\n"}console.log(x {"<"} 3);{"\n"}
                    console.log(x {"<"} 10);{"\n"}
                    console.log(x {"<="} 5);{"\n"}
                    console.log(x {">="} 5);{"\n"}
                    console.log(x {">"} 10);{"\n"}
                    console.log(x == 5);{"\n"}console.log(x === 5);
                </Code>
            </Paragraph>
            <Paragraph>
                Note: There are two equals operators,{" "}
                <InlineCode>==</InlineCode> and <InlineCode>===</InlineCode>.
                The reason for this is a bit complex, but basically{" "}
                <InlineCode>==</InlineCode> will evaluate to{" "}
                <InlineCode>true</InlineCode> for expressions like{" "}
                <InlineCode>5 == "5"</InlineCode>, while{" "}
                <InlineCode>===</InlineCode> is more strict and will evaluate{" "}
                <InlineCode>5 === "5"</InlineCode> to{" "}
                <InlineCode>false</InlineCode>. The difference between the two
                is that <InlineCode>===</InlineCode> never considers two values
                of different types equal.
            </Paragraph>
            <Paragraph>
                Another example:
                <Code>
                    {`let health = 2;
const monsterDamage = 2;
console.log("Are you dead?", health <= 0);
console.log("You take", monsterDamage, "damage.");
health -= monsterDamage;
console.log("Are you dead?", health <= 0);`}
                </Code>
            </Paragraph>
            <PageSectionHeader>Reference</PageSectionHeader>
            <Paragraph>
                For a full reference on numbers,{" "}
                <InlineLink
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
                    external
                    target="_blank"
                >
                    click here
                </InlineLink>
                . {referenceWarning}
            </Paragraph>
            <Paragraph>
                Next we will look at{" "}
                <InlineLink to="/data-types/strings#top">strings</InlineLink>.
            </Paragraph>
        </PageContent>
    </Page>
);

export default Numbers;
