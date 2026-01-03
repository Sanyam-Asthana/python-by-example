import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const getFile = (fileName: string) => {
  const filePath = resolve("src/lib/snippets/" + fileName);
  const code = readFileSync(filePath, "utf-8");

  return { code };
};

export const content: any = {
  get helloworld() {
    return [
      "Hello, World!",
      getFile("helloworld.py").code,
      getFile("helloworld.html").code,
      getFile("helloworld.out").code,
    ];
  },
  get printing() {
    return [
      "Printing",
      getFile("printing.py").code,
      getFile("printing.html").code,
      getFile("printing.out").code,
    ];
  },
  get variables() {
    return [
      "Variables",
      getFile("variables.py").code,
      getFile("variables.html").code,
      getFile("variables.out").code,
    ];
  },
  get input() {
    return [
      "Taking Input",
      getFile("input.py").code,
      getFile("input.html").code,
      getFile("input.out").code,
    ];
  },
};
