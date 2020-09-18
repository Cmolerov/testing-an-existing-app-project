const { expect } = require("chai");
const { mergeCategories } = require("../merge-categories");

describe("mergeCategories()", () => {
    context("Using <li> tags", () => {
        const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

        it("should return no LIs for no categories", () => {
            // arrange
            const categories = [];

            // act
            const result = mergeCategories(template, categories, "li");

            // assert
            expect(result).to.contain("<div>");
            expect(result).to.contain("</div>");
            expect(result).to.contain("<ul>");
            expect(result).to.contain("</ul>");
            expect(result).to.not.contain("<li>");
            expect(result).to.not.contain("</li>");
        });

        it("should return a single <li> for one category", () => {
            // expect.fail("please write this test");

            // arrange
            const categories = ["cat 1"];

            //act
            const result = mergeCategories(template, categories, "li");

            // assert
            expect(result).to.contain("<div>");
            expect(result).to.contain("</div>");
            expect(result).to.contain("<ul>");
            expect(result).to.contain("</ul>");
            expect(result).to.contain("<li>cat 1</li>");
            expect(result).to.not.contain("<li><!--Content here --></li>>");

            // const categories = ["Cat 1"];
            // const result = mergeCategories(template, categories, "li");
            // expect(result).to.contain("<div>");
            // expect(result).to.contain("</div>");
            // expect(result).to.contain("<ul>");
            // expect(result).to.contain("</ul>");
            // expect(result).to.contain("<li>Cat 1</li>");
        });

        it("should return an LI for each category", () => {
            // arrange
            const categories = ["Cat 1", "Cat 2", "Cat 3"];

            // act
            const result = mergeCategories(template, categories, "li");

            //assert
            expect(result).to.contain("<div>");
            expect(result).to.contain("</div>");
            expect(result).to.contain("<ul>");
            expect(result).to.contain("</ul>");
            expect(result).to.contain("<li>Cat 1</li>");
            expect(result).to.contain("<li>Cat 2</li>");
            expect(result).to.contain("<li>Cat 3</li>");
        });
    });

    context("using <option> tags", () => {
        const template = `
          <div>
            <select>
              <!-- Content here -->
            </select>
          </div>
        `;

        it("should return no <option>s for no categories", () => {
            // arrange
            const categories = [];
            // act
            const result = mergeCategories(template, categories, "option");

            // assert
            expect(result).to.include("<div>");
            expect(result).to.include("</div>");
            expect(result).to.include("<select>");
            expect(result).to.include("</select>");
            expect(result).to.not.contain("<option>");
            expect(result).to.not.contain("/<option>");
        });

        it("should return a single <option> for one category", () => {
            //arrange
            const categories = ["cat1"];

            //act
            const result = mergeCategories(template, categories, "option");

            //assert

            expect(result).to.include("<div>");
            expect(result).to.include("</div>");
            expect(result).to.include("<select>");
            expect(result).to.include("</select>");
            expect(result).to.include("<option>cat1</option>");
        });

        it("should return an <option> for each category", () => {
            //arrange
            const categories = ["cat1", "cat2", "cat3"];

            //act
            const result = mergeCategories(template, categories, "option");

            //assert
            expect(result).to.include("<div>");
            expect(result).to.include("</div>");
            expect(result).to.include("<select>");
            expect(result).to.include("</select>");
            expect(result).to.include("<option>cat1</option>");
            expect(result).to.include("<option>cat2</option>");
            expect(result).to.include("<option>cat3</option>");
        });
    });
});
