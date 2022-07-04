import React from "react";
import {
    Code,
    InlineCode,
    Page,
    PageHeader,
    PageContent,
    Paragraph,
    PageSectionHeader,
    InlineLink,
    Highlight,
} from "@components";
import { referenceWarning } from "@content/reference-warning";

const TruthTable = ({
    operation,
    values: [one, two, three, four],
}: {
    operation: string;
    values: [boolean, boolean, boolean, boolean];
}) => (
    <>
        <Code noEditor hideOutput>{`// Truth table for operation:
const result = left ${operation} right;`}</Code>
        <table className="table outline outline-white outline-1">
            <thead className="table-header-group">
                <tr className="table-row border-b">
                    <th className="table-cell p-3 border-r">
                        <InlineCode>left</InlineCode>
                    </th>
                    <th className="table-cell p-3 border-r">
                        <InlineCode>right</InlineCode>
                    </th>
                    <th className="table-cell p-3">
                        <InlineCode>result</InlineCode>
                    </th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                <tr className="table-row border-b">
                    <td className="table-cell p-3 border-r text-red-400">
                        false
                    </td>
                    <td className="table-cell p-3 border-r text-red-400">
                        false
                    </td>
                    <td
                        className={`table-cell p-3 text-${
                            one ? "green" : "red"
                        }-400`}
                    >
                        {one.toString()}
                    </td>
                </tr>
                <tr className="table-row border-b">
                    <td className="table-cell p-3 border-r text-red-400">
                        false
                    </td>
                    <td className="table-cell p-3 border-r text-green-400">
                        true
                    </td>
                    <td
                        className={`table-cell p-3 text-${
                            two ? "green" : "red"
                        }-400`}
                    >
                        {two.toString()}
                    </td>
                </tr>
                <tr className="table-row border-b">
                    <td className="table-cell p-3 border-r text-green-400">
                        true
                    </td>
                    <td className="table-cell p-3 border-r text-red-400">
                        false
                    </td>
                    <td
                        className={`table-cell p-3 text-${
                            three ? "green" : "red"
                        }-400`}
                    >
                        {three.toString()}
                    </td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell p-3 border-r text-green-400">
                        true
                    </td>
                    <td className="table-cell p-3 border-r text-green-400">
                        true
                    </td>
                    <td
                        className={`table-cell p-3 text-${
                            four ? "green" : "red"
                        }-400`}
                    >
                        {four.toString()}
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);
export const Booleans = () => (
    <Page>
        <PageHeader>Data Types - Booleans</PageHeader>
        <PageContent>
            <Paragraph>
                Variables with the type <InlineCode>boolean</InlineCode> can
                have a value of either <InlineCode>true</InlineCode> or{" "}
                <InlineCode>false</InlineCode>.
            </Paragraph>
            <PageSectionHeader>Boolean Values</PageSectionHeader>
            <Paragraph>
                You can create variables with boolean values like this:
                <Code>
                    const isEarthAPlanet = true;{"\n"}const isPlutoAPlanet =
                    false;{"\n"}console.log(`Is Earth a planet?{" "}
                    {"${isEarthAPlanet}"}`);{"\n"}
                    console.log(`Is Pluto a planet? {"${isPlutoAPlanet}"}`);
                </Code>
            </Paragraph>
            <Paragraph>
                Boolean values are also a product of comparison expressions:
                <Code>{`let health = 3;
let isAlive = health > 0;
console.log(health, isAlive);
health -= 3;
isAlive = health > 0;
console.log(health, isAlive);`}</Code>
            </Paragraph>
            <PageSectionHeader>Boolean Algebra</PageSectionHeader>
            <Paragraph>
                Boolean algebra is a way of combining multiple boolean values
                into one:
                <Code>
                    {`const laysEggs = true;
const hasFur = true;
const isAnimal = laysEggs && hasFur;
console.log(\`Does it lay eggs? \${laysEggs}\`);
console.log(\`Does it have fur? \${hasFur}\`);
console.log(\`Is it an animal? \${isAnimal}\`);
// Note: this is probably not the correct criteria to be classified as an animal`}
                </Code>
                The <InlineCode>&&</InlineCode> operator (called{" "}
                <Highlight>and</Highlight> operator) will combine two boolean
                values into one. If both values are{" "}
                <InlineCode>true</InlineCode>, the expression will evaluate to{" "}
                <InlineCode>true</InlineCode>. If one or both of the values are{" "}
                <InlineCode>false</InlineCode>, it will evaluate to{" "}
                <InlineCode>false</InlineCode>. It's called the{" "}
                <Highlight>and</Highlight> operator since in order for the
                expression to evaluate to <InlineCode>true</InlineCode>, the
                left <Highlight>and</Highlight> the right value needs to be{" "}
                <InlineCode>true</InlineCode>.
            </Paragraph>
            <Paragraph>
                Try changing the values of the variables above (
                <InlineCode>laysEggs</InlineCode> and{" "}
                <InlineCode>hasFur</InlineCode>) and see what the outcome is.
            </Paragraph>
            <Paragraph>
                This is a <Highlight>truth table</Highlight>. It is used to
                convey the effects of boolean operations. Each row represents a
                different <Highlight>boolean algebraic expression</Highlight>.
                The <InlineCode>left</InlineCode> and the{" "}
                <InlineCode>right</InlineCode> values under the operation will
                evaluate to <InlineCode>result</InlineCode>.
                <TruthTable
                    operation="&&"
                    values={[false, false, false, true]}
                />
            </Paragraph>
            <Paragraph>
                <Code>
                    {`const left = false;
const right = false;
const result = left && right;
console.log(\`\${left} && \${right} === \${result}\`);`}
                </Code>
                Try changing the values of left and right to match the truth
                table above and you can see that these are the only scenarios
                you can have with boolean values, and that the results are
                correct.
            </Paragraph>
            <Paragraph>
                There are other boolean operations as well, we will look at one
                more. Here's the <InlineCode>||</InlineCode> operator (called{" "}
                <Highlight>or</Highlight> operator):
                <TruthTable operation="||" values={[false, true, true, true]} />
                This is called the <Highlight>or</Highlight> operator because
                either <InlineCode>left</InlineCode> <Highlight>or</Highlight>{" "}
                <InlineCode>right</InlineCode> needs to be{" "}
                <InlineCode>true</InlineCode> in order for the expression to
                evaluate to <InlineCode>true</InlineCode>.
            </Paragraph>
            <Paragraph>
                <Code>{`const left = false;
const right = false;
const result = left || right;
console.log(\`\${left} || \${right} === \${result}\`);`}</Code>
            </Paragraph>
            <Paragraph>
                Another example:
                <Code>
                    const canJump = true;{"\n"}const canRun = false;{"\n"}const
                    canBothJumpAndRun = canJump && canRun;{"\n"}const
                    canEitherJumpOrRun = canJump || canRun;{"\n"}
                    console.log(`Can both jump and run? {"${canBothJumpAndRun}"}
                    `);{"\n"}
                    console.log(`Can either jump or run?{" "}
                    {"${canEitherJumpOrRun}"}`);
                </Code>
            </Paragraph>
            <PageSectionHeader>Reference</PageSectionHeader>
            <Paragraph>
                For a full reference on booleans,{" "}
                <InlineLink
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
                    external
                    target="_blank"
                >
                    click here
                </InlineLink>
                . {referenceWarning}
            </Paragraph>
            <Paragraph>
                That's it for <Highlight>data types</Highlight>. Next, we will
                look at{" "}
                <InlineLink to="/control-structures/if#top">
                    control structures
                </InlineLink>
                .
            </Paragraph>
        </PageContent>
    </Page>
);

export default Booleans;
