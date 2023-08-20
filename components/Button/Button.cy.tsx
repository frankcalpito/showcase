import React from "react"
import { Button } from "./Button"
 
describe("<Button />", () => {
  it("should render and display expected content", () => {
    // Mount the Button component
    cy.mount(<Button label="Test"/>)
 
    // The button should contains Test
    cy.get("button").contains("Test")
  })
})