import { describe, expect, it } from "vitest"
import { render, screen } from '@testing-library/react'

import Page from '../app/page'

describe("Homepage", () => {
    it("should render the component and show the home profile", () => {
        render(<Page />)
        const homescreenTitleId = screen.getByTestId("homescreen-title")
        expect(homescreenTitleId).toBeDefined()
    })
})
