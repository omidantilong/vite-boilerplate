import React from "react"
import { render } from "@testing-library/react"
import Header from "./Header"

describe("header", () => {
  it("should render header", () => {
    render(<Header />)
  })
})
