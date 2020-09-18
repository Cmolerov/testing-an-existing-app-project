const { expect } = require("chai");
const { mergeItems } = require("../merge-items");
describe("The mergeItems function", () => {
    const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
    it("should return no <tr>s and no <td>s for no items", () => {
        //arrange
        const items = [];

        // act
        const result = mergeItems(template, items);

        // assert
        expect(result).to.include("<table>");
        expect(result).to.include("</table>");
        expect(result).to.include("<tbody>");
        expect(result).to.include("</tbody>");
        expect(result).to.not.include("<tr>");
        expect(result).to.not.include("</tr>");
        expect(result).to.not.include("<td>");
        expect(result).to.not.include("</td>");
    });

    it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
        const items = [{ title: "Title 1", category: "Category 1" }];
        const result = mergeItems(template, items);

        expect(result).to.include("<table>");
        expect(result).to.include("</table>");
        expect(result).to.include("<tbody>");
        expect(result).to.include("</tbody>");
        expect(result).to.include("<tr>");
        expect(result).to.include("</tr>");
        expect(result).to.include("<td>Title 1</td>");
        expect(result).to.include("<td>Category 1</td>");
        // expect(result).to.include('<form method = "POST" action = "/items/1">');
    });

    it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
        const items = [
            { title: "Title 1", category: "Category 1", isComplete: true },
        ];
        const result = mergeItems(template, items);

        expect(result).to.include("<table>");
        expect(result).to.include("</table>");
        expect(result).to.include("<tbody>");
        expect(result).to.include("</tbody>");
        expect(result).to.include("<tr>");
        expect(result).to.include("</tr>");
        expect(result).to.include("<td>Title 1</td>");
        expect(result).to.include("<td>Category 1</td>");
    });

    // it("should return three <tr>s for three items", () => {
    //     const items = [
    //         { title: "Title 1", category: "Category 1", isComplete: true },
    //     ];
    //     const result = mergeItems(template, items);

    //     expect(result).to.include("<table>");
    //     expect(result).to.include("</table>");
    //     expect(result).to.include("<tbody>");
    //     expect(result).to.include("</tbody>");
    //     expect(result).to.include("<tr>");
    //     expect(result).to.include("</tr>");
    //     expect(result).to.include("<td>Title 1</td>");
    //     expect(result).to.include("<td>Category 1</td>");
    //     expect(result).to.include("<td>isComplete</td>");
    // });
});
