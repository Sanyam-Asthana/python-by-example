import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import helloText from "./snippets/helloworld.html?raw";
import helloCode from "./snippets/helloworld.py?raw";
import helloOutput from "./snippets/helloworld.out?raw";

import printingText from "./snippets/printing.html?raw";
import printingCode from "./snippets/printing.py?raw";
import printingOutput from "./snippets/printing.out?raw";

import variablesText from "./snippets/variables.html?raw";
import variablesCode from "./snippets/variables.py?raw";
import variablesOutput from "./snippets/variables.out?raw";

import inputText from "./snippets/input.html?raw";
import inputCode from "./snippets/input.py?raw";
import inputOutput from "./snippets/input.out?raw";

import typesText from "./snippets/types.html?raw";
import typesCode from "./snippets/types.py?raw";
import typesOutput from "./snippets/types.out?raw";

import operatorsText from "./snippets/operators.html?raw";
import operatorsCode from "./snippets/operators.py?raw";
import operatorsOutput from "./snippets/operators.out?raw";

import conditionalsText from "./snippets/conditionals.html?raw";
import conditionalsCode from "./snippets/conditionals.py?raw";
import conditionalsOutput from "./snippets/conditionals.out?raw";

export const getFile = (fileName: string) => {
  const filePath = resolve("src/lib/snippets/" + fileName);
  const code = readFileSync(filePath, "utf-8");

  return { code };
};

export const content: any = {
  get helloworld() {
    return ["Hello, World!", helloCode, helloText, helloOutput];
  },
  get printing() {
    return ["Printing", printingCode, printingText, printingOutput];
  },
  get variables() {
    return ["Variables", variablesCode, variablesText, variablesOutput];
  },
  get input() {
    return ["Taking Input", inputCode, inputText, inputOutput];
  },
  get types() {
    return ["Data Types", typesCode, typesText, typesOutput];
  },
  get operators() {
    return ["Operators", operatorsCode, operatorsText, operatorsOutput];
  },
  get conditionals() {
    return [
      "Conditionals",
      conditionalsCode,
      conditionalsText,
      conditionalsOutput,
    ];
  },
};
