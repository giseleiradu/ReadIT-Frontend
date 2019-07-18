import { isEmpty, capitalize, stringToHtmlElement } from "../../helpers";

describe("Helper Functions", () => {
  describe("isEmpty validator", () => {
    it("returns isEmpty true", () => {
      expect(isEmpty("")).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty()).toBe(true);
      expect(isEmpty(null)).toBe(true);
    });
  });

  describe("capitalize", () => {
    it("should capitalize the first letter", () => {
      expect(capitalize("luc")).toBe("Luc");
      expect(capitalize("luc abayo")).toBe("Luc abayo");
      expect(capitalize(1)).toBe(1);
    });
  });

  describe("rendering html text from plain text", () => {
    test("should render the image", () => {
      const text = `<div><p>Hello world</p><img src="https://picsum.photos/200/300/?random" /></div>`;
      const htmlElement = stringToHtmlElement(text);
      expect(htmlElement).toHaveProperty("body");
      expect(htmlElement).toHaveProperty(
        "firstImage",
        `"https://picsum.photos/200/300/?random"`,
      );
    });
  });
});
