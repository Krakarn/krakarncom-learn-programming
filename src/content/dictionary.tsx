import React from "react";
import { Code } from "../components/Code";
import { InlineCode } from "../components/InlineCode";
import { Paragraph } from "../components/Paragraph";
import { TerminalOutput } from "../components/TerminalOutput";

const assign = (
    <>
        <Paragraph>An identifier is assigned to a value.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>
                let x = 1;{"\n"}x = 3;{"\n"}const text = "Hello!";
            </Code>
        </Paragraph>
    </>
);

const constant = (
    <>
        <Paragraph>A container of something that cannot be changed.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>const x = 5;{"\n"}const y = x + 3;</Code>
        </Paragraph>
    </>
);

const constantVariable = constant;

const define = (
    <>
        <Paragraph>Creating a new variable or function.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>
                let a;{"\n"}let b;{"\n"}const x = 1;{"\n"}const f = () {"=>"}{" "}
                console.log("Hello!");
            </Code>
        </Paragraph>
    </>
);

const expression = (
    <>
        <Paragraph>
            An expression is a piece of code that will evaluate to a value.
        </Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>
                1 + 2 + 3; // Evaluates to 6{"\n"}console.log(1 + 2 + 3); //
                Evaluates to 6, then logs it to the console{"\n"}
                const x = 1 + 2 + 3; // Assigns 6 to x{"\n"}
                const y = x + 6; // Assigns 12 to y{"\n"}const z = y; // y is
                technically also an expression that evaluates to 12
            </Code>
        </Paragraph>
    </>
);

const identifier = (
    <>
        <Paragraph>
            The name of a variable or function. The name you can give a variable
            depends on the programming language.
        </Paragraph>
        <Paragraph>
            Examples in JavaScript:
            <Code noEditor>
                let a; // Identifier of this variable is a.{"\n"}const
                myConstant = 1;{"\n"}let this_is_a_validIdentifier_12345;
            </Code>
        </Paragraph>
    </>
);

const keyword = (
    <>
        <Paragraph>
            A keyword is a reserved word in a programming language with special
            meaning.
        </Paragraph>
        <Paragraph>
            Examples in JavaScript: <InlineCode>const</InlineCode>,{" "}
            <InlineCode>let</InlineCode>, <InlineCode>if</InlineCode>,{" "}
            <InlineCode>for</InlineCode>
        </Paragraph>
    </>
);

const literal = (
    <>
        <Paragraph>
            A literal is a value that is defined directly in the code and not a
            value represented by a variable.
        </Paragraph>
        <Paragraph>
            Examples in JavaScript: <InlineCode>1</InlineCode>{" "}
            <InlineCode>"Hello!"</InlineCode> <InlineCode>true</InlineCode>.
            <Code noEditor>
                const x = 1; // This constant is assigned the literal value 1.
                {"\n"}const y = x; // This constant is assigned the value of the
                variable x. Not a literal value.
                {"\n"}// These two variables will contain the same value.
                {"\n"}// The difference is that y depends on the value of x.
            </Code>
        </Paragraph>
    </>
);

const logging = (
    <>
        <Paragraph>Logging a value to the console.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>
                console.log("Hello, world!");{"\n"}console.log(5 + 3);{"\n"}
                const greeting = "Hello there!";{"\n"}console.log(greeting);
            </Code>
        </Paragraph>
        <Paragraph>
            Output:
            <TerminalOutput>
                Hello, world!{"\n"}8{"\n"}
                Hello there!
            </TerminalOutput>
        </Paragraph>
    </>
);

const output = (
    <>
        <Paragraph>
            The output of something that is executed. Exactly what it is depends
            on the context. In the context of a console, it is whatever the
            program will print.
        </Paragraph>
    </>
);

const value = (
    <>
        <Paragraph>The value that an identifier is assigned to.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>let a = 1; // Value of this variable is 1.</Code>
            <Code noEditor>
                const x = 1;{"\n"}const y = x + 3; // Value of this variable is
                4.
            </Code>
        </Paragraph>
    </>
);

const variable = (
    <>
        <Paragraph>A container.</Paragraph>
        <Paragraph>
            Examples:
            <Code noEditor>
                const a = 3;{"\n"}let x = 5;{"\n"}let y = x - 2;
            </Code>
        </Paragraph>
    </>
);

const variables = variable;

export const dictionary = {
    assign,
    constant,
    "constant variable": constantVariable,
    define,
    expression,
    identifier,
    keyword,
    literal,
    logging,
    output,
    value,
    variable,
    variables,
} as const;
