/* eslint-disable testing-library/prefer-screen-queries */

// Good practice to create a separate ".test.js" file for every Component
import { render, fireEvent } from "@testing-library/react";
import Counter from "./components/Counter";

// "describe" function is used to describe or write group of tests for a particular Component
describe("Counter Component", () => {
    // "it" function is used to write an individual test
    it("Counter displays correct initialCount", () => {
        // the "render" function is used to get a copy version of the original Component
        // getByTestId is one of the many functions used to select a DOM element
        // to grab the element by test ID, pass data-testid attribute to that Component
        const { getByTestId } = render(<Counter initialCount={0} />); 
        // getByTestId selector basically returns only that particular HTML tag. To get the contents of that tag, use "textContent"
        // using this method will only return the value of that element in form of a string. Convert it to integer value using "Number"
        const countValue = Number(getByTestId("counter").textContent);
        // expect function takes argument of a variable, and toEqual function is used to check the values are equal or not
        expect(countValue).toEqual(0);
        
    });

    it("Counter should increment by one when the Increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />); 
        // getByRole selector is used to grab any element through it's role. It can take 2 arguments. One is the role, and other is
        // to differentiate it from other similar role elements.
        const incrementButton = getByRole("button", { name: "Increment" });
        // fireEvent function is used to fire/simulate a particular event like click, hover etc. from an element. 
        // It takes the argument of that element.
        fireEvent.click(incrementButton);
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(1);
    });

    it("Counter should decrement by one when the Decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />); 
        const decrementButton = getByRole("button", { name: "Decrement" });
        fireEvent.click(decrementButton);
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(0);
    });

    it("Counter value should reset to 0", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />); 
        const resetButton = getByRole("button", { name: "Reset to 0" });
        fireEvent.click(resetButton);
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(0);
    });

    it("Counter value should switch it's sign", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />); 
        const resetButton = getByRole("button", { name: "Switch Signs" });
        fireEvent.click(resetButton);
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(-5);
    });
    
    // to run the test, use "npm test" command
});